/* ==========================================================================
   vivo 玩机工具 · 站点运行时
   ========================================================================== */
(function (w, d) {
  'use strict';

  /* ---------- 1. 图标库 ---------- */
  var P = {
    unlock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    palette: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    chevronRight: '<polyline points="9 18 15 12 9 6"/>',
    chevronDown: '<polyline points="6 9 12 15 18 9"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
    smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    menu: '<line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    hardDrive: '<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
    wand: '<path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h.01"/><path d="M17.8 6.2 19 5"/><path d="M3 21l9-9"/><path d="M12.2 6.2 11 5"/>'
  };

  var GITHUB = '<path fill="currentColor" stroke="none" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>';

  function icon(name, cls) {
    var body = name === 'github' ? GITHUB : (P[name] || P.file);
    var stroke = name === 'github'
      ? ''
      : 'fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"';
    return '<svg viewBox="0 0 24 24" ' + stroke + ' aria-hidden="true"' +
      (cls ? ' class="' + cls + '"' : '') + '>' + body + '</svg>';
  }

  function mountIcons(root) {
    (root || d).querySelectorAll('[data-icon]').forEach(function (el) {
      if (el.dataset.iconDone) return;
      el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon));
      el.dataset.iconDone = '1';
    });
  }

  /* ---------- 2. 主题 ---------- */
  var THEME_KEY = 'pt-theme';
  var DEFAULT_THEME = 'light';   /* 站点默认观感：浅色 */

  function applyTheme(t) {
    d.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    var meta = d.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#05060b' : '#f5f6fb');
  }

  function initTheme() {
    /* 优先级：URL 参数 > 本地存储 > 站点默认（浅色） */
    var forced = /[?&]theme=(dark|light)/.exec(location.search);
    var saved = forced ? forced[1] : null;
    if (!saved) {
      try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    }
    if (!saved) saved = DEFAULT_THEME;
    applyTheme(saved);
    d.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.addEventListener('click', function () {
        var next = d.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        toast(next === 'dark' ? '已切换至深色主题' : '已切换至浅色主题');
      });
    });
  }

  /* ---------- 3. Toast ---------- */
  var toastWrap;
  function toast(msg, ms, ico) {
    if (!toastWrap) {
      toastWrap = d.createElement('div');
      toastWrap.className = 'toast-wrap';
      d.body.appendChild(toastWrap);
    }
    var el = d.createElement('div');
    el.className = 'toast';
    el.innerHTML = icon(ico || 'check') + '<span>' + msg + '</span>';
    toastWrap.appendChild(el);
    setTimeout(function () {
      el.classList.add('out');
      setTimeout(function () { el.remove(); }, 320);
    }, ms || 2200);
  }

  /* ---------- 4. 剪贴板 ---------- */
  function copy(text, okMsg) {
    var done = function () { toast(okMsg || '已复制到剪贴板'); };
    if (navigator.clipboard && w.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { legacy(text, done); });
    } else {
      legacy(text, done);
    }
  }
  function legacy(text, done) {
    var ta = d.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
    d.body.appendChild(ta);
    ta.select();
    try { d.execCommand('copy'); done(); } catch (e) { toast('复制失败，请手动选择'); }
    ta.remove();
  }

  /* ---------- 5. 导航 ---------- */
  function initNav() {
    var nav = d.querySelector('.nav');
    var bar = d.querySelector('.progress-bar');

    function onScroll() {
      var y = w.scrollY || d.documentElement.scrollTop;
      if (nav) nav.classList.toggle('stuck', y > 12);
      if (bar) {
        var h = d.documentElement.scrollHeight - w.innerHeight;
        bar.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + '%';
      }
    }
    w.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var burger = d.querySelector('[data-burger]');
    var drawer = d.querySelector('.drawer');
    if (burger && drawer) {
      burger.addEventListener('click', function () {
        var open = drawer.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.innerHTML = icon(open ? 'x' : 'menu');
        d.body.style.overflow = open ? 'hidden' : '';
      });
      drawer.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          drawer.classList.remove('open');
          d.body.style.overflow = '';
          burger.innerHTML = icon('menu');
        });
      });
    }

    /* 当前页高亮 */
    var path = location.pathname.split('/').pop() || 'index.html';
    d.querySelectorAll('.nav-links a, .drawer a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^https?:/.test(href)) return;
      if (href === path || (path === '' && href === 'index.html')) a.classList.add('on');
    });
  }

  /* ---------- 6. 滚动显现 ---------- */
  function revealOne(el) {
    if (el.classList.contains('in')) return;
    var sibs = el.parentElement
      ? Array.prototype.slice.call(el.parentElement.children)
        .filter(function (c) { return c.classList && c.classList.contains('reveal'); })
      : [];
    var idx = sibs.indexOf(el);
    if (idx > 0) el.style.setProperty('--d', Math.min(idx, 6) * 0.07 + 's');
    el.classList.add('in');
  }

  function initReveal() {
    var els = Array.prototype.slice.call(d.querySelectorAll('.reveal'));
    if (!els.length) return;

    if (!('IntersectionObserver' in w)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        revealOne(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });

    /* 兜底：首屏可见元素在 300ms 内必定显现，避免观察器异常导致内容永久不可见 */
    setTimeout(function () {
      els.forEach(function (e) {
        var r = e.getBoundingClientRect();
        if (r.top < w.innerHeight && r.bottom > 0) revealOne(e);
      });
    }, 300);
  }

  /* 供动态插入的内容复用 */
  function observeReveal(nodes) {
    var arr = Array.prototype.slice.call(nodes || []);
    if (!arr.length) return;
    if (!('IntersectionObserver' in w)) {
      arr.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        if (!en.target.style.getPropertyValue('--d')) {
          en.target.style.setProperty('--d', Math.min(i, 5) * 0.05 + 's');
        }
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    arr.forEach(function (e) { io.observe(e); });
  }

  /* ---------- 7. 指针效果 ---------- */
  function initPointer() {
    if (w.matchMedia('(hover: none)').matches || w.innerWidth < 760) return;
    d.body.classList.add('has-pointer');

    var glow = d.querySelector('.cursor-glow');
    var mx = -999, my = -999, gx = -999, gy = -999, raf = null;
    var activeSpot = null;

    d.addEventListener('pointermove', function (e) {
      mx = e.clientX; my = e.clientY;
      var t = e.target.closest ? e.target.closest('.card, .dl, .chan, .step') : null;
      if (t !== activeSpot) {
        if (activeSpot) activeSpot.style.removeProperty('--mx'), activeSpot.style.removeProperty('--my');
        activeSpot = t;
      }
      if (t) {
        var r = t.getBoundingClientRect();
        t.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        t.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });

    function tick() {
      gx += (mx - gx) * 0.085;
      gy += (my - gy) * 0.085;
      if (glow) glow.style.transform = 'translate3d(' + gx + 'px,' + gy + 'px,0)';
      if (Math.abs(mx - gx) > 0.4 || Math.abs(my - gy) > 0.4) {
        raf = requestAnimationFrame(tick);
      } else { raf = null; }
    }
  }

  /* ---------- 8. 数字滚动 ---------- */
  function initCounters() {
    var els = d.querySelectorAll('[data-count]');
    if (!els.length) return;
    var run = function (el) {
      var target = parseFloat(el.dataset.count);
      var dec = (el.dataset.dec | 0);
      var suf = el.dataset.suffix || '';
      var dur = 1400, t0 = performance.now();
      function step(t) {
        var p = Math.min(1, (t - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);
        var v = target * e;
        el.textContent = (dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-US')) + suf;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in w)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- 9. 跑马灯 ---------- */
  function initMarquee() {
    d.querySelectorAll('[data-marquee]').forEach(function (host) {
      var words = (host.dataset.marquee || '').split('|').filter(Boolean);
      if (!words.length) return;
      var one = words.map(function (t) {
        return '<span class="marquee-item">' + icon('check') + t + '</span>';
      }).join('');
      host.insertAdjacentHTML('beforeend',
        '<div class="marquee"><div class="marquee-track">' + one + one + '</div></div>');
    });
  }

  /* ---------- 10. 手风琴 ---------- */
  function initAccordion() {
    d.querySelectorAll('.acc').forEach(function (acc) {
      acc.querySelectorAll('.acc-q').forEach(function (q) {
        q.addEventListener('click', function () {
          var item = q.parentElement;
          var body = item.querySelector('.acc-a');
          var open = item.classList.contains('open');
          acc.querySelectorAll('.acc-item.open').forEach(function (o) {
            if (o === item) return;
            o.classList.remove('open');
            o.querySelector('.acc-a').style.maxHeight = '0px';
            o.querySelector('.acc-q').setAttribute('aria-expanded', 'false');
          });
          item.classList.toggle('open', !open);
          q.setAttribute('aria-expanded', !open ? 'true' : 'false');
          body.style.maxHeight = !open ? body.scrollHeight + 'px' : '0px';
        });
      });
    });
    w.addEventListener('resize', function () {
      d.querySelectorAll('.acc-item.open .acc-a').forEach(function (a) {
        a.style.maxHeight = a.scrollHeight + 'px';
      });
    });
  }

  /* ---------- 11. 目录高亮 ---------- */
  function initToc() {
    var links = d.querySelectorAll('.toc a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in w)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove('on'); });
        var a = map[e.target.id];
        if (a) a.classList.add('on');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(map).forEach(function (id) {
      var s = d.getElementById(id);
      if (s) io.observe(s);
    });
  }

  /* ---------- 12. 复制按钮 ---------- */
  function initCopiers() {
    d.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-copy]');
      if (!btn) return;
      e.preventDefault();
      copy(btn.dataset.copy, btn.dataset.copyMsg || '已复制到剪贴板');
      var old = btn.innerHTML;
      btn.innerHTML = icon('check');
      setTimeout(function () { btn.innerHTML = old; }, 1400);
    });
  }

  /* ---------- 13. 命令面板 ---------- */
  function initCmdk() {
    var data = w.PTDATA;
    if (!data) return;

    var entries = [];
    data.cats.forEach(function (c) {
      entries.push({ t: c.name, s: '资源分类 · ' + c.items.length + ' 项', ic: c.icon, href: 'tools.html#cat-' + c.id });
    });
    [
      { t: '首页', s: '站点概览', ic: 'home', href: 'index.html' },
      { t: '资源库', s: '全部下载项', ic: 'box', href: 'tools.html' },
      { t: '刷机指南', s: '完整操作流程', ic: 'book', href: 'guide.html' },
      { t: '常见问题', s: '故障排查与免责', ic: 'help', href: 'faq.html' }
    ].forEach(function (e) { entries.push(e); });
    data.all.forEach(function (it) {
      entries.push({
        t: it.name,
        s: it.catName + ' · ' + it.sizeText,
        ic: it.icon,
        href: it.large ? it.quarkUrl : it.blobUrl,
        external: true,
        raw: it.search
      });
    });

    var el = d.createElement('div');
    el.className = 'cmdk';
    el.innerHTML =
      '<div class="cmdk-box" role="dialog" aria-label="快速搜索">' +
        '<div class="cmdk-in">' + icon('search') +
          '<input type="text" placeholder="搜索资源、分类或页面…" aria-label="搜索">' +
          '<kbd style="font-size:10.5px;padding:2px 6px;border-radius:5px;border:1px solid var(--line);color:var(--tx-3)">ESC</kbd>' +
        '</div>' +
        '<div class="cmdk-list"></div>' +
        '<div class="cmdk-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> 选择</span><span><kbd>↵</kbd> 打开</span>' +
        '<span style="margin-left:auto">' + data.count + ' 项资源</span></div>' +
      '</div>';
    d.body.appendChild(el);

    var input = el.querySelector('input');
    var list = el.querySelector('.cmdk-list');
    var cur = 0, shown = [];

    function render(q) {
      q = (q || '').trim().toLowerCase();
      shown = q
        ? entries.filter(function (e) { return (e.raw || (e.t + ' ' + e.s).toLowerCase()).indexOf(q) > -1; }).slice(0, 40)
        : entries.slice(0, 40);
      cur = 0;
      if (!shown.length) {
        list.innerHTML = '<div class="cmdk-empty">未找到匹配项</div>';
        return;
      }
      list.innerHTML = shown.map(function (e, i) {
        return '<div class="cmdk-row' + (i === 0 ? ' on' : '') + '" data-i="' + i + '">' +
          '<span class="ic">' + icon(e.ic) + '</span>' +
          '<span><span class="t">' + e.t + '</span><span class="s" style="display:block">' + e.s + '</span></span>' +
          '<span class="k">' + (e.external ? '↗' : '→') + '</span></div>';
      }).join('');
    }

    function move(delta) {
      if (!shown.length) return;
      cur = (cur + delta + shown.length) % shown.length;
      list.querySelectorAll('.cmdk-row').forEach(function (r, i) { r.classList.toggle('on', i === cur); });
      var node = list.querySelectorAll('.cmdk-row')[cur];
      if (node && node.scrollIntoView) node.scrollIntoView({ block: 'nearest' });
    }

    function go() {
      var e = shown[cur];
      if (!e) return;
      close();
      if (e.external) w.open(e.href, '_blank', 'noopener');
      else location.href = e.href;
    }

    function open() {
      el.classList.add('open');
      input.value = '';
      render('');
      setTimeout(function () { input.focus(); }, 60);
      d.body.style.overflow = 'hidden';
    }
    function close() {
      el.classList.remove('open');
      d.body.style.overflow = '';
    }

    input.addEventListener('input', function () { render(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); go(); }
      else if (e.key === 'Escape') { close(); }
    });
    el.addEventListener('click', function (e) {
      if (e.target === el) close();
      var row = e.target.closest('.cmdk-row');
      if (row) { cur = +row.dataset.i; go(); }
    });
    d.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); }
      else if (e.key === 'Escape' && el.classList.contains('open')) close();
      else if (e.key === '/' && !/input|textarea|select/i.test(d.activeElement.tagName) && !el.classList.contains('open')) {
        e.preventDefault(); open();
      }
    });
    d.querySelectorAll('[data-cmdk]').forEach(function (b) { b.addEventListener('click', open); });
  }

  /* ---------- 14. 年份 ---------- */
  function initYear() {
    d.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
  }

  /* ---------- 15. 分享链接注入 ---------- */
  function initShareLinks() {
    var data = w.PTDATA;
    if (!data) return;
    /* 打开用「主目录深链」（少一次点击），复制用「原始分享短链」（便于转发） */
    var open = data.quarkEntry || data.quarkShare;
    d.querySelectorAll('[data-quark-link]').forEach(function (a) {
      a.href = open;
      if (!a.title) a.title = '在夸克网盘中打开《vivo 玩机工具》主目录';
    });
    d.querySelectorAll('[data-quark-copy]').forEach(function (b) {
      if (!b.dataset.copy) b.dataset.copy = data.quarkShare;
    });
    d.querySelectorAll('[data-github-link]').forEach(function (a) { a.href = data.repo; });
    d.querySelectorAll('[data-pages-link]').forEach(function (a) { a.href = data.pages; });
  }

  /* ---------- 15b. 夸克网盘深链：打开后告知「去哪找文件」 ----------
     夸克分享页只支持目录级深链（文件级会把文件当目录解析成空列表），
     因此文件定位改由 toast 指引：告诉用户目标目录与文件名。 */
  function initQuarkHints() {
    d.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[data-quark-hint]') : null;
      if (!a) return;
      toast(a.dataset.quarkHint, 6500, 'cloud');
    }, true);
  }

  /* ---------- 16. 无障碍：外链 ---------- */
  function initExternal() {
    d.querySelectorAll('a[href^="http"]').forEach(function (a) {
      if (a.hostname && a.hostname !== location.hostname) {
        a.setAttribute('rel', 'noopener');
      }
    });
  }

  /* ---------- 启动 ---------- */
  function boot() {
    mountIcons();
    initTheme();
    initNav();
    initReveal();
    initPointer();
    initCounters();
    initMarquee();
    initAccordion();
    initToc();
    initCopiers();
    initCmdk();
    initYear();
    initShareLinks();
    initQuarkHints();
    initExternal();
    d.documentElement.classList.add('ready');
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* 暴露 */
  w.PT = {
    icon: icon,
    icons: P,
    toast: toast,
    copy: copy,
    mountIcons: mountIcons,
    observeReveal: observeReveal,
    bytes: function (n) { return w.PTDATA ? w.PTDATA.bytes(n) : n; }
  };
})(window, document);
