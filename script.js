/* ============================================================
   个人工具下载站 - script.js v2
   完全重构版
   ============================================================ */

// ========== 状态 ==========
const state = { category: 'all', query: '' };

// ========== 工具函数 ==========
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const escapeHtml = (str) => {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
};

const getCat = (id) => CATEGORIES.find(c => c.id === id) || CATEGORIES[0];

// ========== Toast ==========
function showToast(msg, duration = 2500) {
  const box = $('#toast-container') || (
    (el => { el.id = 'toast-container'; el.className = 'toast-container'; document.body.appendChild(el); return el; })(document.createElement('div'))
  );
  const el = document.createElement('div');
  el.className = 'toast-msg';
  el.textContent = msg;
  box.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 300);
  }, duration);
}

// ========== 渲染 ==========
function renderTools(catId, query) {
  const grid = $('#toolsGrid');
  const sectionTitle = $('#sectionTitle');
  const countBadge = $('#toolCount');

  let list = [...TOOLS];
  if (catId && catId !== 'all') list = list.filter(t => t.category === catId);
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(t => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
  }

  const cat = getCat(catId || 'all');
  sectionTitle.textContent = cat.name;
  countBadge.textContent = `${list.length} 个工具`;

  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><p>没有匹配的工具，试试其他关键词</p></div>`;
    return;
  }

  grid.innerHTML = list.map(tool => {
    const info = getCat(tool.category);
    const color = info.color || '#6366f1';
    return `
      <div class="tool-card" style="--card-color: ${color}">
        <div class="tool-card-head">
          <div class="tool-card-icon">${info.icon}</div>
          <div class="tool-card-name">${escapeHtml(tool.name)}</div>
        </div>
        <div class="tool-card-desc">${escapeHtml(tool.desc)}</div>
        <div class="tool-card-foot">
          <span class="tool-card-tag">${info.name}</span>
          <a href="${escapeHtml(tool.download)}" class="tool-card-btn" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            下载
          </a>
        </div>
      </div>`;
  }).join('');
}

// ========== 切换分类 ==========
function switchCategory(catId) {
  state.category = catId;
  $$('.category-tab').forEach(t => t.classList.toggle('active', t.dataset.category === catId));
  renderTools(state.category, state.query);
}

// ========== 搜索 ==========
function handleSearch(val) {
  state.query = val.trim();
  renderTools(state.category, state.query);
}

function updateClear(input) {
  input.closest('.search-box').classList.toggle('has-text', input.value.length > 0);
}

// ========== 初始化 ==========
function init() {
  // 工具总数
  const totalEl = $('#statTotal');
  if (totalEl) totalEl.textContent = TOOLS.length;

  // 动态年份
  const yearEl = $('#statYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // 初始渲染
  renderTools('all', '');

  // 分类切换（事件委托）
  const nav = $('.category-nav');
  if (nav) {
    nav.addEventListener('click', e => {
      const tab = e.target.closest('.category-tab');
      if (tab) switchCategory(tab.dataset.category);
    });
  }

  // 搜索
  const input = $('#searchInput');
  const clearBtn = $('#searchClear');
  if (input) {
    let timer;
    updateClear(input);

    input.addEventListener('input', () => {
      updateClear(input);
      clearTimeout(timer);
      timer = setTimeout(() => handleSearch(input.value), 200);
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        clearTimeout(timer);
        handleSearch(input.value);
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        updateClear(input);
        handleSearch('');
        input.focus();
      });
    }
  }

  // Back-to-top
  const backBtn = $('#backToTop');
  if (backBtn) {
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:300px;left:0;width:1px;height:1px;pointer-events:none;';
    document.body.appendChild(sentinel);

    new IntersectionObserver(
      ([e]) => backBtn.classList.toggle('visible', !e.isIntersecting)
    ).observe(sentinel);

    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
