// 从 localStorage 加载资源数据
var resources = [];

// 页面加载完成后初始化
window.onload = function() {
    // 检查登录状态
    if (localStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
    
    // 加载资源列表
    loadResources();
    
    // 编辑表单提交事件
    document.getElementById('editForm').addEventListener('submit', function(e) {
        e.preventDefault();
        updateResource();
    });
    
    // 添加资源表单提交事件
    document.getElementById('addForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addResource();
    });
    
    // 生成静态文件按钮点击事件
    var generateBtn = document.querySelector('button[onclick="generateStaticFiles()"]');
    if (generateBtn) {
        generateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateStaticFiles();
        });
    }
    
    // 分类筛选事件
    document.getElementById('resource-filter').addEventListener('change', function() {
        filterResources();
    });
    
    // 搜索事件
    document.getElementById('resource-search').addEventListener('input', function() {
        filterResources();
    });
};

// 加载资源列表
function loadResources() {
    // 从 localStorage 加载资源数据
    var storedResources = localStorage.getItem('resources');
    if (storedResources) {
        resources = JSON.parse(storedResources);
    } else {
        // 如果没有数据，初始化默认数据
        resources = [
            { id: 1, name: 'WinRar', category: 'system', description: 'WinRAR 是一款功能强大的压缩文件管理工具', downloadLink: 'https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-720sc.exe' },
            { id: 2, name: '360zip', category: 'system', description: '360压缩是一款免费的解压缩软件', downloadLink: 'https://www.onlinedown.net/iopdfbhjl/20267030?module=download&t=website&v=20260318183111' },
            { id: 3, name: 'VS Code', category: 'dev', description: 'Visual Studio Code 是微软推出的免费开源代码编辑器', downloadLink: 'https://code.visualstudio.com/Download' },
            { id: 4, name: 'WPS Office 2025专业版', category: 'office', description: 'WPS Office 是一款功能强大的办公软件', downloadLink: 'https://www.wps.cn/product/wps-office' },
            { id: 5, name: '剪映6.0.1会员永久激活版', category: 'multimedia', description: '剪映是一款专业的视频编辑软件', downloadLink: 'https://www.capcut.com/' }
        ];
        // 保存到 localStorage
        saveResources();
    }
    
    // 渲染资源列表
    renderResources(resources);
}

// 渲染资源列表
function renderResources(resourcesToRender) {
    var tableBody = document.querySelector('#resourcesTable tbody');
    tableBody.innerHTML = '';
    
    for (var i = 0; i < resourcesToRender.length; i++) {
        var resource = resourcesToRender[i];
        var row = document.createElement('tr');
        var rowHtml = '<td>' + resource.id + '</td>';
        rowHtml = rowHtml + '<td>' + resource.name + '</td>';
        rowHtml = rowHtml + '<td>' + getCategoryName(resource.category) + '</td>';
        rowHtml = rowHtml + '<td>' + resource.description + '</td>';
        rowHtml = rowHtml + '<td><a href="' + resource.downloadLink + '" target="_blank">链接</a></td>';
        rowHtml = rowHtml + '<td>';
        rowHtml = rowHtml + '<div class="resource-actions">';
        rowHtml = rowHtml + '<button class="action-btn edit-btn" onclick="editResource(' + resource.id + ')">编辑</button>';
        rowHtml = rowHtml + '<button class="action-btn delete-btn" onclick="deleteResource(' + resource.id + ')">删除</button>';
        rowHtml = rowHtml + '</div>';
        rowHtml = rowHtml + '</td>';
        row.innerHTML = rowHtml;
        tableBody.appendChild(row);
    }
}

// 保存资源数据到 localStorage
function saveResources() {
    localStorage.setItem('resources', JSON.stringify(resources));
}

// 获取分类名称
function getCategoryName(category) {
    var categories = {
        system: '系统工具',
        office: '办公工具',
        dev: '开发工具',
        network: '网络工具',
        multimedia: '多媒体工具',
        plugin: '其他工具'
    };
    return categories[category] || category;
}

