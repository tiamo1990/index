// 从 localStorage 加载资源数据
var resources = [];
var modifiedCategories = [];

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
    
    // 类别选择下拉菜单变化事件
    document.getElementById('editCategorySelect').addEventListener('change', function() {
        var category = this.value;
        var resourceSelect = document.getElementById('editResourceSelect');
        
        // 清空资源选择下拉菜单
        resourceSelect.innerHTML = '';
        
        if (category) {
            // 添加默认选项
            var defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '请选择资源';
            resourceSelect.appendChild(defaultOption);
            
            // 添加该类别的资源
            var categoryResources = resources.filter(function(resource) {
                return resource.category === category;
            });
            
            for (var i = 0; i < categoryResources.length; i++) {
                var resource = categoryResources[i];
                var option = document.createElement('option');
                option.value = resource.id;
                option.textContent = resource.name;
                resourceSelect.appendChild(option);
            }
        } else {
            // 添加默认选项
            var defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '请先选择类别';
            resourceSelect.appendChild(defaultOption);
            
            // 清空表单
            document.getElementById('resourceId').value = '';
            document.getElementById('editToolName').value = '';
            document.getElementById('editCategory').value = 'system';
            document.getElementById('editDescription').value = '';
            document.getElementById('editDownloadLink').value = '';
        }
    });
    
    // 编辑资源下拉菜单变化事件
    document.getElementById('editResourceSelect').addEventListener('change', function() {
        var resourceId = this.value;
        if (resourceId) {
            editResource(parseInt(resourceId));
        } else {
            // 清空表单
            document.getElementById('resourceId').value = '';
            document.getElementById('editToolName').value = '';
            document.getElementById('editCategory').value = document.getElementById('editCategorySelect').value || 'system';
            document.getElementById('editDescription').value = '';
            document.getElementById('editDownloadLink').value = '';
        }
    });
};

// 资源列表显示控制
var resourcesPerPage = 10;
var currentPage = 1;

// 渲染资源列表
function renderResources(resourcesToRender) {
    var tableBody = document.querySelector('#resourcesTable tbody');
    tableBody.innerHTML = '';
    
    // 计算显示的资源数量
    var displayCount = resourcesPerPage * currentPage;
    var displayResources = resourcesToRender.slice(0, displayCount);
    var hasMore = displayCount < resourcesToRender.length;
    
    for (var i = 0; i < displayResources.length; i++) {
        var resource = displayResources[i];
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
        rowHtml = rowHtml + '<button class="action-btn secondary" onclick="optimizeDescription(' + resource.id + ')">优化描述</button>';
        rowHtml = rowHtml + '</div>';
        rowHtml = rowHtml + '</td>';
        row.innerHTML = rowHtml;
        tableBody.appendChild(row);
    }
    
    // 渲染显示更多按钮
    renderShowMoreButton(hasMore);
}

// 渲染显示更多按钮
function renderShowMoreButton(hasMore) {
    var showMoreContainer = document.getElementById('showMoreContainer');
    if (!showMoreContainer) {
        // 创建显示更多容器
        showMoreContainer = document.createElement('div');
        showMoreContainer.id = 'showMoreContainer';
        showMoreContainer.className = 'show-more-container';
        document.querySelector('#resourcesTable').parentElement.appendChild(showMoreContainer);
    }
    
    showMoreContainer.innerHTML = '';
    
    if (hasMore) {
        var showMoreButton = document.createElement('button');
        showMoreButton.className = 'action-btn primary show-more-btn';
        showMoreButton.textContent = '显示更多';
        showMoreButton.onclick = function() {
            currentPage++;
            filterResources();
        };
        showMoreContainer.appendChild(showMoreButton);
    }
}

// 加载资源列表
function loadResources() {
    // 从 localStorage 加载资源数据
    var storedResources = localStorage.getItem('resources');
    if (storedResources) {
        resources = JSON.parse(storedResources);
    } else {
        // 如果没有数据，初始化默认数据
        initDefaultResources();
    }
    
    // 渲染资源列表
    renderResources(resources);
}

