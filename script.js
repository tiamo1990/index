// 工具数据库
const tools = [
    {name: 'WinRar', category: 'system', url: 'system.html'},
    {name: '360zip', category: 'system', url: 'system.html'},
    {name: '图吧工具箱', category: 'system', url: 'system.html'},
    {name: 'DiskGenius', category: 'system', url: 'system.html'},
    {name: 'KMS激活工具', category: 'system', url: 'system.html'},
    {name: 'MobaXterm', category: 'system', url: 'system.html'},
    {name: 'Xshell', category: 'system', url: 'system.html'},
    {name: 'Rufus', category: 'system', url: 'system.html'},
    {name: 'MSDN I tell you', category: 'system', url: 'system.html'},
    {name: 'NDM下载器', category: 'system', url: 'system.html'},
    
    {name: 'WPS Office 2025专业版', category: 'office', url: 'office.html'},
    {name: 'office 2021', category: 'office', url: 'office.html'},
    {name: 'office 2019', category: 'office', url: 'office.html'},
    {name: 'PDF转换网站', category: 'office', url: 'office.html'},
    
    {name: 'VS Code', category: 'dev', url: 'dev.html'},
    {name: 'VirtualBox', category: 'dev', url: 'dev.html'},
    {name: 'VMware Workstation 17 Pro', category: 'dev', url: 'dev.html'},
    {name: 'Pycharm', category: 'dev', url: 'dev.html'},
    {name: 'PHP study（小皮面板）', category: 'dev', url: 'dev.html'},
    
    {name: 'Wireshark', category: 'network', url: 'network.html'},
    {name: 'Ensp', category: 'network', url: 'network.html'},
    {name: 'MobaXterm', category: 'network', url: 'network.html'},
    {name: 'Xshell', category: 'network', url: 'network.html'},
    {name: 'WinPcap', category: 'network', url: 'network.html'},
    {name: 'Clash', category: 'network', url: 'network.html'},
    {name: 'curl', category: 'network', url: 'network.html'},
    {name: 'Postman', category: 'network', url: 'network.html'},
    
    {name: '剪映6.0.1会员永久激活版', category: 'multimedia', url: 'multimedia.html'},
    {name: 'Ps 2023', category: 'multimedia', url: 'multimedia.html'},
    {name: 'Ps 2024', category: 'multimedia', url: 'multimedia.html'},
    {name: 'Audacity', category: 'multimedia', url: 'multimedia.html'},
    {name: 'HandBrake', category: 'multimedia', url: 'multimedia.html'},
    {name: 'GIMP', category: 'multimedia', url: 'multimedia.html'},
    
    {name: '卡巴斯基杀毒软件', category: 'plugin', url: 'plugin.html'},
    {name: 'Bitdefender', category: 'plugin', url: 'plugin.html'},
    {name: 'Avast', category: 'plugin', url: 'plugin.html'},
    {name: 'LastPass', category: 'plugin', url: 'plugin.html'},
    {name: 'KeePass', category: 'plugin', url: 'plugin.html'},
    
    {name: 'SteamKing', category: 'plugin', url: 'plugin.html'},
    {name: 'ShiZuKu', category: 'plugin', url: 'plugin.html'},
    {name: '迈从驱动', category: 'plugin', url: 'plugin.html'},
    {name: '狼蛛键盘驱动', category: 'plugin', url: 'plugin.html'},
    {name: 'HXAudio Pro', category: 'plugin', url: 'plugin.html'}
];

// 动态粒子效果
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

