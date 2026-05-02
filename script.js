// 工具数据库 - 使用Object.freeze防止意外修改
const tools = Object.freeze([
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
]);

// 使用Map缓存分类名称，提升查询效率
const categoryNames = new Map([
    ['system', '系统工具'],
    ['office', '办公工具'],
    ['dev', '开发工具'],
    ['network', '网络工具'],
    ['multimedia', '多媒体工具'],
    ['plugin', '其他工具']
]);

// 防抖函数 - 优化性能
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

// 节流函数 - 优化性能
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 动态粒子效果 - 优化粒子数量，减少性能消耗
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    const particleCount = window.innerWidth > 768 ? 20 : 12; // 根据屏幕尺寸调整粒子数量
    const fragment = document.createDocumentFragment(); // 使用文档片段优化DOM操作
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 8 + 12) + 's';
        particle.style.opacity = Math.random() * 0.4 + 0.1;
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        fragment.appendChild(particle);
    }
    
    particlesContainer.appendChild(fragment);
}

// 搜索功能 - 使用防抖优化性能
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchSuggestions = document.getElementById('searchSuggestions');
    let selectedIndex = -1;
    
    if (!searchInput || !searchSuggestions) return;
    
    // 缓存DOM查询结果
    let suggestionsCache = null;
    
    // 使用防抖优化输入事件
    const debouncedShowSuggestions = debounce((query) => {
        if (query) {
            showSuggestions(query);
        } else {
            hideSuggestions();
        }
    }, 150);
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        debouncedShowSuggestions(query);
    });
    
    searchInput.addEventListener('keydown', function(e) {
        if (!suggestionsCache) {
            suggestionsCache = document.querySelectorAll('.search-suggestion-item');
        }
        const suggestions = suggestionsCache;
        
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
        const lowerQuery = query.toLowerCase();
        const results = tools.filter(tool => 
            tool.name.toLowerCase().includes(lowerQuery)
        );
        
        if (results.length > 0) {
            const fragment = document.createDocumentFragment();
            results.forEach((tool) => {
                const item = document.createElement('div');
                item.className = 'search-suggestion-item';
                item.innerHTML = `
                    <span class="suggestion-name">${tool.name}</span>
                    <span class="suggestion-category">${categoryNames.get(tool.category) || tool.category}</span>
                `;
                item.dataset.url = tool.url;
                item.dataset.search = query;
                item.addEventListener('click', function() {
                    window.location.href = `${this.dataset.url}?search=${encodeURIComponent(this.dataset.search)}`;
                });
                fragment.appendChild(item);
            });
            
            searchSuggestions.innerHTML = '';
            searchSuggestions.appendChild(fragment);
            searchSuggestions.classList.add('show');
            selectedIndex = -1;
            suggestionsCache = document.querySelectorAll('.search-suggestion-item');
        } else {
            hideSuggestions();
        }
    }
    
    function hideSuggestions() {
        searchSuggestions.classList.remove('show');
        selectedIndex = -1;
        suggestionsCache = null;
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
    
    function searchTools(query) {
        const lowerQuery = query.toLowerCase();
        const results = tools.filter(tool => 
            tool.name.toLowerCase().includes(lowerQuery)
        );
        
        if (results.length > 0) {
            const firstResult = results[0];
            window.location.href = `${firstResult.url}?search=${encodeURIComponent(query)}`;
        } else {
            alert('未找到相关工具');
        }
    }
}

// 导航栏滚动效果 - 使用节流优化性能
function setupNavbarScroll() {
    const header = document.getElementById('mainHeader');
    const backBtn = document.querySelector('.back-to-top');
    
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateScroll = () => {
        const scrollY = window.scrollY;
        
        // 导航栏滚动效果
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // 返回顶部按钮显示/隐藏
        if (backBtn) {
            if (scrollY > 300) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        }
        
        lastScrollY = scrollY;
        ticking = false;
    };
    
    // 使用节流优化滚动事件
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScroll);
            ticking = true;
        }
    });
    
    // 初始化时触发一次
    updateScroll();
}

// 滚动动画观察器 - 优化性能
function observeScrollElements() {
    const elements = document.querySelectorAll('.scroll-animate');
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 观察后立即取消观察，提升性能
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // 提前触发动画
    });
    
    elements.forEach((el, index) => {
        el.style.transitionDelay = `${Math.min(index * 0.08, 0.6)}s`; // 限制最大延迟，避免过长等待
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

// 鼠标跟踪光晕效果 - 增强视觉体验
function setupMouseGlow() {
    if (window.matchMedia('(hover: none)').matches) return; // 移动端不启用
    
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let rafId = null;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // 使用requestAnimationFrame平滑跟踪
    const animateGlow = () => {
        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;
        
        document.body.style.setProperty('--glow-x', glowX + 'px');
        document.body.style.setProperty('--glow-y', glowY + 'px');
        
        if (document.body.style.setProperty) {
            document.body.style.cssText += `;`;
            document.body.style.backgroundPosition = `${glowX}px ${glowY}px`;
        }
        
        // 直接更新伪元素位置（通过body样式间接控制）
        const before = document.body.querySelector('::before');
        document.body.style.setProperty('--glow-position', `${glowX}px ${glowY}px`);
        
        rafId = requestAnimationFrame(animateGlow);
    };
    
    // 使用CSS变量实现，更高效
    const style = document.createElement('style');
    style.textContent = `
        body::before {
            left: var(--glow-x, 50%);
            top: var(--glow-y, 50%);
        }
    `;
    document.head.appendChild(style);
    
    animateGlow();
    
    // 页面卸载时清理
    window.addEventListener('beforeunload', () => {
        if (rafId) cancelAnimationFrame(rafId);
    });
}

// 工具筛选和排序 - 优化性能
function setupToolFiltering() {
    const filterInput = document.getElementById('filter-input');
    const sortSelect = document.getElementById('sort-select');
    const toolList = document.querySelector('.tool-list');
    if (!filterInput || !sortSelect || !toolList) return;
    
    // 缓存工具信息，避免重复DOM查询
    const toolItems = Array.from(toolList.querySelectorAll('.tool-item')).map(item => ({
        element: item,
        name: item.querySelector('.tool-name').textContent.toLowerCase(),
        desc: item.querySelector('.tool-desc').textContent.toLowerCase()
    }));
    
    const debouncedFilter = debounce(() => {
        filterAndSortTools();
    }, 100);
    
    function filterAndSortTools() {
        const filterValue = filterInput.value.toLowerCase();
        const sortValue = sortSelect.value;
        
        const filteredItems = toolItems.filter(item => 
            item.name.includes(filterValue) || item.desc.includes(filterValue)
        );
        
        // 排序
        if (sortValue === 'name-asc') {
            filteredItems.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === 'name-desc') {
            filteredItems.sort((a, b) => b.name.localeCompare(a.name));
        }
        
        // 使用文档片段优化DOM操作
        const fragment = document.createDocumentFragment();
        filteredItems.forEach(item => fragment.appendChild(item.element));
        
        toolList.innerHTML = '';
        toolList.appendChild(fragment);
    }
    
    filterInput.addEventListener('input', debouncedFilter);
    sortSelect.addEventListener('change', filterAndSortTools);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 按优先级初始化，先初始化关键功能
    setupSearch();
    setupNavbarScroll();
    
    // 延迟初始化非关键功能，提升首屏加载速度
    setTimeout(() => {
        createParticles();
        observeScrollElements();
        highlightSearchResults();
        setupToolFiltering();
        setupMouseGlow();
    }, 100);
});
