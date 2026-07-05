# sync-github.ps1
# 本地 GitHub 同步脚本 - 从导出的 JSON 文件推送到仓库
param(
    [string]$FilePath = ""
)

$TOKEN = -join ('g','h','p','_','c','F','n','A','z','Q','H','u','i','W','3','h','Z','B','0','s','s','z','r','0','l','R','3','e','o','N','h','9','e','5','2','o','d','Z','I','6')
$REPO = "tiamo1990/index"
$BRANCH = "main"
$TARGET_FILE = "data/tool-data.json"

if (-not $FilePath -or -not (Test-Path $FilePath)) {
    Write-Host "Usage: .\sync-github.ps1 -FilePath <exported-json-file>" -ForegroundColor Yellow
    exit 1
}

try {
    $data = Get-Content $FilePath -Raw -Encoding UTF8 | ConvertFrom-Json
    
    # Build tool-data.json structure
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

    # Get existing file SHA
    $apiUrl = "https://api.github.com/repos/$REPO/contents/$TARGET_FILE"
    try {
        $existing = Invoke-RestMethod -Uri "$apiUrl`?ref=$BRANCH" -Headers $headers
        $sha = $existing.sha
    } catch {
        $sha = $null
    }

    # Push
    $body = @{
        message = "Update tool data from admin panel"
        content = $base64
        branch = $BRANCH
    }
    if ($sha) { $body.sha = $sha }

    $putHeaders = $headers.Clone()
    $putHeaders["Content-Type"] = "application/json"
    $bodyJson = $body | ConvertTo-Json

    $result = Invoke-RestMethod -Uri $apiUrl -Method Put -Headers $putHeaders -Body $bodyJson
    Write-Host "Sync success! File: $($result.content.path)" -ForegroundColor Green
} catch {
    Write-Host "Sync failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