// 初始化默认资源数据
function initDefaultResources() {
    resources = [
        // 系统工具
        { id: 1, name: 'WinRar', category: 'system', description: '解压缩软件', downloadLink: 'https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-720sc.exe' },
        { id: 2, name: '360zip', category: 'system', description: '解压缩软件', downloadLink: 'https://www.onlinedown.net/iopdfbhjl/20267030?module=download&t=website&v=20260318183111' },
        { id: 3, name: '图吧工具箱', category: 'system', description: '内含各种系统工具', downloadLink: 'https://apac.tualatin.club/%E5%9B%BE%E5%90%A7%E5%B7%A5%E5%85%B7%E7%AE%B1202601.1%E5%AE%89%E8%A3%85%E5%8C%85.exe' },
        { id: 4, name: 'DiskGenius', category: 'system', description: '硬盘分区、数据恢复、磁盘管理', downloadLink: 'https://eassos.lanzoue.com/DG64' },
        { id: 5, name: 'KMS激活工具', category: 'system', description: 'Windows/Office 激活工具', downloadLink: 'https://github.com/tiamo1990/index/blob/main/kms.rar' },
        { id: 6, name: 'MobaXterm', category: 'system', description: '远程ssh工具', downloadLink: 'https://download.mobatek.net/2602026012910130/MobaXterm_Installer_v26.0.zip' },
        { id: 7, name: 'Xshell', category: 'system', description: '另一款远程ssh工具', downloadLink: 'https://down.wsyhn.com/23_371911' },
        { id: 8, name: 'Rufus', category: 'system', description: '体积小巧的PE盘制作工具', downloadLink: 'https://github.com/pbatard/rufus/releases/download/v4.13/rufus-4.13.exe' },
        { id: 9, name: 'MSDN I tell you', category: 'system', description: 'windows官方系统镜像下载站', downloadLink: 'https://msdn.itellyou.cn/2' },
        { id: 10, name: 'NDM下载器', category: 'system', description: '一款多线程下载加速器', downloadLink: 'https://soft.3dmgame.com/down/362347.html' },
        
        // 办公工具
        { id: 11, name: 'WPS Office 2025专业版', category: 'office', description: '轻量全能办公套件', downloadLink: 'https://pan.xunlei.com/s/VOh7lUE3hS06QVfZhL8tGTyZA1?pwd=td3b' },
        { id: 12, name: 'office 2021', category: 'office', description: '微软官方办公软件', downloadLink: 'https://pan.xunlei.com/s/VOMNOiB3GqkJZ56yXVoMds8UA1?pwd=vprd' },
        { id: 13, name: 'office 2019', category: 'office', description: '微软官方办公软件', downloadLink: 'https://pan.xunlei.com/s/VOMNOlPRlZaV6altaliUQjxfA1?pwd=f8pv' },
        { id: 14, name: 'Ps 2023', category: 'office', description: 'ps修图软件', downloadLink: 'https://pan.xunlei.com/s/VOMDV0t5qDkS1CUvmYIMc2OyA1?pwd=sedf' },
        { id: 15, name: 'Ps 2024', category: 'office', description: 'ps修图软件', downloadLink: 'https://pan.xunlei.com/s/VOMFRIFVmmKtiCFXXos5H5qHA1?pwd=m26s' },
        { id: 16, name: '剪映6.0.1会员永久激活版', category: 'office', description: '视频剪辑', downloadLink: 'https://pan.xunlei.com/s/VOMQjmqZgEsLegm6oGnU4KgiA1?pwd=x7ka' },
        { id: 17, name: 'PDF转换网站', category: 'office', description: 'pdf转换', downloadLink: 'https://www.ilovepdf.com/' },
        
        // 开发工具
        { id: 18, name: 'VS Code', category: 'dev', description: '轻量强大代码编辑器', downloadLink: 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-archive' },
        { id: 19, name: 'Ensp', category: 'dev', description: '网络终端设备模拟器', downloadLink: 'https://forspeed.365xiazai.com/down/2022down/3/03/hwmnqensp.rar' },
        { id: 20, name: 'wireshark', category: 'dev', description: '网络协议抓包工具', downloadLink: 'https://1.na.dl.wireshark.org/win64/Wireshark-4.4.3-x64.exe' },
        { id: 21, name: 'VirtualBox', category: 'dev', description: '虚拟机软件', downloadLink: 'https://download.virtualbox.org/virtualbox/5.2.44/VirtualBox-5.2.44-139111-Win.exe' },
        { id: 22, name: 'WinPcap', category: 'dev', description: 'ensp运行必要组件', downloadLink: 'https://soft.onlinedown.net/soft/2685.htm' },
        { id: 23, name: 'VMware Workstation 17 Pro', category: 'dev', description: '虚拟机软件', downloadLink: 'https://get.downkuai.com/download/123409/8' },
        { id: 24, name: 'Pycharm', category: 'dev', description: 'python代码编辑器', downloadLink: 'https://www.jetbrains.com/pycharm/download/?section=windows' },
        { id: 25, name: 'PHP study（小皮面板）', category: 'dev', description: 'php集成环境', downloadLink: 'https://m.xp.cn/' },
        { id: 26, name: 'win11关闭vbs脚本', category: 'dev', description: '解决ensp中AR路由器在win11系统上不能启动的问题', downloadLink: 'https://chinakb.lenovo.com.cn/chinakb/prod-api/file/downloadFile?key=uniko/FILE/92e0a9ae331aadcf27abdb22f9974b32-1763517794836.zip&name=%E5%85%B3%E9%97%AD%E8%99%9A%E6%8B%9F%E5%8C%96%E5%AE%89%E5%85%A8.zip' },
        { id: 27, name: '梯子（clash）', category: 'dev', description: '网络代理工具', downloadLink: 'https://clashone.com.cn/' },
        
        // 网络工具
        { id: 28, name: 'Wireshark', category: 'network', description: '网络协议抓包分析工具', downloadLink: 'https://1.na.dl.wireshark.org/win64/Wireshark-4.4.3-x64.exe' },
        { id: 29, name: 'Ensp', category: 'network', description: '网络终端设备模拟器', downloadLink: 'https://forspeed.365xiazai.com/down/2022down/3/03/hwmnqensp.rar' },
        { id: 30, name: 'MobaXterm', category: 'network', description: '远程SSH终端工具', downloadLink: 'https://download.mobatek.net/2602026012910130/MobaXterm_Installer_v26.0.zip' },
        { id: 31, name: 'Xshell', category: 'network', description: '专业远程SSH工具', downloadLink: 'https://down.wsyhn.com/23_371911' },
        { id: 32, name: 'WinPcap', category: 'network', description: '网络抓包必要组件', downloadLink: 'https://soft.onlinedown.net/soft/2685.htm' },
        { id: 33, name: 'Clash', category: 'network', description: '网络代理工具', downloadLink: 'https://clashone.com.cn/' },
        { id: 34, name: 'curl', category: 'network', description: '命令行网络工具', downloadLink: 'https://curl.se/windows/' },
        { id: 35, name: 'Postman', category: 'network', description: 'API测试工具', downloadLink: 'https://www.postman.com/downloads/' },
        
        // 多媒体工具
        { id: 36, name: '剪映6.0.1会员永久激活版', category: 'multimedia', description: '视频剪辑软件', downloadLink: 'https://pan.xunlei.com/s/VOMQjmqZgEsLegm6oGnU4KgiA1?pwd=x7ka' },
        { id: 37, name: 'Ps 2023', category: 'multimedia', description: '专业图像处理软件', downloadLink: 'https://pan.xunlei.com/s/VOMDV0t5qDkS1CUvmYIMc2OyA1?pwd=sedf' },
        { id: 38, name: 'Ps 2024', category: 'multimedia', description: '专业图像处理软件', downloadLink: 'https://pan.xunlei.com/s/VOMFRIFVmmKtiCFXXos5H5qHA1?pwd=m26s' },
        { id: 39, name: 'Audacity', category: 'multimedia', description: '音频编辑软件', downloadLink: 'https://www.audacityteam.org/download/' },
        { id: 40, name: 'HandBrake', category: 'multimedia', description: '视频转码工具', downloadLink: 'https://handbrake.fr/downloads.php' },
        { id: 41, name: 'GIMP', category: 'multimedia', description: '开源图像处理软件', downloadLink: 'https://www.gimp.org/downloads/' },
        
        // 其他工具
        { id: 42, name: 'SteamKing', category: 'plugin', description: 'steam假入库程序，仅限本地游玩', downloadLink: 'https://gitee.com/wansijun/steam-king/releases/download/v1.3/SteamKing.zip' },
        { id: 43, name: 'ShiZuKu', category: 'plugin', description: '一款无需 Root 即可通过 ADB 权限让普通应用调用系统 API 的开源工具', downloadLink: 'https://down.medibangpaint.cn/chatapk/channel/sp2901/shizuku.apk' },
        { id: 44, name: '迈从驱动', category: 'plugin', description: '迈从外设驱动程序', downloadLink: 'https://cdn.mchose.com.cn/MCHOSE_HUB_installer.zip' },
        { id: 45, name: '狼蛛键盘驱动', category: 'plugin', description: '狼蛛外设驱动程序', downloadLink: 'https://www.aulacn.com/index/index/driverdownload.html' },
        { id: 46, name: 'HXAudio Pro【1.5】', category: 'plugin', description: '安卓手机调音优化软件', downloadLink: 'https://github.com/tiamo1990/index/blob/main/HXAudioPro-1.5.APK' },
        { id: 47, name: 'HXAudio Pro【2.1b】', category: 'plugin', description: '安卓手机调音优化软件（此版本需搭配ShiZuKu使用）', downloadLink: 'https://github.com/tiamo1990/index/blob/main/HX-2.1b.APK' },
        { id: 48, name: '卡巴斯基杀毒软件', category: 'plugin', description: '专业杀毒软件', downloadLink: 'https://www.kaspersky.com.cn/downloads' },
        { id: 49, name: 'Bitdefender', category: 'plugin', description: '杀毒软件', downloadLink: 'https://www.bitdefender.com.cn/solutions/antivirus.html' },
        { id: 50, name: 'Avast', category: 'plugin', description: '免费杀毒软件', downloadLink: 'https://www.avast.com/zh-cn/index' },
        { id: 51, name: 'LastPass', category: 'plugin', description: '密码管理工具', downloadLink: 'https://www.lastpass.com/zh' },
        { id: 52, name: 'KeePass', category: 'plugin', description: '开源密码管理工具', downloadLink: 'https://keepass.info/download.html' }
    ];
    // 保存到 localStorage
    saveResources();
    showMessage('默认资源数据初始化成功', 'success');
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
        var oldCategory = resources[index].category;
        resources[index] = {
            id: id,
            name: name,
            category: category,
            description: description,
            downloadLink: downloadLink
        };
        
        // 保存到 localStorage
        saveResources();
        
        // 添加到修改过的分类
        if (!modifiedCategories.includes(category)) {
            modifiedCategories.push(category);
        }
        // 如果分类发生变化，也添加旧分类
        if (oldCategory !== category && !modifiedCategories.includes(oldCategory)) {
            modifiedCategories.push(oldCategory);
        }
        
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
        var deletedCategory = null;
        var newResources = [];
        for (var i = 0; i < resources.length; i++) {
            if (resources[i].id !== id) {
                newResources.push(resources[i]);
            } else {
                deletedCategory = resources[i].category;
            }
        }
        resources = newResources;
        
        // 保存到 localStorage
        saveResources();
        
        // 添加到修改过的分类
        if (deletedCategory && !modifiedCategories.includes(deletedCategory)) {
            modifiedCategories.push(deletedCategory);
        }
        
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
    
    // 添加到修改过的分类
    if (!modifiedCategories.includes(category)) {
        modifiedCategories.push(category);
    }
    
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
        var categories = modifiedCategories.length > 0 ? modifiedCategories : ['system', 'office', 'dev', 'network', 'multimedia', 'plugin'];
        var categoryNames = {
            system: '系统工具',
            office: '办公工具',
            dev: '开发工具',
            network: '网络工具',
            multimedia: '多媒体工具',
            plugin: '其他工具'
        };
        
        // 清空修改过的分类列表
        var categoriesToGenerate = categories;
        modifiedCategories = [];
        
        categoriesToGenerate.forEach(function(category) {
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
        
        // 显示成功消息
        if (categoriesToGenerate.length > 0) {
            var categoryNamesList = categoriesToGenerate.map(function(category) {
                return categoryNames[category] || category;
            }).join('、');
            showMessage('静态文件生成成功，生成了以下分类的页面：' + categoryNamesList, 'success');
        } else {
            showMessage('没有需要生成的静态文件', 'success');
        }
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

// 重置资源数据
function resetResources() {
    if (confirm('确定要重置资源数据吗？这将覆盖当前所有资源数据。')) {
        // 清除 localStorage 中的资源数据
        localStorage.removeItem('resources');
        // 重新初始化默认资源数据
        initDefaultResources();
        // 重新加载资源列表
        loadResources();
        showMessage('资源数据重置成功', 'success');
    }
}

// 优化资源描述
function optimizeDescription(id) {
    // 查找资源
    var resource = null;
    for (var i = 0; i < resources.length; i++) {
        if (resources[i].id === id) {
            resource = resources[i];
            break;
        }
    }
    
    if (resource) {
        showMessage('正在优化描述...', 'success');
        
        // 模拟联网查询描述
        setTimeout(function() {
            // 基于工具名称和类别生成更详细的描述
            var detailedDescription = generateDetailedDescription(resource.name, resource.category);
            
            // 更新资源描述
            resource.description = detailedDescription;
            
            // 保存到 localStorage
            saveResources();
            
            // 重新加载资源列表
            loadResources();
            
            showMessage('描述优化成功', 'success');
        }, 1000);
    }
}

// 生成详细描述
function generateDetailedDescription(name, category) {
    // 基于工具名称和类别生成更详细的描述
    var descriptions = {
        system: {
            'WinRar': 'WinRAR 是一款功能强大的压缩文件管理工具，支持多种压缩格式，具有强大的压缩算法和加密功能。',
            '360zip': '360压缩是一款免费的解压缩软件，支持多种压缩格式，界面简洁，操作方便，是日常压缩解压的好帮手。',
            '图吧工具箱': '图吧工具箱是一款集成了各种系统工具的综合工具集，包括硬件检测、系统优化、数据恢复等功能。',
            'DiskGenius': 'DiskGenius 是一款专业的硬盘分区、数据恢复和磁盘管理工具，支持各种磁盘操作和数据恢复功能。',
            'KMS激活工具': 'KMS激活工具是一款用于激活 Windows 和 Office 的工具，支持多种版本的激活，操作简单，激活成功率高。',
            'MobaXterm': 'MobaXterm 是一款功能强大的远程 SSH 终端工具，集成了多种网络工具，支持 SSH、SFTP、RDP 等多种远程连接方式。',
            'Xshell': 'Xshell 是一款专业的远程 SSH 工具，支持多种协议，界面友好，功能强大，是网络管理员和开发人员的必备工具。',
            'Rufus': 'Rufus 是一款体积小巧的 PE 盘制作工具，支持多种启动模式，制作速度快，是制作系统安装盘的理想选择。',
            'MSDN I tell you': 'MSDN I tell you 是一个提供 Windows 官方系统镜像下载的网站，提供各种版本的 Windows 系统镜像，安全可靠。',
            'NDM下载器': 'NDM 下载器是一款多线程下载加速器，支持多种下载协议，下载速度快，是日常下载的好帮手。'
        },
        office: {
            'WPS Office 2025专业版': 'WPS Office 2025专业版是一款轻量全能办公套件，包含文字、表格、演示等多种办公工具，功能强大，界面美观。',
            'office 2021': 'Microsoft Office 2021 是微软官方推出的办公软件套件，包含 Word、Excel、PowerPoint 等多种办公工具，功能全面，兼容性强。',
            'office 2019': 'Microsoft Office 2019 是微软官方推出的办公软件套件，包含 Word、Excel、PowerPoint 等多种办公工具，稳定性好，功能丰富。',
            'Ps 2023': 'Adobe Photoshop 2023 是一款专业的图像处理软件，支持多种图像处理功能，是设计师和摄影师的必备工具。',
            'Ps 2024': 'Adobe Photoshop 2024 是一款专业的图像处理软件，支持多种图像处理功能，界面更新，功能更加强大。',
            '剪映6.0.1会员永久激活版': '剪映 6.0.1 是一款专业的视频剪辑软件，支持多种视频编辑功能，界面友好，操作简单，是视频创作者的好帮手。',
            'PDF转换网站': 'PDF转换网站是一个在线 PDF 转换工具，支持多种格式的转换，操作简单，转换效果好。'
        },
        dev: {
            'VS Code': 'Visual Studio Code 是微软推出的轻量强大代码编辑器，支持多种编程语言，插件丰富，是开发人员的首选工具。',
            'Ensp': 'Ensp 是一款网络终端设备模拟器，支持多种网络设备的模拟，是网络工程师学习和测试网络配置的好工具。',
            'wireshark': 'Wireshark 是一款网络协议抓包工具，支持多种网络协议的分析，是网络故障排查和网络安全分析的必备工具。',
            'VirtualBox': 'VirtualBox 是一款免费的虚拟机软件，支持多种操作系统的虚拟化，是开发和测试的好帮手。',
            'WinPcap': 'WinPcap 是一款网络抓包必要组件，为网络抓包工具提供底层支持，是网络分析工具的基础。',
            'VMware Workstation 17 Pro': 'VMware Workstation 17 Pro 是一款专业的虚拟机软件，支持多种操作系统的虚拟化，功能强大，性能稳定。',
            'Pycharm': 'PyCharm 是一款专业的 Python 代码编辑器，支持代码补全、调试等多种功能，是 Python 开发人员的必备工具。',
            'PHP study（小皮面板）': 'PHP study（小皮面板）是一款 PHP 集成环境，包含 Apache、MySQL、PHP 等多种组件，是 PHP 开发的好帮手。',
            'win11关闭vbs脚本': 'win11关闭vbs脚本是一款用于关闭 Windows 11 虚拟化安全功能的脚本，解决 ensp 中 AR 路由器在 win11 系统上不能启动的问题。',
            '梯子（clash）': 'Clash 是一款网络代理工具，支持多种代理协议，界面友好，功能强大，是科学上网的好工具。'
        },
        network: {
            'Wireshark': 'Wireshark 是一款网络协议抓包分析工具，支持多种网络协议的分析，是网络故障排查和网络安全分析的必备工具。',
            'Ensp': 'Ensp 是一款网络终端设备模拟器，支持多种网络设备的模拟，是网络工程师学习和测试网络配置的好工具。',
            'MobaXterm': 'MobaXterm 是一款远程 SSH 终端工具，集成了多种网络工具，支持 SSH、SFTP、RDP 等多种远程连接方式。',
            'Xshell': 'Xshell 是一款专业的远程 SSH 工具，支持多种协议，界面友好，功能强大，是网络管理员和开发人员的必备工具。',
            'WinPcap': 'WinPcap 是一款网络抓包必要组件，为网络抓包工具提供底层支持，是网络分析工具的基础。',
            'Clash': 'Clash 是一款网络代理工具，支持多种代理协议，界面友好，功能强大，是科学上网的好工具。',
            'curl': 'curl 是一款命令行网络工具，支持多种网络协议，功能强大，是网络测试和数据传输的好帮手。',
            'Postman': 'Postman 是一款 API 测试工具，支持多种 API 测试功能，界面友好，功能强大，是 API 开发和测试的必备工具。'
        },
        multimedia: {
            '剪映6.0.1会员永久激活版': '剪映 6.0.1 是一款专业的视频剪辑软件，支持多种视频编辑功能，界面友好，操作简单，是视频创作者的好帮手。',
            'Ps 2023': 'Adobe Photoshop 2023 是一款专业的图像处理软件，支持多种图像处理功能，是设计师和摄影师的必备工具。',
            'Ps 2024': 'Adobe Photoshop 2024 是一款专业的图像处理软件，支持多种图像处理功能，界面更新，功能更加强大。',
            'Audacity': 'Audacity 是一款免费的音频编辑软件，支持多种音频编辑功能，是音频处理的好帮手。',
            'HandBrake': 'HandBrake 是一款免费的视频转码工具，支持多种视频格式的转换，转换效果好，是视频处理的好帮手。',
            'GIMP': 'GIMP 是一款开源的图像处理软件，支持多种图像处理功能，是 Photoshop 的免费替代品。'
        },
        plugin: {
            'SteamKing': 'SteamKing 是一款 steam 假入库程序，允许用户在本地游玩未购买的游戏，仅限本地游玩。',
            'ShiZuKu': 'ShiZuKu 是一款无需 Root 即可通过 ADB 权限让普通应用调用系统 API 的开源工具，功能强大，使用方便。',
            '迈从驱动': '迈从驱动是迈从外设的官方驱动程序，支持多种迈从外设的配置和管理，是迈从外设用户的必备工具。',
            '狼蛛键盘驱动': '狼蛛键盘驱动是狼蛛外设的官方驱动程序，支持多种狼蛛外设的配置和管理，是狼蛛外设用户的必备工具。',
            'HXAudio Pro【1.5】': 'HXAudio Pro 1.5 是一款安卓手机调音优化软件，支持多种音频参数的调整，提升手机音质。',
            'HXAudio Pro【2.1b】': 'HXAudio Pro 2.1b 是一款安卓手机调音优化软件，支持多种音频参数的调整，提升手机音质，此版本需搭配 ShiZuKu 使用。',
            '卡巴斯基杀毒软件': '卡巴斯基杀毒软件是一款专业的杀毒软件，支持多种安全功能，防护能力强，是电脑安全的好帮手。',
            'Bitdefender': 'Bitdefender 是一款专业的杀毒软件，支持多种安全功能，防护能力强，是电脑安全的好帮手。',
            'Avast': 'Avast 是一款免费的杀毒软件，支持多种安全功能，防护能力强，是电脑安全的好帮手。',
            'LastPass': 'LastPass 是一款密码管理工具，支持多种密码管理功能，安全可靠，是密码管理的好帮手。',
            'KeePass': 'KeePass 是一款开源的密码管理工具，支持多种密码管理功能，安全可靠，是密码管理的好帮手。'
        }
    };
    
    // 尝试从预设描述中获取
    if (descriptions[category] && descriptions[category][name]) {
        return descriptions[category][name];
    }
    
    // 如果没有预设描述，生成默认描述
    var categoryNames = {
        system: '系统工具',
        office: '办公工具',
        dev: '开发工具',
        network: '网络工具',
        multimedia: '多媒体工具',
        plugin: '其他工具'
    };
    
    return name + ' 是一款 ' + (categoryNames[category] || category) + '，功能强大，使用方便。';
}
