/* ==========================================================================
   vivo 玩机工具 · 资源数据层
   所有下载项统一定义在此，页面按分类渲染。
   ========================================================================== */
(function (w) {
  'use strict';

  var REPO = 'https://github.com/tiamo1990/index';
  var BRANCH = 'main';
  var PAGES = 'https://tiamo1990.github.io/index';
  var QUARK_SHARE = 'https://pan.quark.cn/s/956743d482f3';
  var QUARK_LIST = 'https://pan.quark.cn/list#/list/all/8d82567b3a9b406ab78be5e57a8a0a30-vivo%E5%88%B7%E6%9C%BA%E5%B7%A5%E5%85%B7';

  var CATS = [
    {
      id: 'bootloader',
      name: '解锁 Bootloader',
      en: 'Bootloader',
      accent: '#415fff',
      icon: 'unlock',
      desc: '骁龙 9400 平台永久解锁方案，含一键工具、配套 Root 管理器与预置组件。',
      items: [
        {
          name: 'vivo / iQOO 9400 一键解锁工具',
          file: 'bootloader/vivo-iqoo-9400-unlock-tool.zip',
          size: 24082397,
          desc: '面向 vivo / iQOO 骁龙 9400 平台的一键解锁 Bootloader 工具包。内置引导脚本与预置组件，按说明执行即可完成永久解锁流程，不支持平板设备。',
          tags: ['Windows', '一键脚本', '不支持平板'],
          hot: true
        },
        {
          name: 'KernelSU 管理器（解锁配套）',
          file: 'bootloader/vivo-iqoo-9400-unlock-tool/KernelSU.apk',
          size: 9087761,
          desc: '解锁工具包内配套的 KernelSU 管理器安装包，用于解锁完成后接管 Root 权限。',
          tags: ['APK', '管理器']
        },
        {
          name: 'SakiSU v4.3.0（arm64-v8a）',
          file: 'bootloader/vivo-iqoo-9400-unlock-tool/SakiSU_v4.3.0-sakisu.1_35039-arm64-v8a-release.apk',
          size: 8486473,
          desc: 'SakiSU v4.3.0 官方 release 构建，arm64-v8a 架构，作为 KernelSU 的替代 Root 方案使用。',
          tags: ['APK', 'SakiSU', 'arm64-v8a']
        },
        {
          name: '解锁工具辅助程序 test.exe',
          file: 'bootloader/vivo-iqoo-9400-unlock-tool/test.exe',
          size: 8557885,
          desc: '解锁工具内置的检测 / 引导可执行文件，请与主工具保持在同一目录下运行，切勿单独移动或改名。',
          tags: ['Windows', '辅助程序']
        }
      ]
    },
    {
      id: 'temp-root',
      name: '临时 Root',
      en: 'Temp Root',
      accent: '#22d3ee',
      icon: 'flash',
      desc: '不写分区、不破坏保修状态的临时提权方案，重启即失效，适合尝鲜与调试。',
      items: [
        {
          name: 'vivo 一键越狱（minimal 精简版）',
          file: 'temp-root/vivo-oneclick-jailbreak-minimal.zip',
          size: 8445093,
          desc: '无需解锁 Bootloader 的临时 Root 方案精简版。通过漏洞提权获得临时 Root 权限，设备重启后自动失效，风险可控。',
          tags: ['临时提权', '免解锁 BL', '重启失效'],
          hot: true
        },
        {
          name: '临时 Root 无实权修复脚本',
          file: 'temp-root/fix-temp-root-no-real-permission.sh',
          size: 2432,
          desc: '修复临时 Root 获取成功后权限不足、无法实际写入的问题。在 ADB Shell 环境中推入执行即可恢复完整权限。',
          tags: ['Shell', '修复脚本']
        }
      ]
    },
    {
      id: 'root-manager',
      name: 'Root 管理器',
      en: 'Root Manager',
      accent: '#7b5cff',
      icon: 'shield',
      desc: '权限授予、模块管理与系统校验的核心运行环境。',
      items: [
        {
          name: 'KernelSU v3.2.5-44 管理器',
          file: 'root-manager/KernelSU_v3.2.5-44-g0f65ab64.apk',
          size: 9112337,
          desc: 'KernelSU 官方管理器 v3.2.5-44（commit g0f65ab64）。负责 Root 权限授权、模块刷写、内核版本校验与日志查看。',
          tags: ['APK', 'v3.2.5-44', '核心组件'],
          hot: true
        }
      ]
    },
    {
      id: 'ksu',
      name: 'KernelSU 模块',
      en: 'KSU Modules',
      accent: '#34d399',
      icon: 'box',
      desc: '内核级模块合集：字体替换、性能调度、温控移除、OTA 阻断与系统隐藏。',
      items: [
        {
          name: 'MiSans 字体替换 · Regular',
          file: 'ksu-modules/MiSans-Replace-OriginOS6-Regular.zip',
          size: 94270825,
          desc: '将 OriginOS 6 系统默认 vivoSans 字体整体替换为小米 MiSans Regular 字重，覆盖系统 UI 与第三方应用。',
          tags: ['字体', 'MiSans', 'Regular'],
          group: 'MiSans 字体模块'
        },
        {
          name: 'MiSans 字体替换 · Demibold',
          file: 'ksu-modules/MiSans-Replace-OriginOS6-Demibold.zip',
          size: 94487635,
          desc: 'MiSans Demibold 字重替换模块，适合标题与半粗体场景，与 Regular 模块可择一刷入。',
          tags: ['字体', 'MiSans', 'Demibold'],
          group: 'MiSans 字体模块'
        },
        {
          name: 'MiSans 字体替换 · Bold',
          file: 'ksu-modules/MiSans-Replace-OriginOS6-Bold.zip',
          size: 94759731,
          desc: 'MiSans Bold 字重替换模块，字形更厚重，适合作息提示与强调文本较多的界面。',
          tags: ['字体', 'MiSans', 'Bold'],
          group: 'MiSans 字体模块'
        },
        {
          name: 'MiSans 字体替换 · Heavy',
          file: 'ksu-modules/MiSans-Replace-OriginOS6-Heavy.zip',
          size: 123117792,
          large: true,
          desc: 'MiSans Heavy 字重替换模块。单个文件体积 117 MiB，超过 GitHub 单文件 100 MiB 硬性上限，因此本项通过夸克网盘通道分发，不进入仓库主干。',
          tags: ['字体', 'MiSans', 'Heavy', '超大文件'],
          group: 'MiSans 字体模块'
        },
        {
          name: 'Zygisk Next 1.4.5',
          file: 'ksu-modules/Zygisk-Next-1.4.5-836-b13d58a.zip',
          size: 4708334,
          desc: '为 KernelSU / APatch 提供 Zygisk API 兼容层，是运行 LSPosed 等模块的前置依赖。',
          tags: ['Zygisk', '前置依赖', '必装'],
          hot: true
        },
        {
          name: 'magic_mount_rs 2.2.51',
          file: 'ksu-modules/magic_mount_rs-2.2.51-534.zip',
          size: 1432079,
          desc: '基于 Rust 重写的挂载式模块系统，以 OverlayFS 方式注入文件，避免直接改写系统分区，可回滚、更安全。',
          tags: ['挂载', 'OverlayFS', 'Rust']
        },
        {
          name: 'MediaTek Mali GPU Governor v2.12.3',
          file: 'ksu-modules/Mediatek_Mali_GPU_Governor_v2.12.3.zip',
          size: 978022,
          desc: '联发科 Mali GPU 频率调节器，提供多档调度策略，平衡游戏帧率稳定性与整机功耗。',
          tags: ['GPU', '调度', 'MediaTek']
        },
        {
          name: 'Chase Dream 线程 4+3+1 v2.1.3',
          file: 'ksu-modules/Chase-dream-thread-4-3-1-v2.1.3.zip',
          size: 731990,
          desc: '线程绑核调度模块，按 4+3+1 策略将大小核与超线程负载重新分配，降低抖动、提升重载响应。',
          tags: ['调度', '绑核', '性能']
        },
        {
          name: '月虹一键隐藏模块 v5.4.7',
          file: 'ksu-modules/YueHong-Hide-v5.4.7.zip',
          size: 658456,
          desc: '针对 Root 环境的一键隐藏方案，屏蔽 Root 痕迹以通过银行、支付及游戏类应用的环境校验。',
          tags: ['隐藏 Root', '环境校验', '反检测'],
          hot: true
        },
        {
          name: 'RescueX v3.5.11',
          file: 'ksu-modules/RescueX-v3.5.11.zip',
          size: 187679,
          desc: '系统级救援模块，用于在刷坏系统后进入救援模式执行备份、修复与还原操作。',
          tags: ['救援', '备份还原', '兜底']
        },
        {
          name: 'FontLoader 字体加载器',
          file: 'ksu-modules/FontLoader.zip',
          size: 145510,
          desc: '动态字体加载框架，无需替换系统字体文件即可挂载自定义字库，配合字体包使用。',
          tags: ['字体', '加载器']
        },
        {
          name: 'block_vivo_ota v1.2',
          file: 'ksu-modules/block_vivo_ota_v1.2.zip',
          size: 46752,
          desc: '阻断 vivo 系统 OTA 检测与自动下载流程，避免解锁后系统被强制升级覆盖。',
          tags: ['OTA', '阻断升级']
        },
        {
          name: '极致性能 · 最终版 2026022603',
          file: 'ksu-modules/ExtremePerformance-Final-2026022603.zip',
          size: 34544,
          desc: '综合性能释放模块最终版，整合 CPU/GPU 调度、IO 与内存策略，最大化重载场景表现。',
          tags: ['性能', '最终版', '综合'],
          hot: true
        },
        {
          name: 'ExtremeGT（vivo D9400）',
          file: 'ksu-modules/ExtremeGT-vivoD9400.zip',
          size: 8553,
          desc: '为 vivo 天玑 9400 平台定制的性能模式模块，解锁更高频率档位与更激进的调度响应。',
          tags: ['性能', 'D9400', '天玑']
        },
        {
          name: 'AutoADB WiFi',
          file: 'ksu-modules/AutoADBWiFi.zip',
          size: 8406,
          desc: '开机自动开启无线 ADB 调试，免去每次手动进入开发者选项，便于远程调试与批量操作。',
          tags: ['ADB', '无线调试', '自动化']
        },
        {
          name: '移除温控 · iQOO 系列专用版 v1.0.3',
          file: 'ksu-modules/RemoveThermalControl-iQOO-v1.0.3.zip',
          size: 7954,
          desc: '移除 iQOO 系列机型温度墙限制，缓解长时间游戏降频。注意：会显著升高机身温度，请谨慎使用。',
          tags: ['温控', 'iQOO 专用', '高温风险'],
          warn: true
        },
        {
          name: 'vivo 屏蔽系统更新',
          file: 'ksu-modules/VIVO-BlockSystemUpdate.zip',
          size: 6139,
          desc: '从系统更新入口层面屏蔽 vivo 系统升级，无额外性能损耗，与 OTA 阻断模块可叠加使用。',
          tags: ['屏蔽更新', '无性能损耗']
        }
      ]
    },
    {
      id: 'lsp',
      name: 'LSPosed 模块',
      en: 'LSPosed',
      accent: '#fbbf24',
      icon: 'layers',
      desc: 'Xposed 框架模块，主要面向主题破解与证书注入场景，需 Zygisk 环境支持。',
      items: [
        {
          name: 'vivo / iQOO 主题破解 v114514',
          file: 'lsp-modules/vivo-iqoo-theme-crack-v114514.zip',
          size: 398379,
          desc: '解除 vivo / iQOO 主题商店的机型校验与付费限制，可自由应用第三方主题包与图标资源。',
          tags: ['主题破解', 'LSPosed', 'v114514'],
          hot: true
        },
        {
          name: '主题破解（15.5.0.1 以上版本）',
          file: 'lsp-modules/theme-crack-above-15.5.0.1.zip',
          size: 21596,
          desc: '适配系统版本 15.5.0.1 及以上的主题破解模块，针对新版权限校验逻辑更新。',
          tags: ['主题破解', '新版系统']
        },
        {
          name: 'DeepSeek CA Root 证书注入',
          file: 'lsp-modules/DeepSeek-CA-Root.zip',
          size: 1826,
          desc: '将自定义 CA 证书注入系统信任链，用于在 Root 环境下进行网络抓包与 HTTPS 流量分析。',
          tags: ['证书', '抓包', 'CA']
        },
        {
          name: 'magic_mount_rs 2.2.51（LSP 通道）',
          file: 'lsp-modules/magic_mount_rs-2.2.51-534.zip',
          size: 1432079,
          desc: '与 KSU 模块区同版本，供 LSPosed 侧调用。若已在 KernelSU 中安装同一模块，无需重复刷入。',
          tags: ['挂载', 'OverlayFS', '重复项']
        }
      ]
    },
    {
      id: 'theme',
      name: '主题替换资源',
      en: 'Themes',
      accent: '#fb7185',
      icon: 'palette',
      desc: 'OriginOS 6 主题包与系统 UI 资源，配合主题破解模块使用可实现全局外观替换。',
      items: [
        {
          name: 'MT 管理器 2.26.4 等 6 个配套工具',
          file: 'theme/MTManager-2.26.4-and-5-more.rar',
          size: 76596426,
          desc: '主题替换所需的 6 个配套应用打包（含 MT 管理器 2.26.4），用于解包、替换与重新签名系统资源。',
          tags: ['RAR', '配套工具', '资源编辑'],
          hot: true
        },
        {
          name: '仿小米主题包（修改版）',
          file: 'theme/pack/xiaomi-clone-modified.itz',
          size: 8518661,
          desc: '在仿小米原版基础上二次调整的主题包，修正图标间距与配色细节，可直接导入主题商店使用。',
          tags: ['ITZ', '主题包', '修改版']
        },
        {
          name: 'com.android 系统 UI（仿小米原版）',
          file: 'theme/pack/com.android-xiaomi-clone-original.systemui',
          size: 553684,
          desc: '仿小米风格的 SystemUI 资源文件，替换后可改变状态栏、通知栏与快捷开关的整体观感。',
          tags: ['SystemUI', '原版', '需替换']
        }
      ]
    },
    {
      id: 'toolbox',
      name: '玩机工具箱',
      en: 'Toolbox',
      accent: '#a78bfa',
      icon: 'tool',
      desc: '图形化集成工具，把常用刷机、调试、备份操作收敛到统一界面。',
      items: [
        {
          name: '紫罗兰工具箱',
          file: 'toolbox/VioletToolbox.exe',
          size: 34825628,
          desc: '集成刷机、模块管理、备份还原、设备信息读取等常用功能的图形化工具箱，降低命令行操作门槛。',
          tags: ['Windows', '图形界面', '集成工具'],
          hot: true
        }
      ]
    },
    {
      id: 'common',
      name: '通用环境与驱动',
      en: 'Environment',
      accent: '#38bdf8',
      icon: 'plug',
      desc: '刷机前必须就绪的底层环境：USB 驱动、ADB 平台工具与解压缩组件。',
      items: [
        {
          name: 'ADB 环境一键部署便携包',
          file: 'common/ADB-portable-oneclick.zip',
          size: 14143749,
          desc: '免安装的 ADB / Fastboot 平台工具便携包，解压即用，自动配置环境变量，是所有刷机操作的基础。',
          tags: ['ADB', 'Fastboot', '便携免装'],
          hot: true
        },
        {
          name: 'vivo USB 驱动',
          file: 'common/vivo_usb_driver.exe',
          size: 9413176,
          desc: 'vivo 官方 USB 驱动程序，缺少它将导致电脑无法识别设备，请务必在刷机前完成安装。',
          tags: ['驱动', 'Windows', '前置必装'],
          hot: true
        },
        {
          name: '7-Zip 26.03 x64',
          file: 'common/7z2603-x64.exe',
          size: 1661239,
          desc: '7-Zip 26.03 官方 64 位版本，用于解压本页面提供的 zip / rar 压缩包。',
          tags: ['解压缩', 'Windows x64']
        }
      ]
    }
  ];

  /* 扩展名 → 图标键 */
  var EXT_ICON = {
    zip: 'box', rar: 'box', '7z': 'box',
    apk: 'android', exe: 'monitor', sh: 'terminal',
    itz: 'palette', systemui: 'layers'
  };

  var QUARK_NOTE = '夸克网盘 · vivo刷机工具';

  /* ---------- 工具函数 ---------- */
  function bytes(n) {
    if (n < 1024) return n + ' B';
    var u = ['KiB', 'MiB', 'GiB'], i = -1;
    do { n /= 1024; i++; } while (n >= 1024 && i < u.length - 1);
    return (n >= 100 ? n.toFixed(0) : n.toFixed(n >= 10 ? 1 : 2)) + ' ' + u[i];
  }

  function ext(file) {
    var m = /\.([a-z0-9]+)$/i.exec(file);
    return m ? m[1].toLowerCase() : '';
  }

  function baseName(file) {
    var p = file.split('/');
    return p[p.length - 1];
  }

  /* 展开为扁平列表，附加派生字段 */
  var ALL = [];
  CATS.forEach(function (c) {
    c.items.forEach(function (it, i) {
      it.id = c.id + '-' + (i + 1);
      it.cat = c.id;
      it.catName = c.name;
      it.accent = c.accent;
      it.ext = ext(it.file);
      it.icon = EXT_ICON[it.ext] || 'file';
      it.fileName = baseName(it.file);
      it.sizeText = bytes(it.size);
      it.nameText = it.name;
      it.search = (it.name + ' ' + it.fileName + ' ' + it.desc + ' ' +
        it.tags.join(' ') + ' ' + c.name + ' ' + c.en).toLowerCase();
      it.pageUrl = PAGES + '/downloads/' + it.file.split('/').map(encodeURIComponent).join('/');
      it.blobUrl = REPO + '/blob/' + BRANCH + '/downloads/' + it.file.split('/').map(encodeURIComponent).join('/');
      it.rawUrl = 'https://raw.githubusercontent.com/tiamo1990/index/' + BRANCH + '/downloads/' +
        it.file.split('/').map(encodeURIComponent).join('/');
      it.dlUrl = it.large ? QUARK_SHARE : it.pageUrl;
      it.quarkUrl = QUARK_SHARE;
      ALL.push(it);
    });
  });

  var TOTAL = ALL.reduce(function (s, i) { return s + i.size; }, 0);
  var REPO_TOTAL = ALL.reduce(function (s, i) { return s + (i.large ? 0 : i.size); }, 0);

  w.PTDATA = {
    repo: REPO,
    branch: BRANCH,
    pages: PAGES,
    quarkShare: QUARK_SHARE,
    quarkList: QUARK_LIST,
    quarkNote: QUARK_NOTE,
    cats: CATS,
    all: ALL,
    bytes: bytes,
    total: TOTAL,
    totalText: bytes(TOTAL),
    repoTotal: REPO_TOTAL,
    repoTotalText: bytes(REPO_TOTAL),
    count: ALL.length
  };
})(window);