// 编辑资源
function editResource(id) {
    var resource = null;
    for (var i = 0; i < resources.length; i++) {
        if (resources[i].id === id) {
            resource = resources[i];
            break;
        }
    }
    if (resource) {
        document.getElementById('resourceId').value = resource.id;
        document.getElementById('editToolName').value = resource.name;
        document.getElementById('editCategory').value = resource.category;
        document.getElementById('editDescription').value = resource.description;
        document.getElementById('editDownloadLink').value = resource.downloadLink;
        
        // 滚动到编辑表单
        document.getElementById('editForm').scrollIntoView(true);
    }
}

// 更新资源
function updateResource() {
    var id = parseInt(document.getElementById('resourceId').value);
    var name = document.getElementById('editToolName').value;
    var category = document.getElementById('editCategory').value;
    var description = document.getElementById('editDescription').value;
    var downloadLink = document.getElementById('editDownloadLink').value;
    
    if (!id) {
        showMessage('请先选择要编辑的资源', 'error');
        return;
    }
    
    var index = -1;
    for (var i = 0; i < resources.length; i++) {
        if (resources[i].id === id) {
            index = i;
            break;
        }
    }
    
    if (index !== -1) {
        resources[index] = {
            id: id,
            name: name,
            category: category,
            description: description,
            downloadLink: downloadLink
        };
        
        // 保存到 localStorage
        saveResources();
        
        loadResources();
        showMessage('资源更新成功', 'success');
        
        // 清空编辑表单
        document.getElementById('editForm').reset();
        document.getElementById('resourceId').value = '';
    } else {
        showMessage('资源不存在', 'error');
    }
}

// 删除资源
function deleteResource(id) {
    if (confirm('确定要删除这个资源吗？')) {
        var newResources = [];
        for (var i = 0; i < resources.length; i++) {
            if (resources[i].id !== id) {
                newResources.push(resources[i]);
            }
        }
        resources = newResources;
        
        // 保存到 localStorage
        saveResources();
        
        loadResources();
        showMessage('资源删除成功', 'success');
    }
}

// 显示消息
function showMessage(message, type) {
    var messageElement = document.getElementById('adminMessage');
    messageElement.textContent = message;
    messageElement.className = 'admin-message ' + type;
    messageElement.style.display = 'block';
    
    // 3秒后自动隐藏
    setTimeout(function() {
        messageElement.style.display = 'none';
    }, 3000);
}

// 添加资源
function addResource() {
    var name = document.getElementById('addToolName').value;
    var category = document.getElementById('addCategory').value;
    var description = document.getElementById('addDescription').value;
    var downloadLink = document.getElementById('addDownloadLink').value;
    
    // 生成新的资源ID
    var newId = 1;
    if (resources.length > 0) {
        var maxId = 0;
        for (var i = 0; i < resources.length; i++) {
            if (resources[i].id > maxId) {
                maxId = resources[i].id;
            }
        }
        newId = maxId + 1;
    }
    
    // 创建新资源
    var newResource = {
        id: newId,
        name: name,
        category: category,
        description: description,
        downloadLink: downloadLink
    };
    
    // 添加到资源列表
    resources.push(newResource);
    
    // 保存到 localStorage
    saveResources();
    
    // 重新加载资源列表
    loadResources();
    
    // 显示成功消息
    showMessage('资源添加成功', 'success');
    
    // 清空添加表单
    document.getElementById('addForm').reset();
}

// 筛选资源
function filterResources() {
    var categoryFilter = document.getElementById('resource-filter').value;
    var searchTerm = document.getElementById('resource-search').value.toLowerCase();
    
    var filteredResources = [];
    
    // 按分类和搜索词筛选
    for (var i = 0; i < resources.length; i++) {
        var resource = resources[i];
        var matchCategory = (categoryFilter === 'all') || (resource.category === categoryFilter);
        var matchSearch = (!searchTerm) || 
                        (resource.name.toLowerCase().indexOf(searchTerm) !== -1) || 
                        (resource.description.toLowerCase().indexOf(searchTerm) !== -1);
        
        if (matchCategory && matchSearch) {
            filteredResources.push(resource);
        }
    }
    
    // 渲染筛选后的资源列表
    renderResources(filteredResources);
}

