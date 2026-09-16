/* ==========================================================================
   vivo 玩机工具 · 资源库页面逻辑
   ========================================================================== */
(function (w, d) {
  'use strict';

  var DATA = w.PTDATA;
  if (!DATA) return;

  var grid = d.getElementById('dlGrid');
  var chips = d.getElementById('catChips');
  var input = d.getElementById('q');
  var clr = d.getElementById('qClear');
  var sortSel = d.getElementById('sort');
  var meta = d.getElementById('resultMeta');
  var emptyEl = d.getElementById('dlEmpty');

  var state = { cat: 'all', q: '', sort: 'rec' };
  var ORDER = DATA.cats.map(function (c) { return c.id; });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  /* ---------- 分类导航 ---------- */
  function renderChips() {
    var total = DATA.count;
    var html = '<button class="chip on" data-cat="all">全部 <span class="cnt">' + total + '</span></button>';
    DATA.cats.forEach(function (c) {
      html += '<button class="chip" data-cat="' + c.id + '">' + esc(c.name) +
        ' <span class="cnt">' + c.items.length + '</span></button>';
    });
    chips.innerHTML = html;
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      state.cat = b.dataset.cat;
      chips.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('on', x === b); });
      render();
    });
  }

  /* ---------- 卡片 ---------- */
  function card(it) {
    var badges = it.tags.map(function (t) {
      return '<span class="badge">' + esc(t) + '</span>';
    }).join('');
    if (it.hot) badges = '<span class="badge brand">热门</span>' + badges;
    if (it.warn) badges += '<span class="badge warn">有风险</span>';
    if (it.large) badges += '<span class="badge danger">超 100MB</span>';

    var acts;
    if (it.large) {
      acts = '<a class="btn btn-primary btn-sm" href="' + DATA.quarkShare +
        '" target="_blank" rel="noopener">' + w.PT.icon('cloud') + '夸克网盘下载</a>';
    } else {
      acts = '<a class="btn btn-primary btn-sm" href="' + it.pageUrl +
        '" download>' + w.PT.icon('download') + '立即下载</a>' +
        '<a class="btn btn-ghost btn-sm" href="' + DATA.quarkShare +
        '" target="_blank" rel="noopener">' + w.PT.icon('cloud') + '夸克网盘</a>';
    }

    return '<article class="dl reveal" style="--acc:' + it.accent + '" data-cat="' + it.cat + '" data-id="' + it.id + '">' +
      '<div class="dl-top">' +
        '<span class="dl-ico">' + w.PT.icon(it.icon) + '</span>' +
        '<div style="min-width:0">' +
          '<h3 class="dl-name">' + esc(it.name) + '</h3>' +
          '<div class="dl-sub">' + esc(it.catName) + ' · ' + it.sizeText + ' · .' + esc(it.ext) + '</div>' +
        '</div>' +
      '</div>' +
      '<p class="dl-desc">' + esc(it.desc) + '</p>' +
      '<div class="dl-tags">' + badges + '</div>' +
      '<div class="dl-file">' + w.PT.icon('file') + '<span title="' + esc(it.fileName) + '">' +
        esc(it.fileName) + '</span>' +
        '<button class="cp" data-copy="' + esc(it.dlUrl) + '" data-copy-msg="下载链接已复制" title="复制下载链接">' +
        w.PT.icon('copy') + '</button></div>' +
      '<div class="dl-acts">' + acts + '</div>' +
    '</article>';
  }

  /* ---------- 过滤 + 排序 ---------- */
  function pick() {
    var q = state.q.trim().toLowerCase();
    var list = DATA.all.filter(function (it) {
      if (state.cat !== 'all' && it.cat !== state.cat) return false;
      if (q && it.search.indexOf(q) === -1) return false;
      return true;
    });
    if (state.sort === 'name') {
      list.sort(function (a, b) { return a.name.localeCompare(b.name, 'zh-Hans-CN'); });
    } else if (state.sort === 'size-asc') {
      list.sort(function (a, b) { return a.size - b.size; });
    } else if (state.sort === 'size-desc') {
      list.sort(function (a, b) { return b.size - a.size; });
    } else {
      list.sort(function (a, b) {
        if (!!b.hot !== !!a.hot) return (b.hot ? 1 : 0) - (a.hot ? 1 : 0);
        var ci = ORDER.indexOf(a.cat) - ORDER.indexOf(b.cat);
        return ci !== 0 ? ci : 0;
      });
    }
    return list;
  }

  function render() {
    var list = pick();
    if (!list.length) {
      grid.innerHTML = '';
      emptyEl.hidden = false;
    } else {
      emptyEl.hidden = true;
      grid.innerHTML = list.map(card).join('');
      w.PT.mountIcons(grid);
      w.PT.observeReveal(grid.querySelectorAll('.reveal'));
    }
    var bytes = list.reduce(function (s, i) { return s + i.size; }, 0);
    meta.innerHTML = '共 <b>' + list.length + '</b> 项资源 · 合计 <b>' + DATA.bytes(bytes) + '</b>' +
      (state.cat === 'all' && !state.q ? ' · 全量资源库' : '');
    if (clr) clr.classList.toggle('show', !!state.q);
  }

  /* ---------- 事件 ---------- */
  var t;
  function onInput() {
    clearTimeout(t);
    t = setTimeout(function () { state.q = input.value; render(); }, 130);
  }

  function init() {
    renderChips();

    if (input) {
      input.addEventListener('input', onInput);
      input.addEventListener('keydown', function (e) { if (e.key === 'Escape') { input.value = ''; state.q = ''; render(); } });
    }
    if (clr) clr.addEventListener('click', function () {
      input.value = ''; state.q = ''; render(); input.focus();
    });
    if (sortSel) sortSel.addEventListener('change', function () { state.sort = sortSel.value; render(); });

    /* 锚点定位到分类 */
    var hash = location.hash.replace('#', '');
    if (hash.indexOf('cat-') === 0) {
      var id = hash.slice(4);
      var b = chips.querySelector('[data-cat="' + id + '"]');
      if (b) { b.click(); }
    }

    /* 从首页 ?c= 参数进入 */
    var m = /[?&]c=([a-z-]+)/.exec(location.search);
    if (m) {
      var b2 = chips.querySelector('[data-cat="' + m[1] + '"]');
      if (b2) b2.click();
    }

    render();
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})(window, document);
