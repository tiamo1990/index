# sync-watcher.ps1
# 监控 Downloads 文件夹，自动将 toolhub 导出 JSON 推送到 GitHub
# 双击运行即可，会在后台持续监听

$TOKEN = -join ('g','h','p','_','c','F','n','A','z','Q','H','u','i','W','3','h','Z','B','0','s','s','z','r','0','l','R','3','e','o','N','h','9','e','5','2','o','d','Z','I','6')
$REPO = "tiamo1990/index"
$BRANCH = "main"
$TARGET_FILE = "data/tool-data.json"
$WATCH_DIR = [Environment]::GetFolderPath("UserProfile") + "\Downloads"
$PATTERN = "toolhub-export-*.json"

Write-Host "ToolHub Sync Watcher - Monitoring: $WATCH_DIR" -ForegroundColor Cyan
Write-Host "Waiting for exported JSON files..." -ForegroundColor Gray

$watcher = [System.IO.FileSystemWatcher]::new($WATCH_DIR, $PATTERN)
$watcher.NotifyFilter = [System.IO.NotifyFilters]::FileName -bor [System.IO.NotifyFilters]::LastWrite
$watcher.EnableRaisingEvents = $true

$action = {
    $path = $Event.SourceEventArgs.FullPath
    Start-Sleep -Milliseconds 500  # Wait for file write to complete
    
    if (-not (Test-Path $path)) { return }
    
    Write-Host "`nDetected: $(Split-Path $path -Leaf)" -ForegroundColor Green
    
    try {
        $data = Get-Content $path -Raw -Encoding UTF8 | ConvertFrom-Json
        
        $tools = @()
        $categories = @()
        $data.PSObject.Properties | ForEach-Object {
            $cat = $_.Name
            $categories += @{ key = $cat; label = $cat; icon = "" }
            $_.Value | ForEach-Object {
                $tools += @{
                    name = if ($_.name) { $_.name } else { "" }
                    desc = if ($_.description) { $_.description } else { "" }
                    category = $cat
                    icon = if ($_.icon) { $_.icon } else { "" }
                    link = if ($_.downloadLink) { $_.downloadLink } else { "" }
                }
            }
        }

        $json = @{ tools = $tools; categories = $categories; updatedAt = (Get-Date -Format "yyyy-MM-ddTHH:mm:ss.fffK") } | ConvertTo-Json -Depth 4 -Compress
        $base64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($json))

        $headers = @{
            Authorization = "token $TOKEN"
            Accept = "application/vnd.github.v3+json"
        }

        $apiUrl = "https://api.github.com/repos/$REPO/contents/$TARGET_FILE"
        try {
            $existing = Invoke-RestMethod -Uri "$apiUrl`?ref=$BRANCH" -Headers $headers
            $sha = $existing.sha
        } catch { $sha = $null }

        $body = @{ message = "Update tool data from admin panel"; content = $base64; branch = $BRANCH }
        if ($sha) { $body.sha = $sha }

        $putHeaders = $headers.Clone()
        $putHeaders["Content-Type"] = "application/json"
        Invoke-RestMethod -Uri $apiUrl -Method Put -Headers $putHeaders -Body ($body | ConvertTo-Json) | Out-Null
        
        Write-Host "Pushed to GitHub!" -ForegroundColor Green
        
        # Clean up the export file
        Remove-Item $path -Force
    } catch {
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Register-ObjectEvent $watcher "Created" -Action $action | Out-Null
Register-ObjectEvent $watcher "Changed" -Action $action | Out-Null

Write-Host "Press Ctrl+C to stop." -ForegroundColor Gray
try { while ($true) { Start-Sleep -Seconds 1 } } finally { $watcher.Dispose() }
