// 检查登录状态
function checkAuth() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// 退出登录
function logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'login.html';
}

// 资源数据管理
const DEFAULT_RESOURCES = {
    system: [
        { name: '360zip', description: '免费解压缩软件', downloadLink: 'https://www.onlinedown.net/iopdfbhjl/20267030?module=download&t=website&v=20260318183111', version: '4.0.0', size: '3.8MB', platform: 'Windows', screenshots: [] },
        { name: '图吧工具箱', description: '多功能系统工具集', downloadLink: 'https://apac.tualatin.club/%E5%9B%BE%E5%90%A7%E5%B7%A5%E5%85%B7%E7%AE%B1202601.1%E5%AE%89%E8%A3%85%E5%8C%85.exe', version: '2026.01.1', size: '85MB', platform: 'Windows', screenshots: [] },
        { name: 'DiskGenius', description: '硬盘分区与数据恢复工具', downloadLink: 'https://eassos.lanzoue.com/DG64', version: '6.1.0', size: '28MB', platform: 'Windows', screenshots: [] },
        { name: 'KMS激活工具', description: 'Windows和Office一键激活', downloadLink: 'https://github.com/tiamo1990/index/blob/main/kms.rar', version: '2026.03', size: '15MB', platform: 'Windows', screenshots: [] },
        { name: 'MobaXterm', description: '强大的远程SSH终端工具', downloadLink: 'https://download.mobatek.net/2602026012910130/MobaXterm_Installer_v26.0.zip', version: '26.0', size: '35MB', platform: 'Windows', screenshots: [] },
        { name: 'Xshell', description: '专业远程SSH工具', downloadLink: 'https://down.wsyhn.com/23_371911', version: '7.0', size: '45MB', platform: 'Windows', screenshots: [] },
        { name: 'Rufus', description: '轻量级PE盘制作工具', downloadLink: 'https://github.com/pbatard/rufus/releases/download/v4.13/rufus-4.13.exe', version: '4.13', size: '1.5MB', platform: 'Windows', screenshots: [] },
        { name: 'MSDN I tell you', description: 'Windows官方镜像下载站', downloadLink: 'https://msdn.itellyou.cn/2', version: '在线版', size: '网站', platform: 'Web', screenshots: [] },
        { name: 'NDM下载器', description: '多线程下载加速器', downloadLink: 'https://soft.3dmgame.com/down/362347.html', version: '2.5', size: '8MB', platform: 'Windows', screenshots: [] }
    ],
    office: [
        { name: 'office 2021', description: '微软官方办公套件', downloadLink: 'https://pan.xunlei.com/s/VOMNOiB3GqkJZ56yXVoMds8UA1?pwd=vprd', version: '2021', size: '4.5GB', platform: 'Windows', screenshots: [] },
        { name: 'office 2019', description: '经典微软办公套件', downloadLink: 'https://pan.xunlei.com/s/VOMNOlPRlZaV6altaliUQjxfA1?pwd=f8pv', version: '2019', size: '3.8GB', platform: 'Windows', screenshots: [] },
        { name: 'Ps 2023', description: '专业图像处理软件', downloadLink: 'https://pan.xunlei.com/s/VOMDV0t5qDkS1CUvmYIMc2OyA1?pwd=sedf', version: '24.0', size: '3.5GB', platform: 'Windows', screenshots: [] },
        { name: 'Ps 2024', description: '最新版图像处理软件', downloadLink: 'https://pan.xunlei.com/s/VOMFRIFVmmKtiCFXXos5H5qHA1?pwd=m26s', version: '25.0', size: '4GB', platform: 'Windows', screenshots: [] },
        { name: '剪映6.0.1会员永久激活版', description: '专业视频剪辑软件', downloadLink: 'https://pan.xunlei.com/s/VOMQjmqZgEsLegm6oGnU4KgiA1?pwd=x7ka', version: '6.0.1', size: '500MB', platform: 'Windows', screenshots: [] },
        { name: 'PDF转换网站', description: '在线PDF转换工具', downloadLink: 'https://www.ilovepdf.com/', version: '在线版', size: '网站', platform: 'Web', screenshots: [] }
    ],
    dev: [
        { name: 'Ensp', description: '网络设备模拟器', downloadLink: 'https://forspeed.365xiazai.com/down/2022down/3/03/hwmnqensp.rar', version: '1.3', size: '350MB', platform: 'Windows', screenshots: [] },
        { name: 'wireshark', description: '网络协议抓包工具', downloadLink: 'https://1.na.dl.wireshark.org/win64/Wireshark-4.4.3-x64.exe', version: '4.4.3', size: '75MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'VirtualBox', description: '免费虚拟机软件', downloadLink: 'https://download.virtualbox.org/virtualbox/5.2.44/VirtualBox-5.2.44-139111-Win.exe', version: '5.2.44', size: '162MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'WinPcap', description: '网络抓包必要组件', downloadLink: 'https://soft.onlinedown.net/soft/2685.htm', version: '4.1.3', size: '1.5MB', platform: 'Windows', screenshots: [] },
        { name: 'VMware Workstation 17 Pro', description: '专业虚拟机软件', downloadLink: 'https://get.downkuai.com/download/123409/8', version: '17.0', size: '630MB', platform: 'Windows', screenshots: [] },
        { name: 'Pycharm', description: '专业Python代码编辑器', downloadLink: 'https://www.jetbrains.com/pycharm/download/?section=windows', version: '2024.1', size: '450MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'PHP study（小皮面板）', description: 'PHP集成环境', downloadLink: 'https://m.xp.cn/', version: '8.1', size: '45MB', platform: 'Windows', screenshots: [] },
        { name: 'win11关闭vbs脚本', description: '关闭Win11虚拟化安全脚本', downloadLink: 'https://chinakb.lenovo.com.cn/chinakb/prod-api/file/downloadFile?key=uniko/FILE/92e0a9ae331aadcf27abdb22f9974b32-1763517794836.zip&name=%E5%85%B3%E9%97%AD%E8%99%9A%E6%8B%9F%E5%8C%96%E5%AE%89%E5%85%A8.zip', version: '1.0', size: '2MB', platform: 'Windows 11', screenshots: [] },
        { name: '梯子（clash）', description: '网络代理工具', downloadLink: 'https://clashone.com.cn/', version: '2024.02', size: '15MB', platform: 'Windows/macOS/Linux', screenshots: [] }
    ],
    network: [
        { name: 'wireshark', description: '网络协议抓包工具', downloadLink: 'https://1.na.dl.wireshark.org/win64/Wireshark-4.4.3-x64.exe', version: '4.4.3', size: '75MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'Ensp', description: '网络设备模拟器', downloadLink: 'https://forspeed.365xiazai.com/down/2022down/3/03/hwmnqensp.rar', version: '1.3', size: '350MB', platform: 'Windows', screenshots: [] },
        { name: 'MobaXterm', description: '远程SSH终端工具', downloadLink: 'https://download.mobatek.net/2602026012910130/MobaXterm_Installer_v26.0.zip', version: '26.0', size: '35MB', platform: 'Windows', screenshots: [] },
        { name: 'Xshell', description: '专业远程SSH工具', downloadLink: 'https://down.wsyhn.com/23_371911', version: '7.0', size: '45MB', platform: 'Windows', screenshots: [] },
        { name: 'WinPcap', description: '网络抓包必要组件', downloadLink: 'https://soft.onlinedown.net/soft/2685.htm', version: '4.1.3', size: '1.5MB', platform: 'Windows', screenshots: [] },
        { name: 'Clash', description: '网络代理工具', downloadLink: 'https://clashone.com.cn/', version: '2024.02', size: '15MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'curl', description: '强大的命令行网络工具', downloadLink: 'https://curl.se/windows/', version: '8.5.0', size: '10MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'Postman', description: '专业API测试工具', downloadLink: 'https://www.postman.com/downloads/', version: '10.20', size: '120MB', platform: 'Windows/macOS/Linux', screenshots: [] }
    ],
    multimedia: [
        { name: '剪映6.0.1会员永久激活版', description: '专业视频剪辑软件', downloadLink: 'https://pan.xunlei.com/s/VOMQjmqZgEsLegm6oGnU4KgiA1?pwd=x7ka', version: '6.0.1', size: '500MB', platform: 'Windows', screenshots: [] },
        { name: 'Ps 2023', description: 'Adobe Photoshop 2023', downloadLink: 'https://pan.xunlei.com/s/VOMDV0t5qDkS1CUvmYIMc2OyA1?pwd=sedf', version: '24.0', size: '3.5GB', platform: 'Windows', screenshots: [] },
        { name: 'Ps 2024', description: 'Adobe Photoshop 2024', downloadLink: 'https://pan.xunlei.com/s/VOMFRIFVmmKtiCFXXos5H5qHA1?pwd=m26s', version: '25.0', size: '4GB', platform: 'Windows', screenshots: [] },
        { name: 'Audacity', description: '开源音频编辑软件', downloadLink: 'https://www.audacityteam.org/download/', version: '3.4', size: '45MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'HandBrake', description: '开源视频转码工具', downloadLink: 'https://handbrake.fr/downloads.php', version: '1.7.0', size: '12MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'GIMP', description: '开源图像处理软件', downloadLink: 'https://www.gimp.org/downloads/', version: '2.10.34', size: '120MB', platform: 'Windows/macOS/Linux', screenshots: [] }
    ],
    plugin: [
        { name: 'SteamKing', description: 'Steam游戏辅助工具', downloadLink: 'https://gitee.com/wansijun/steam-king/releases/download/v1.3/SteamKing.zip', version: '1.3', size: '25MB', platform: 'Windows', screenshots: [] },
        { name: 'ShiZuKu', description: '无需Root调用系统API工具', downloadLink: 'https://down.medibangpaint.cn/chatapk/channel/sp2901/shizuku.apk', version: '13.4.0', size: '3MB', platform: 'Android', screenshots: [] },
        { name: '迈从驱动', description: '迈从外设驱动程序', downloadLink: 'https://cdn.mchose.com.cn/MCHOSE_HUB_installer.zip', version: '2024.12', size: '50MB', platform: 'Windows', screenshots: [] },
        { name: '狼蛛键盘驱动', description: '狼蛛键盘驱动程序', downloadLink: 'https://www.aulacn.com/index/index/driverdownload.html', version: '2024.10', size: '45MB', platform: 'Windows', screenshots: [] },
        { name: 'HXAudio Pro【1.5】', description: '安卓手机调音优化软件', downloadLink: 'https://github.com/tiamo1990/index/blob/main/HXAudioPro-1.5.APK', version: '1.5', size: '8MB', platform: 'Android', screenshots: [] },
        { name: 'HXAudio Pro【2.1b】', description: '安卓手机调音优化软件', downloadLink: 'https://github.com/tiamo1990/index/blob/main/HX-2.1b.APK', version: '2.1b', size: '10MB', platform: 'Android', screenshots: [] },
        { name: '卡巴斯基杀毒软件', description: '专业安全防护软件', downloadLink: 'https://www.kaspersky.com.cn/downloads', version: '21.3', size: '150MB', platform: 'Windows', screenshots: [] },
        { name: 'Bitdefender', description: '知名杀毒软件', downloadLink: 'https://www.bitdefender.com.cn/solutions/antivirus.html', version: '2024', size: '120MB', platform: 'Windows', screenshots: [] },
        { name: 'Avast', description: '免费杀毒软件', downloadLink: 'https://www.avast.com/zh-cn/index', version: '24.0', size: '100MB', platform: 'Windows', screenshots: [] },
        { name: 'LastPass', description: '专业密码管理工具', downloadLink: 'https://www.lastpass.com/zh', version: '4.12', size: '50MB', platform: 'Windows/macOS/Linux', screenshots: [] },
        { name: 'KeePass', description: '开源密码管理工具', downloadLink: 'https://keepass.info/download.html', version: '2.54', size: '5MB', platform: 'Windows/macOS/Linux', screenshots: [] }
    ]
};

const resources = JSON.parse(JSON.stringify(DEFAULT_RESOURCES));

// 加载资源数据
function loadResources() {
    const savedData = localStorage.getItem('adminResources');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            // 检查数据是否有效（必须有分类且至少有一个工具）
            let hasValidData = false;
            Object.keys(parsedData).forEach(category => {
                if (parsedData[category] && parsedData[category].length > 0) {
                    hasValidData = true;
                }
            });
            
            if (hasValidData) {
                Object.assign(resources, parsedData);
            } else {
                // 数据为空，使用默认数据
                resetToDefaultResources();
            }
        } catch (e) {
            // 解析失败，使用默认数据
            resetToDefaultResources();
        }
    } else {
        // 第一次加载，保存默认数据
        resetToDefaultResources();
    }
}

// 重置为默认资源
function resetToDefaultResources() {
    Object.assign(resources, JSON.parse(JSON.stringify(DEFAULT_RESOURCES)));
    saveResources();
}

// 保存资源数据
function saveResources() {
    localStorage.setItem('adminResources', JSON.stringify(resources));
}

// 渲染资源列表
// 全局变量：控制显示状态
let showAll = false;
const ITEMS_PER_PAGE = 8;

function renderResources(filter = 'all', search = '') {
    const tbody = document.querySelector('#resourcesTable tbody');
    if (!tbody) return;

    let allResources = [];
    Object.keys(resources).forEach(category => {
        resources[category].forEach((resource, index) => {
            allResources.push({ ...resource, category, index });
        });
    });

    if (filter !== 'all') {
        allResources = allResources.filter(r => r.category === filter);
    }

    if (search) {
        allResources = allResources.filter(r =>
            r.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (allResources.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--text-muted);">暂无资源</td></tr>';
        // 隐藏显示更多按钮
        const showMoreBtn = document.getElementById('showMoreBtn');
        if (showMoreBtn) showMoreBtn.style.display = 'none';
        return;
    }

    // 确定显示数量
    const displayCount = showAll ? allResources.length : Math.min(ITEMS_PER_PAGE, allResources.length);
    const displayResources = allResources.slice(0, displayCount);

    tbody.innerHTML = displayResources.map((r, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${escapeHtml(r.name)}</td>
            <td><span class="category-tag">${getCategoryName(r.category)}</span></td>
            <td>${escapeHtml(r.description || '')}</td>
            <td><a href="${escapeHtml(r.downloadLink || '#')}" target="_blank" class="link">查看</a></td>
            <td>
                <button class="action-btn secondary" onclick="editResource('${r.category}', ${r.index})">编辑</button>
                <button class="action-btn danger" onclick="deleteResource('${r.category}', ${r.index})">删除</button>
            </td>
        </tr>
    `).join('');

    // 显示或隐藏"显示更多"按钮
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (showMoreBtn) {
        if (allResources.length > ITEMS_PER_PAGE) {
            showMoreBtn.style.display = 'block';
            showMoreBtn.textContent = showAll ? '收起' : `显示更多 (${allResources.length - ITEMS_PER_PAGE})`;
        } else {
            showMoreBtn.style.display = 'none';
        }
    }
}

// 切换显示全部/收起
function toggleShowAll() {
    showAll = !showAll;
    renderResources(
        document.getElementById('resource-filter')?.value || 'all',
        document.getElementById('resource-search')?.value || ''
    );
}

// HTML转义防止XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 获取分类显示名称
function getCategoryName(category) {
    const names = {
        system: '系统工具',
        office: '办公工具',
        dev: '开发工具',
        network: '网络工具',
        multimedia: '多媒体工具',
        plugin: '其他工具'
    };
    return names[category] || category;
}

// 添加资源
function addResource(name, category, description, downloadLink) {
    resources[category].push({ name, description, downloadLink });
    saveResources();
    showAll = false;
    renderResources();
    showMessage('资源添加成功', 'success');
}

// 编辑资源（从表格点击）
function editResource(category, index) {
    // 跳转到编辑区域
    const editSection = document.getElementById('editSection');
    if (editSection) {
        editSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // 设置分类和资源选择框
    const editCategorySelect = document.getElementById('editCategorySelect');
    const editResourceSelect = document.getElementById('editResourceSelect');
    
    if (editCategorySelect) {
        editCategorySelect.value = category;
    }
    
    // 更新资源下拉框并选中
    updateEditResourceSelect(category);
    
    // 使用 setTimeout 确保 DOM 更新后再设置值
    setTimeout(() => {
        if (editResourceSelect) {
            editResourceSelect.value = index;
        }
        // 填充表单
        fillEditForm(category, index);
    }, 10);
}

// 删除资源
function deleteResource(category, index) {
    if (confirm('确定要删除这个资源吗？')) {
        resources[category].splice(index, 1);
        saveResources();
        showAll = false;
        renderResources();
        showMessage('资源删除成功', 'success');
    }
}

// 显示消息
function showMessage(message, type = 'success') {
    const msgEl = document.getElementById('adminMessage');
    if (msgEl) {
        msgEl.textContent = message;
        msgEl.className = `admin-message ${type}`;
        msgEl.style.display = 'block';
        setTimeout(() => {
            msgEl.style.display = 'none';
        }, 3000);
    }
}

// ==================== 图片处理功能 ====================

// 转换为 Base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// 压缩图片
async function compressImage(file, maxWidth = 1920, quality = 0.8) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let { width, height } = img;

            if (width > maxWidth) {
                height = (height * maxWidth) / width;
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            }, 'image/jpeg', quality);
        };
        img.src = URL.createObjectURL(file);
    });
}

// ==================== Base64 本地上传 ====================

const MAX_BASE64_SIZE = 2 * 1024 * 1024; // 2MB

async function uploadAsBase64(file) {
    try {
        let base64 = await fileToBase64(file);

        if (base64.length > MAX_BASE64_SIZE) {
            base64 = await compressImage(file);
        }

        if (base64.length > MAX_BASE64_SIZE) {
            return { success: false, message: '图片太大，请压缩后再试（建议小于2MB）' };
        }

        const result = {
            success: true,
            url: base64,
            filename: file.name,
            size: base64.length,
            type: 'base64'
        };

        saveToLocalHistory(result);
        return result;
    } catch (error) {
        return { success: false, message: '图片处理失败' };
    }
}

// GitHub Issues 图床配置
// 用户 GitHub 信息
const USER_GITHUB = {
    owner: 'tiamo1990',      // 你的 GitHub 用户名
    repo: 'index',           // 仓库名
    token: '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'  // GitHub Personal Access Token
};

function showGitHubConfig() {
    const savedConfig = localStorage.getItem('githubConfig');
    const config = savedConfig ? JSON.parse(savedConfig) : USER_GITHUB;

    const modal = document.createElement('div');
    modal.className = 'config-modal';
    modal.innerHTML = `
        <div class="config-modal-content">
            <h3>🔗 GitHub 图床配置</h3>
            <p class="config-hint">配置后图片会上传到 GitHub Issues，获取永久链接，永久保存</p>

            <div class="form-group">
                <label>GitHub 用户名:</label>
                <input type="text" id="githubOwner" value="${config.owner}" placeholder="如: username">
            </div>

            <div class="form-group">
                <label>仓库名:</label>
                <input type="text" id="githubRepo" value="${config.repo}" placeholder="如: my-images">
            </div>

            <div class="form-group">
                <label>Personal Access Token:</label>
                <input type="password" id="githubToken" value="${config.token || ''}" placeholder="需要 repo 权限">
            </div>

            <div class="config-quick-setup">
                <p class="setup-title">📍 快速配置（已有仓库）:</p>
                <p class="setup-info">用户名: <strong>${USER_GITHUB.owner}</strong></p>
                <p class="setup-info">仓库: <strong>${USER_GITHUB.repo}</strong></p>
                <p class="setup-info">您只需要填写 Token 即可</p>
            </div>

            <p class="config-guide">
                <strong>📖 创建 Token 教程:</strong><br>
                1. 访问 <a href="https://github.com/settings/tokens" target="_blank">GitHub Token 页面</a><br>
                2. Generate new token (classic)<br>
                3. 勾选 <strong>repo</strong> 权限<br>
                4. 生成后复制填入上方
            </p>

            <div class="config-actions">
                <button class="action-btn primary" onclick="saveGitHubSettings()">保存配置</button>
                <button class="action-btn secondary" onclick="this.closest('.config-modal').remove()">取消</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

function saveGitHubConfig(config) {
    localStorage.setItem('githubConfig', JSON.stringify(config));
}

async function uploadToGitHub(file) {
    const savedConfig = localStorage.getItem('githubConfig');
    const config = savedConfig ? JSON.parse(savedConfig) : USER_GITHUB;

    if (!config || !config.token || !config.owner || !config.repo) {
        return { success: false, message: '请先配置 GitHub 信息（Token、仓库）' };
    }

    try {
        // 转换文件为 base64
        const base64 = await fileToBase64(file);
        const content = base64.split(',')[1];
        const encodedName = btoa(encodeURIComponent(file.name.replace(/\.[^/.]+$/, ''))) + '_' + Date.now() + '.' + file.name.split('.').pop();

        // 创建 GitHub Issue
        const response = await fetch(`https://api.github.com/repos/${config.owner}/${config.repo}/issues`, {
            method: 'POST',
            headers: {
                'Authorization': `token ${config.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
                title: `📷 Image: ${file.name}`,
                body: `![${file.name}](data:${file.type};base64,${content})\n\nUploaded: ${new Date().toISOString()}`
            })
        });

        if (response.ok) {
            const data = await response.json();
            const result = {
                success: true,
                url: data.body.match(/!\[[^\]]*\]\(([^)]+)\)/)?.[1] || data.html_url,
                filename: file.name,
                size: content.length,
                type: 'github',
                issueUrl: data.html_url
            };
            saveToLocalHistory(result);
            return result;
        } else {
            const error = await response.json();
            return { success: false, message: error.message || '上传失败' };
        }
    } catch (error) {
        return { success: false, message: '网络错误: ' + error.message };
    }
}

// ==================== 历史记录管理 ====================

function saveToLocalHistory(result) {
    let history = JSON.parse(localStorage.getItem('uploadHistory') || '[]');
    history.unshift(result);
    if (history.length > 50) history = history.slice(0, 50);
    localStorage.setItem('uploadHistory', JSON.stringify(history));
}

// ==================== 初始化上传功能 ====================

function initUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const uploadProgress = document.getElementById('uploadProgress');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const uploadResult = document.getElementById('uploadResult');
    const uploadHistoryList = document.getElementById('uploadHistoryList');
    const modeOptions = document.querySelectorAll('.upload-mode-option');
    const githubConfigBtn = document.getElementById('githubConfigBtn');
    const githubConfigSection = document.getElementById('githubConfigSection');
    const base64ConfigSection = document.getElementById('base64ConfigSection');

    if (!uploadArea || !fileInput) return;

    // 选择上传模式
    let currentMode = localStorage.getItem('uploadMode') || 'base64';

    // 更新模式选择器UI
    const updateModeUI = (mode) => {
        modeOptions.forEach(opt => opt.classList.remove('active'));
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

        if (mode === 'github') {
            githubConfigSection.style.display = 'block';
            base64ConfigSection.style.display = 'none';
        } else {
            githubConfigSection.style.display = 'none';
            base64ConfigSection.style.display = 'block';
        }
    };
    updateModeUI(currentMode);

    // 模式选择器点击事件
    modeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newMode = option.getAttribute('data-mode');
            if (newMode !== currentMode) {
                currentMode = newMode;
                localStorage.setItem('uploadMode', currentMode);
                updateModeUI(currentMode);
            }
        });
    });

    // GitHub 配置按钮
    if (githubConfigBtn) {
        githubConfigBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showGitHubSetupModal();
        });
    }

    // 点击选择文件
    selectFileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
    });
    uploadArea.addEventListener('click', (e) => {
        if (e.target !== selectFileBtn) {
            fileInput.click();
        }
    });

    // 文件选择
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) {
            await handleUpload(file, currentMode);
        }
    });

    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', async (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            await handleUpload(file, currentMode);
        } else {
            showUploadResult('请上传图片文件', true);
        }
    });

    // 处理上传
    async function handleUpload(file, mode) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            showUploadResult('不支持的文件类型，仅支持 JPG、PNG、GIF、WebP', true);
            return;
        }

        if (file.size > 15 * 1024 * 1024) {
            showUploadResult('文件大小超过15MB限制', true);
            return;
        }

        uploadProgress.style.display = 'block';
        uploadResult.style.display = 'none';
        progressFill.style.width = '0%';
        progressText.textContent = '上传中...';

        let result;
        if (mode === 'github') {
            progressText.textContent = '正在上传到 GitHub...';
            result = await uploadToGitHub(file);
        } else {
            progressText.textContent = '正在处理图片...';
            result = await uploadAsBase64(file);
        }

        uploadProgress.style.display = 'none';

        if (result.success) {
            showUploadResult(result);
        } else {
            showUploadResult(result.message, true);
        }
    }

    // 显示上传结果
    function showUploadResult(result, isError = false) {
        uploadResult.style.display = 'block';
        uploadResult.className = `upload-result ${isError ? 'error' : ''}`;

        if (isError) {
            uploadResult.innerHTML = `<pre>❌ ${result}</pre>`;
        } else {
            const typeLabel = result.type === 'github' ? 'GitHub 永久链接' : 'Base64 本地存储';
            uploadResult.innerHTML = `
                <pre>✅ 上传成功！（${typeLabel}）

📎 图片地址:
${result.url.substring(0, 100)}${result.url.length > 100 ? '...' : ''}

📝 文件名: ${result.filename}
📊 大小: ${formatFileSize(result.size)}</pre>
                <div class="upload-result-actions">
                    <button class="action-btn primary" onclick="copyToClipboard('${result.url.replace(/'/g, "\\'")}')">复制链接</button>
                    ${result.issueUrl ? `<button class="action-btn secondary" onclick="copyToClipboard('${result.issueUrl}')">查看 Issue</button>` : ''}
                </div>
            `;
        }
    }

    // 格式化文件大小
    function formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    // 渲染历史记录
    function renderHistory() {
        const history = JSON.parse(localStorage.getItem('uploadHistory') || '[]');
        if (history.length === 0) {
            uploadHistoryList.innerHTML = '<p class="no-data">暂无上传记录</p>';
            return;
        }

        uploadHistoryList.innerHTML = history.map((item) => `
            <div class="history-item">
                <img src="${item.url}" alt="${item.filename}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2212%22>图片</text></svg>'">
                <div class="history-info">${item.filename}</div>
                <button class="copy-btn" onclick="copyToClipboard('${item.url.replace(/'/g, "\\'")}')">复制</button>
            </div>
        `).join('');
    }

    renderHistory();
}

function showGitHubSetupModal() {
    const existingModal = document.getElementById('github-modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }

    // 默认配置
    const defaultConfig = { 
        owner: 'tiamo1990', 
        repo: 'index', 
        token: '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' 
    };
    
    // 如果没有配置，使用默认配置
    let config = showGitHubConfig() || defaultConfig;
    // 确保默认值被填充
    config.owner = config.owner || defaultConfig.owner;
    config.repo = config.repo || defaultConfig.repo;
    config.token = config.token || defaultConfig.token;

    const overlay = document.createElement('div');
    overlay.id = 'github-modal-overlay';
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    
    overlay.style.cssText = `
        position: absolute;
        top: ${scrollY}px;
        left: ${scrollX}px;
        width: ${window.innerWidth}px;
        height: ${window.innerHeight}px;
        background: rgba(0, 0, 0, 0.75);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
    `;

    const content = document.createElement('div');
    content.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #6366f1, #8b5cf6); display: flex; align-items: center; justify-content: center;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
            </div>
            <h3 style="color: #fff; margin: 0; font-size: 1.25rem; font-weight: 600;">GitHub 图床配置</h3>
        </div>

        <p style="color: #9ca3af; font-size: 0.875rem; margin-bottom: 20px;">配置后图片会自动上传到 GitHub Issues</p>

        <div style="margin-bottom: 16px;">
            <label style="display: block; color: #d1d5db; font-size: 0.875rem; margin-bottom: 6px;">用户名</label>
            <input type="text" id="gh-owner" value="${config.owner}" placeholder="GitHub 用户名" style="
                width: 100%;
                padding: 10px 14px;
                border: 1px solid rgba(255,255,255,0.15);
                border-radius: 8px;
                background: rgba(255,255,255,0.05);
                color: #fff;
                font-size: 0.9rem;
                outline: none;
            ">
        </div>

        <div style="margin-bottom: 16px;">
            <label style="display: block; color: #d1d5db; font-size: 0.875rem; margin-bottom: 6px;">仓库名</label>
            <input type="text" id="gh-repo" value="${config.repo}" placeholder="仓库名称" style="
                width: 100%;
                padding: 10px 14px;
                border: 1px solid rgba(255,255,255,0.15);
                border-radius: 8px;
                background: rgba(255,255,255,0.05);
                color: #fff;
                font-size: 0.9rem;
                outline: none;
            ">
        </div>

        <div style="margin-bottom: 20px;">
            <label style="display: block; color: #d1d5db; font-size: 0.875rem; margin-bottom: 6px;">Access Token</label>
            <input type="text" id="gh-token" value="${config.token}" placeholder="Personal Access Token" style="
                width: 100%;
                padding: 10px 14px;
                border: 1px solid rgba(255,255,255,0.15);
                border-radius: 8px;
                background: rgba(255,255,255,0.05);
                color: #fff;
                font-size: 0.9rem;
                outline: none;
            ">
        </div>

        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 10px; padding: 14px; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="color: #10b981;">✓</span>
                <span style="color: #10b981; font-weight: 500;">快速配置</span>
            </div>
            <div style="color: #9ca3af; font-size: 0.8rem;">用户名: <span style="color: #fff;">${config.owner}</span></div>
            <div style="color: #9ca3af; font-size: 0.8rem;">仓库: <span style="color: #fff;">${config.repo}</span></div>
        </div>

        <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 8px; padding: 12px; margin-bottom: 20px;">
            <div style="color: #60a5fa; font-size: 0.8rem; font-weight: 500; margin-bottom: 4px;">📝 使用说明</div>
            <div style="color: #9ca3af; font-size: 0.75rem; line-height: 1.6;">• Token 已预配置，可直接使用</div>
            <div style="color: #9ca3af; font-size: 0.75rem; line-height: 1.6;">• 图片会自动上传到 GitHub Issues</div>
            <div style="color: #9ca3af; font-size: 0.75rem; line-height: 1.6;">• 获取的永久链接可用于任何地方</div>
        </div>

        <div style="display: flex; gap: 12px;">
            <button id="gh-btn-cancel" style="
                flex: 1;
                padding: 10px 16px;
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 8px;
                background: rgba(255,255,255,0.05);
                color: #fff;
                font-size: 0.9rem;
                cursor: pointer;
            ">取消</button>
            <button id="gh-btn-save" style="
                flex: 1;
                padding: 10px 16px;
                border: none;
                border-radius: 8px;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                color: #fff;
                font-size: 0.9rem;
                cursor: pointer;
            ">保存配置</button>
        </div>
    `;

    content.style.cssText = `
        background: linear-gradient(135deg, #2a2a4a 0%, #1a1a3a 100%);
        border-radius: 16px;
        padding: 24px;
        max-width: 480px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(99, 102, 241, 0.3);
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    const handleScroll = () => {
        const newScrollX = window.scrollX || window.pageXOffset;
        const newScrollY = window.scrollY || window.pageYOffset;
        overlay.style.left = newScrollX + 'px';
        overlay.style.top = newScrollY + 'px';
    };
    window.addEventListener('scroll', handleScroll);

    const closeModal = () => {
        overlay.remove();
        window.removeEventListener('scroll', handleScroll);
    };

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    document.getElementById('gh-btn-cancel').addEventListener('click', closeModal);
    document.getElementById('gh-btn-save').addEventListener('click', () => {
        const owner = document.getElementById('gh-owner').value.trim();
        const repo = document.getElementById('gh-repo').value.trim();
        const token = document.getElementById('gh-token').value.trim();

        if (!owner || !repo || !token) {
            alert('请填写完整的配置信息');
            return;
        }

        saveGitHubConfig({ owner, repo, token });
        closeModal();
        showMessage('GitHub 配置已保存', 'success');
    });
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showMessage('链接已复制到剪贴板', 'success');
    }).catch(() => {
        showMessage('复制失败，请手动复制', 'error');
    });
}

// 导航高亮
function highlightNav() {
    const navItems = document.querySelectorAll('.admin-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    if (!checkAuth()) return;

    loadResources();
    renderResources();
    initUpload();
    initScreenshotUpload();
    highlightNav();

    // 筛选和搜索
    const filterSelect = document.getElementById('resource-filter');
    const searchInput = document.getElementById('resource-search');

    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            showAll = false; // 重置为显示部分
            renderResources(e.target.value, searchInput?.value || '');
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            showAll = false; // 重置为显示部分
            renderResources(filterSelect?.value || 'all', e.target.value);
        }, 300));
    }
    
    // 初始化编辑资源下拉框
    initEditResourceSelect();

    // 添加资源表单
    const addForm = document.getElementById('addForm');
    if (addForm) {
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('addToolName').value;
            const category = document.getElementById('addCategory').value;
            const description = document.getElementById('addDescription').value;
            const downloadLink = document.getElementById('addDownloadLink').value;

            addResource(name, category, description, downloadLink);
            addForm.reset();
        });
    }

    // 编辑资源 - 分类选择联动
    const editCategorySelect = document.getElementById('editCategorySelect');
    const editResourceSelect = document.getElementById('editResourceSelect');
    const editForm = document.getElementById('editForm');

    if (editCategorySelect) {
        editCategorySelect.addEventListener('change', (e) => {
            const category = e.target.value;
            updateEditResourceSelect(category);
        });
    }

    if (editResourceSelect) {
        editResourceSelect.addEventListener('change', (e) => {
            const index = e.target.value;
            if (index !== '') {
                fillEditForm(editCategorySelect.value, parseInt(index));
            }
        });
    }

    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitEditForm();
        });
    }
});

// 初始化编辑资源下拉框
function initEditResourceSelect() {
    const editResourceSelect = document.getElementById('editResourceSelect');
    if (editResourceSelect) {
        editResourceSelect.innerHTML = '<option value="">请先选择类别</option>';
    }
}

// 更新编辑资源下拉框
function updateEditResourceSelect(category) {
    const editResourceSelect = document.getElementById('editResourceSelect');
    if (!editResourceSelect) return;

    if (!category) {
        editResourceSelect.innerHTML = '<option value="">请先选择类别</option>';
        return;
    }

    const categoryResources = resources[category] || [];
    editResourceSelect.innerHTML = '<option value="">请选择资源</option>';
    
    categoryResources.forEach((resource, index) => {
        editResourceSelect.innerHTML += `<option value="${index}">${escapeHtml(resource.name)}</option>`;
    });
}

// 填充编辑表单
function fillEditForm(category, index) {
    const resource = resources[category][index];
    if (!resource) return;

    const editToolName = document.getElementById('editToolName');
    const editCategory = document.getElementById('editCategory');
    const editDescription = document.getElementById('editDescription');
    const editDownloadLink = document.getElementById('editDownloadLink');
    const editVersion = document.getElementById('editVersion');
    const editSize = document.getElementById('editSize');
    const editPlatform = document.getElementById('editPlatform');
    const editScreenshots = document.getElementById('editScreenshots');
    const resourceId = document.getElementById('resourceId');

    if (editToolName) editToolName.value = resource.name;
    if (editCategory) editCategory.value = category;
    if (editDescription) editDescription.value = resource.description || '';
    if (editDownloadLink) editDownloadLink.value = resource.downloadLink || '';
    if (editVersion) editVersion.value = resource.version || '';
    if (editSize) editSize.value = resource.size || '';
    if (editPlatform) editPlatform.value = resource.platform || '';
    if (editScreenshots) editScreenshots.value = JSON.stringify(resource.screenshots || []);
    if (resourceId) resourceId.value = `${category}-${index}`;

    // 显示截图预览
    renderScreenshotPreview(resource.screenshots || []);
}

// 提交编辑表单
function submitEditForm() {
    const resourceId = document.getElementById('resourceId').value;
    if (!resourceId) {
        showMessage('请先选择要编辑的资源', 'error');
        return;
    }

    const [category, indexStr] = resourceId.split('-');
    const index = parseInt(indexStr);
    
    const name = document.getElementById('editToolName').value;
    const description = document.getElementById('editDescription').value;
    const downloadLink = document.getElementById('editDownloadLink').value;
    const version = document.getElementById('editVersion').value;
    const size = document.getElementById('editSize').value;
    const platform = document.getElementById('editPlatform').value;
    const screenshotsInput = document.getElementById('editScreenshots');
    const screenshots = screenshotsInput ? JSON.parse(screenshotsInput.value || '[]') : [];

    // 更新资源
    resources[category][index] = { 
        name, 
        description, 
        downloadLink,
        version,
        size,
        platform,
        screenshots
    };
    saveResources();
    showAll = false;
    renderResources();
    
    // 更新下拉框
    updateEditResourceSelect(category);
    document.getElementById('editResourceSelect').value = index;

    showMessage('资源更新成功', 'success');
}

// 截图上传相关函数
let currentScreenshots = [];

// 渲染截图预览
function renderScreenshotPreview(screenshots) {
    const previewDiv = document.getElementById('screenshotPreview');
    const listDiv = document.getElementById('screenshotList');
    
    if (!previewDiv || !listDiv) return;
    
    currentScreenshots = [...screenshots];
    
    if (currentScreenshots.length === 0) {
        previewDiv.style.display = 'none';
        return;
    }
    
    previewDiv.style.display = 'block';
    listDiv.innerHTML = currentScreenshots.map((img, idx) => `
        <div class="screenshot-item" style="position: relative; display: inline-block; margin: 0.5rem; border-radius: 8px; overflow: hidden; width: 150px; height: 100px;">
            <img src="${img}" alt="截图${idx + 1}" style="width: 100%; height: 100%; object-fit: cover;">
            <button onclick="removeScreenshot(${idx})" style="position: absolute; top: 4px; right: 4px; background: rgba(0,0,0,0.7); border: none; color: white; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; font-size: 14px;">×</button>
        </div>
    `).join('');
    
    // 更新隐藏字段
    const screenshotsInput = document.getElementById('editScreenshots');
    if (screenshotsInput) {
        screenshotsInput.value = JSON.stringify(currentScreenshots);
    }
}

// 添加截图
async function addScreenshot(file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
        showMessage('不支持的文件类型，仅支持 JPG、PNG、GIF、WebP', 'error');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        showMessage('文件大小超过5MB限制', 'error');
        return;
    }

    try {
        let base64 = await fileToBase64(file);
        
        if (base64.length > 2 * 1024 * 1024) {
            base64 = await compressImage(file);
        }

        currentScreenshots.push(base64);
        renderScreenshotPreview(currentScreenshots);
        showMessage('截图添加成功', 'success');
    } catch (error) {
        showMessage('图片处理失败', 'error');
    }
}

// 移除截图
function removeScreenshot(index) {
    currentScreenshots.splice(index, 1);
    renderScreenshotPreview(currentScreenshots);
}

// 清空截图
function clearScreenshots() {
    currentScreenshots = [];
    renderScreenshotPreview(currentScreenshots);
}

// 初始化截图上传功能
function initScreenshotUpload() {
    const uploadArea = document.getElementById('screenshotUploadArea');
    const fileInput = document.getElementById('screenshotInput');
    const selectBtn = document.getElementById('selectScreenshotBtn');
    
    if (!uploadArea || !fileInput || !selectBtn) return;

    // 点击按钮选择文件
    selectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
    });
    
    // 点击上传区域选择文件
    uploadArea.addEventListener('click', (e) => {
        if (e.target !== selectBtn) {
            fileInput.click();
        }
    });
    
    // 文件选择
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) {
            await addScreenshot(file);
            fileInput.value = '';
        }
    });

    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', async (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            await addScreenshot(file);
        } else {
            showMessage('请上传图片文件', 'error');
        }
    });
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 重置资源数据
function resetResources() {
    if (confirm('确定要重置资源数据吗？这将清空所有已添加的资源！')) {
        showAll = false;
        resetToDefaultResources();
        renderResources();
        showMessage('资源数据已重置', 'success');
    }
}

// 生成静态文件（导出数据）
function generateStaticFiles() {
    const data = {
        resources: resources,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tools-data-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showMessage('资源数据已导出', 'success');
}

// 导入资源数据
function importResources(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.resources) {
                Object.assign(resources, data.resources);
                saveResources();
                renderResources();
                showMessage('资源数据已导入', 'success');
            }
        } catch (err) {
            showMessage('导入失败：文件格式错误', 'error');
        }
    };
    reader.readAsText(file);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否是第一次加载或者需要更新数据
    const dataVersion = localStorage.getItem('dataVersion');
    const currentVersion = '1.1'; // 更新版本号
    
    if (dataVersion !== currentVersion) {
        // 更新数据并保存版本号
        resetToDefaultResources();
        localStorage.setItem('dataVersion', currentVersion);
        showMessage('资源数据已更新', 'success');
    }
    
    // 初始化功能
    if (checkAuth()) {
        initScreenshotUpload();
        initUpload();
    }
});