// 搜索功能
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchSuggestions = document.getElementById('searchSuggestions');
    let selectedIndex = -1;
    
    if (!searchInput || !searchSuggestions) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query) {
            showSuggestions(query);
        } else {
            hideSuggestions();
        }
    });
    
    searchInput.addEventListener('keydown', function(e) {
        const suggestions = document.querySelectorAll('.search-suggestion-item');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % suggestions.length;
                updateSelection(suggestions);
                break;
            case 'ArrowUp':
                e.preventDefault();
                selectedIndex = (selectedIndex - 1 + suggestions.length) % suggestions.length;
                updateSelection(suggestions);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && suggestions[selectedIndex]) {
                    suggestions[selectedIndex].click();
                } else {
                    const query = this.value.trim();
                    if (query) {
                        searchTools(query);
                    }
                }
                break;
            case 'Escape':
                hideSuggestions();
                break;
        }
    });
    
    searchInput.addEventListener('blur', function() {
        setTimeout(hideSuggestions, 200);
    });
    
    searchInput.addEventListener('focus', function() {
        const query = this.value.trim();
        if (query) {
            showSuggestions(query);
        }
    });
    
    function showSuggestions(query) {
        const results = tools.filter(tool => 
            tool.name.toLowerCase().includes(query.toLowerCase())
        );
        
        if (results.length > 0) {
            searchSuggestions.innerHTML = '';
            results.forEach((tool, index) => {
                const item = document.createElement('div');
                item.className = 'search-suggestion-item';
                item.innerHTML = `
                    <span class="suggestion-name">${tool.name}</span>
                    <span class="suggestion-category">${getCategoryName(tool.category)}</span>
                `;
                item.dataset.url = tool.url;
                item.dataset.search = query;
                item.addEventListener('click', function() {
                    window.location.href = `${this.dataset.url}?search=${encodeURIComponent(this.dataset.search)}`;
                });
                searchSuggestions.appendChild(item);
            });
            searchSuggestions.classList.add('show');
            selectedIndex = -1;
        } else {
            hideSuggestions();
        }
    }
    
    function hideSuggestions() {
        searchSuggestions.classList.remove('show');
        selectedIndex = -1;
    }
    
    function updateSelection(suggestions) {
        suggestions.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('active');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    function getCategoryName(category) {
        const categories = {
            'system': '系统工具',
            'office': '办公工具',
            'dev': '开发工具',
            'network': '网络工具',
            'multimedia': '多媒体工具',
            'plugin': '其他工具'
        };
        return categories[category] || category;
    }
    
    function searchTools(query) {
        const results = tools.filter(tool => 
            tool.name.toLowerCase().includes(query.toLowerCase())
        );
        
        if (results.length > 0) {
            const firstResult = results[0];
            window.location.href = `${firstResult.url}?search=${encodeURIComponent(query)}`;
        } else {
            alert('未找到相关工具');
        }
    }
}

// 访问量计数器已移除

// 导航栏滚动效果
function setupNavbarScroll() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        const backBtn = document.querySelector('.back-to-top');
        if (backBtn) {
            backBtn.style.opacity = window.scrollY > 300 ? '1' : '0.7';
        }
    });
}

// 弹窗管理
function setupModal() {
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (!modal || !closeBtn) return;
    
    if(!sessionStorage.getItem('modalShown')) {
        setTimeout(() => {
            modal.classList.add('show');
        }, 600);
    }
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        sessionStorage.setItem('modalShown', 'true');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            sessionStorage.setItem('modalShown', 'true');
        }
    });
}

// 滚动动画观察器
function observeScrollElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });
    
    document.querySelectorAll('.scroll-animate').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// 搜索结果高亮
function highlightSearchResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (!searchQuery) return;
    
    // 查找包含搜索词的工具项并高亮
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach(item => {
        const toolName = item.querySelector('.tool-name');
        if (toolName && toolName.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
            item.style.animation = 'searchHighlight 2s ease-in-out 3';
            // 滚动到找到的第一个结果
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// 工具筛选和排序
function setupToolFiltering() {
    const filterInput = document.getElementById('filter-input');
    const sortSelect = document.getElementById('sort-select');
    const toolList = document.querySelector('.tool-list');
    if (!filterInput || !sortSelect || !toolList) return;
    
    const toolItems = Array.from(toolList.querySelectorAll('.tool-item'));
    
    function filterAndSortTools() {
        const filterValue = filterInput.value.toLowerCase();
        const sortValue = sortSelect.value;
        
        const filteredItems = toolItems.filter(item => {
            const toolName = item.querySelector('.tool-name').textContent.toLowerCase();
            const toolDesc = item.querySelector('.tool-desc').textContent.toLowerCase();
            return toolName.includes(filterValue) || toolDesc.includes(filterValue);
        });
        
        const sortedItems = filteredItems.sort((a, b) => {
            const nameA = a.querySelector('.tool-name').textContent.toLowerCase();
            const nameB = b.querySelector('.tool-name').textContent.toLowerCase();
            
            if (sortValue === 'name-asc') {
                return nameA.localeCompare(nameB);
            } else if (sortValue === 'name-desc') {
                return nameB.localeCompare(nameA);
            }
            return 0;
        });
        
        // 清空列表并重新添加排序后的项目
        toolList.innerHTML = '';
        sortedItems.forEach(item => toolList.appendChild(item));
    }
    
    filterInput.addEventListener('input', filterAndSortTools);
    sortSelect.addEventListener('change', filterAndSortTools);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded',()=>{
    createParticles();
    setupModal();
    setupNavbarScroll();
    setupSearch();
    observeScrollElements();
    highlightSearchResults();
    setupToolFiltering();
});
