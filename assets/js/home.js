/* ==========================================================================
   vivo 玩机工具 · 首页动态区块
   ========================================================================== */
(function (w, d) {
  'use strict';

  var DATA = w.PTDATA;
  if (!DATA || !w.PT) return;

  var ic = w.PT.icon;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  function init() {
    /* --- 分享链接注入 --- */
    var qOpen = DATA.quarkEntry || DATA.quarkShare;
    d.querySelectorAll('[data-quark-link]').forEach(function (a) {
      a.href = qOpen;
      if (!a.title) a.title = '在夸克网盘中打开《vivo 玩机工具》主目录';
    });
    d.querySelectorAll('[data-quark-copy]').forEach(function (b) { b.dataset.copy = DATA.quarkShare; });
    var addr = d.getElementById('quarkAddr');
    if (addr) addr.textContent = DATA.quarkShare;

    /* --- 分类总览 --- */
    var catGrid = d.getElementById('catGrid');
    if (catGrid) {
      catGrid.innerHTML = DATA.cats.map(function (c) {
        var size = c.items.reduce(function (s, i) { return s + i.size; }, 0);
        return '<a class="card cat-card reveal" href="tools.html#cat-' + c.id + '">' +
          '<div class="row">' +
            '<span class="icon-tile" style="color:' + c.accent + '">' + ic(c.icon) + '</span>' +
            '<span class="badge">' + c.items.length + ' 项</span>' +
          '</div>' +
          '<h3 class="h3">' + esc(c.name) + '</h3>' +
          '<p>' + esc(c.desc) + '</p>' +
          '<div class="foot"><span>' + esc(c.en) + ' · ' + DATA.bytes(size) + '</span>' +
            '<span class="arrow">查看' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
            '</span></div>' +
        '</a>';
      }).join('');
      w.PT.mountIcons(catGrid);
    }

    /* --- 热门资源 --- */
    var hotGrid = d.getElementById('hotGrid');
    if (hotGrid) {
      var hot = DATA.all.filter(function (i) { return i.hot; }).slice(0, 6);
      hotGrid.innerHTML = hot.map(function (it) {
        var badges = it.tags.slice(0, 2).map(function (t) {
          return '<span class="badge">' + esc(t) + '</span>';
        }).join('');
        var qBtn = '<a class="btn btn-' + (it.large ? 'primary' : 'ghost') + ' btn-sm"' +
          ' href="' + esc(it.quarkUrl) + '" target="_blank" rel="noopener"' +
          ' data-quark-hint="' + esc(it.quarkHint) + '"' +
          ' title="' + esc(it.quarkHint) + '">' + ic('cloud') +
          (it.large ? '夸克网盘下载' : '夸克网盘') + '</a>';
        var acts = it.large
          ? qBtn
          : '<a class="btn btn-primary btn-sm" href="' + it.pageUrl + '" download>' + ic('download') + '立即下载</a>' + qBtn;
        return '<article class="dl reveal" style="--acc:' + it.accent + '">' +
          '<div class="dl-top">' +
            '<span class="dl-ico">' + ic(it.icon) + '</span>' +
            '<div style="min-width:0"><h3 class="dl-name">' + esc(it.name) + '</h3>' +
            '<div class="dl-sub">' + esc(it.catName) + ' · ' + it.sizeText + '</div></div>' +
          '</div>' +
          '<p class="dl-desc">' + esc(it.desc) + '</p>' +
          '<div class="dl-tags">' + badges + '</div>' +
          '<div class="dl-acts">' + acts + '</div>' +
        '</article>';
      }).join('');
      w.PT.mountIcons(hotGrid);
    }

    /* --- 让动态插入的卡片也参与显现动画 --- */
    w.PT.observeReveal(d.querySelectorAll('.reveal:not(.in)'));
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})(window, document);