// 生成静态文件
function generateStaticFiles() {
    try {
        // 按分类生成对应的 HTML 文件
        var categories = ['system', 'office', 'dev', 'network', 'multimedia', 'plugin'];
        var categoryNames = {
            system: '系统工具',
            office: '办公工具',
            dev: '开发工具',
            network: '网络工具',
            multimedia: '多媒体工具',
            plugin: '其他工具'
        };
        
        categories.forEach(function(category) {
            var categoryResources = [];
            for (var i = 0; i < resources.length; i++) {
                if (resources[i].category === category) {
                    categoryResources.push(resources[i]);
                }
            }
            
            // 生成工具列表 HTML
            var toolsHtml = "";
            for (var j = 0; j < categoryResources.length; j++) {
                var resource = categoryResources[j];
                toolsHtml = toolsHtml + '<div class="tool-item scroll-animate">';
                toolsHtml = toolsHtml + '<div class="tool-info">';
                toolsHtml = toolsHtml + '<div class="tool-name">' + resource.name + '</div>';
                toolsHtml = toolsHtml + '<div class="tool-desc">' + resource.description + '</div>';
                toolsHtml = toolsHtml + '</div>';
                toolsHtml = toolsHtml + '<a href="' + resource.downloadLink + '" class="download-btn" target="_blank">立即下载</a>';
                toolsHtml = toolsHtml + '</div>';
            }
            
            // 获取分类名称
            var catName = categoryNames[category];
            
            // 生成完整的 HTML
            var html = '<!DOCTYPE html>\n';
            html = html + '<html lang="zh-CN">\n';
            html = html + '<head>\n';
            html = html + '<meta charset="UTF-8">\n';
            html = html + '<title>';
            html = html + catName;
            html = html + ' - 个人工具下载站</title>\n';
            html = html + '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
            html = html + '<meta name="description" content="';
            html = html + catName;
            html = html + '下载，提供各种实用的';
            html = html + catName;
            html = html + '，安全可靠">\n';
            html = html + '<meta name="keywords" content="';
            html = html + catName;
            html = html + ',工具下载,免费软件">\n';
            html = html + '<meta name="author" content="个人工具下载站">\n';
            html = html + '<meta name="robots" content="index, follow">\n';
            html = html + '\n';
            html = html + '<!-- 结构化数据 -->\n';
            html = html + '<script type="application/ld+json">\n';
            html = html + '{\n';
            html = html + '  "@context": "https://schema.org",\n';
            html = html + '  "@type": "CollectionPage",\n';
            html = html + '  "name": "';
            html = html + catName;
            html = html + '",\n';
            html = html + '  "description": "';
            html = html + catName;
            html = html + '的下载集合",\n';
            html = html + '  "url": "https://www.example.com/';
            html = html + category;
            html = html + '.html"\n';
            html = html + '}\n';
            html = html + '</script>\n';
            html = html + '<link rel="stylesheet" href="styles.css">\n';
            html = html + '</head>\n';
            html = html + '<body>\n';
            html = html + '\n';
            html = html + '<header id="mainHeader">\n';
            html = html + '<div class="container">\n';
            html = html + '    <div class="nav-container">\n';
            html = html + '        <div class="logo">📦 个人工具<span>合集</span></div>\n';
            html = html + '        \n';
            html = html + '        <nav class="nav-menu">\n';
            html = html + '            <a href="index.html" class="nav-item">首页</a>\n';
            html = html + '            <a href="system.html" class="nav-item ';
            if (category === 'system') {
                html = html + 'active';
            }
            html = html + '">系统工具</a>\n';
            html = html + '            <a href="office.html" class="nav-item ';
            if (category === 'office') {
                html = html + 'active';
            }
            html = html + '">办公工具</a>\n';
            html = html + '            <a href="dev.html" class="nav-item ';
            if (category === 'dev') {
                html = html + 'active';
            }
            html = html + '">开发工具</a>\n';
            html = html + '            <a href="network.html" class="nav-item ';
            if (category === 'network') {
                html = html + 'active';
            }
            html = html + '">网络工具</a>\n';
            html = html + '            <a href="multimedia.html" class="nav-item ';
            if (category === 'multimedia') {
                html = html + 'active';
            }
            html = html + '">多媒体工具</a>\n';
            html = html + '            <a href="plugin.html" class="nav-item ';
            if (category === 'plugin') {
                html = html + 'active';
            }
            html = html + '">其他工具</a>\n';
            html = html + '            <a href="login.html" class="nav-item">后台管理</a>\n';
            html = html + '        </nav>\n';
            html = html + '        \n';
            html = html + '        <div class="search-container">\n';
            html = html + '            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n';
            html = html + '                <circle cx="11" cy="11" r="8"/>\n';
            html = html + '                <path d="M21 21l-4.35-4.35"/>\n';
            html = html + '            </svg>\n';
            html = html + '            <input type="text" class="search-input" placeholder="搜索工具...">\n';
            html = html + '        </div>\n';
            html = html + '    </div>\n';
            html = html + '</div>\n';
            html = html + '</header>\n';
            html = html + '\n';
            html = html + '<main class="container">\n';
            html = html + '<div class="page-header">\n';
            html = html + '    <a href="index.html" class="back">← 返回首页</a>\n';
            html = html + '    <h1 class="page-title">🖥️ ';
            html = html + catName;
            html = html + '</h1>\n';
            html = html + '    \n';
            html = html + '    <div class="tool-controls">\n';
            html = html + '        <div class="filter-section">\n';
            html = html + '            <label for="filter-input">筛选工具:</label>\n';
            html = html + '            <input type="text" id="filter-input" class="filter-input" placeholder="输入工具名称...">\n';
            html = html + '        </div>\n';
            html = html + '        <div class="sort-section">\n';
            html = html + '            <label for="sort-select">排序方式:</label>\n';
            html = html + '            <select id="sort-select" class="sort-select">\n';
            html = html + '                <option value="name-asc">按名称升序</option>\n';
            html = html + '                <option value="name-desc">按名称降序</option>\n';
            html = html + '            </select>\n';
            html = html + '        </div>\n';
            html = html + '    </div>\n';
            html = html + '</div>\n';
            html = html + '\n';
            html = html + '<div class="tool-list">\n';
            html = html + toolsHtml;
            html = html + '</div>\n';
            html = html + '\n';
            html = html + '</main>\n';
            html = html + '\n';
            html = html + '<footer class="footer">\n';
            html = html + '<div class="container">\n';
            html = html + '    <div class="footer-content">\n';
            html = html + '        <div class="footer-info">\n';
            html = html + '            <h3>个人工具下载站</h3>\n';
            html = html + '            <p>提供各种实用工具，安全可靠，免费下载</p>\n';
            html = html + '        </div>\n';
            html = html + '        <div class="footer-links">\n';
            html = html + '            <h4>快速链接</h4>\n';
            html = html + '            <ul>\n';
            html = html + '                <li><a href="index.html">首页</a></li>\n';
            html = html + '                <li><a href="system.html">系统工具</a></li>\n';
            html = html + '                <li><a href="office.html">办公工具</a></li>\n';
            html = html + '                <li><a href="dev.html">开发工具</a></li>\n';
            html = html + '                <li><a href="network.html">网络工具</a></li>\n';
            html = html + '                <li><a href="multimedia.html">多媒体工具</a></li>\n';
            html = html + '                <li><a href="plugin.html">其他工具</a></li>\n';
            html = html + '            </ul>\n';
            html = html + '        </div>\n';
            html = html + '    </div>\n';
            html = html + '    <div class="footer-bottom">\n';
            html = html + '        <p>&copy; 2026 个人工具下载站 - 提供安全可靠的工具下载</p>\n';
            html = html + '    </div>\n';
            html = html + '</div>\n';
            html = html + '</footer>\n';
            html = html + '\n';
            html = html + '<script src="script.js"></script>\n';
            html = html + '</body>\n';
            html = html + '</html>';
            
            // 下载生成的 HTML 文件
            downloadHtmlFile(category + '.html', html);
        });
        
        showMessage('静态文件生成成功', 'success');
    } catch (error) {
        console.error('生成静态文件时出错:', error);
        showMessage('生成静态文件时出错: ' + error.message, 'error');
    }
}

// 下载文件
function downloadHtmlFile(filename, content) {
    var blob = new Blob([content], { type: 'text/html' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 退出登录
function logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'login.html';
}
