/* ==========================================================================
   vivo 玩机工具 · 资源数据层
   所有下载项统一定义在此，页面按分类渲染。
   ========================================================================== */
(function (w) {
  'use strict';

  var REPO = 'https://github.com/tiamo1990/index';
  var BRANCH = 'main';

  /* 规范站点域名 = 自定义域名（由仓库根目录的 CNAME 文件绑定）。
     注意：绑定自定义域名后，tiamo1990.github.io/index/* 会被 GitHub 301 到
     http://shancha.dpdns.org/*（GitHub 自签证书未就绪时降级为 http），
     因此站内一律使用自定义域名 —— 既避免多一跳与明文降级，
     也让下载链接与页面同源，`download` 属性才能生效。 */
  var PAGES = 'https://shancha.dpdns.org';
  var PAGES_GH = 'https://tiamo1990.github.io/index';

  /* ---------- GitHub Releases（> 100 MiB 资源通道） ----------
     GitHub 对**仓库内单个文件**硬性限制 100 MiB，超限文件既无法提交也无法由
     Pages 提供。Release 附件不受该限制（单个上限 2 GiB），因此体积超限的资源
     统一走 Release 直链，既保留版本追溯，也不占用 Pages 站点体积配额。
     新增超限资源时：上传附件后在此登记 tag 与文件名即可。 */
  var RELEASE_TAG = 'v2026.09.16';
  var RELEASE_PAGE = REPO + '/releases/tag/' + RELEASE_TAG;
  var RELEASE_LATEST = REPO + '/releases/latest';
  var RELEASE_DL = REPO + '/releases/download/' + RELEASE_TAG + '/';

  /* ---------- 夸克网盘 ---------- */
  var QUARK_SHARE = 'https://pan.quark.cn/s/956743d482f3';
  var QUARK_HASH = QUARK_SHARE + '#/list/share/';
  var QUARK_LIST = 'https://pan.quark.cn/list#/list/all/8d82567b3a9b406ab78be5e57a8a0a30-vivo%E5%88%B7%E6%9C%BA%E5%B7%A5%E5%85%B7';

  /* 网盘目录 → fid（用于把下载项精确定位到所在文件夹） */
  var QDIR = {
    root: { fid: '8d82567b3a9b406ab78be5e57a8a0a30', name: 'vivo刷机工具' },
    base: { fid: '97f5cfcef7274365acec22035df7e0d1', name: 'vivo 玩机工具' },
    ksu: { fid: '40eb02f370f4453cbdd1bc11f916e840', name: 'ksu模块' },
    misans: { fid: '174f8afc554d4107903585f9b4a7df26', name: 'KSU字体模块-MiSans' },
    lsp: { fid: 'ff9880c02171483e81316e777b39ea22', name: 'lsp模块' },
    rootMgr: { fid: '2af27c5693ee4242a2eb8b93bcb62ac2', name: 'root管理器' },
    tempRoot: { fid: '3b8fa20bbc974e16b3edbb93732f6112', name: '临时root' },
    tempRootFix: { fid: 'd95752f4366c4ef1b0728a8a4a8f5d39', name: '临时root权限修复脚本' },
    bootloader: { fid: '170f9a44b2694279bfdd5426608c8109', name: '解锁bootloader（永久）' },
    bootloaderTool: { fid: '902f7b9a2a684d4394bdd6510a7da979', name: 'vivoiqoo9400解锁一键工具（不支持平板）' },
    theme: { fid: 'd32d4c8a56f54b29b1ad5c971617fb29', name: '主题替换资源（origin os6）' },
    themePack: { fid: '8c90caf9dc5b41c0ab61194727501181', name: '主题包' },
    toolbox: { fid: '4be2fe105f8e46a790b3a9f632eae74d', name: '玩机工具箱' }
  };

  /* 下载项 → 网盘所在目录 key + 文件 fid（文件 fid 用于精确高亮该文件） */
  var QMAP = {
    'bootloader/vivo-iqoo-9400-unlock-tool.zip': ['bootloader', 'a5b3365c52dc493e98f9e686856d5dd5'],
    'bootloader/vivo-iqoo-9400-unlock-tool/KernelSU.apk': ['bootloaderTool', '1b0279ae4a1f4f9098b2eb81c964d413'],
    'bootloader/vivo-iqoo-9400-unlock-tool/SakiSU_v4.3.0-sakisu.1_35039-arm64-v8a-release.apk': ['bootloaderTool', 'fb1b21633a5c4c9e82f63f3ff5ab54a2'],
    'bootloader/vivo-iqoo-9400-unlock-tool/test.exe': ['bootloaderTool', '99e84c144bd24250acc7f265558bdabd'],

    'temp-root/vivo-oneclick-jailbreak-minimal.zip': ['tempRoot', '6eb4c7f1607f441aa20eee59278568cc'],
    'temp-root/fix-temp-root-no-real-permission.sh': ['tempRootFix', 'f6ed33a643ce4ff0870a13cd202cd043'],

    'root-manager/KernelSU_v3.2.5-44-g0f65ab64.apk': ['rootMgr', '5a1b5c086bf14f1db651fce9cb020788'],

    'ksu-modules/MiSans-Replace-OriginOS6-Regular.zip': ['misans', '0ae2bd175b024eb3b50d75fbad9ca3a7'],
    'ksu-modules/MiSans-Replace-OriginOS6-Demibold.zip': ['misans', 'fe5e2b4813684207a4ea3da08fe89b97'],
    'ksu-modules/MiSans-Replace-OriginOS6-Bold.zip': ['misans', '47db5bf6b0714de6a91aaccd0bbf63c5'],
    'ksu-modules/MiSans-Replace-OriginOS6-Heavy.zip': ['misans', '5d2d309c84804a7882e7025bacc252d2'],
    'ksu-modules/Zygisk-Next-1.4.5-836-b13d58a.zip': ['ksu', '54e866abb4cf4d4cb30860c3e8b92902'],
    'ksu-modules/magic_mount_rs-2.2.51-534.zip': ['ksu', '5a3c59fe316247c69c98aa81e2197c51'],
    'ksu-modules/Mediatek_Mali_GPU_Governor_v2.12.3.zip': ['ksu', '8c40e23ce80240cdbfe7be2e3c62d021'],
    'ksu-modules/Chase-dream-thread-4-3-1-v2.1.3.zip': ['ksu', '648cd0a3740e413f9b9397996dfa9aed'],
    'ksu-modules/YueHong-Hide-v5.4.7.zip': ['ksu', 'd391796ac2b048fa8bac16496700256e'],
    'ksu-modules/RescueX-v3.5.11.zip': ['ksu', '0201fc2e2b2c4ec885a56619c3749055'],
    'ksu-modules/FontLoader.zip': ['ksu', '71044ebecc924550a6ee17e80a9cef3d'],
    'ksu-modules/block_vivo_ota_v1.2.zip': ['ksu', 'de485b99da874d069c71700f702b6182'],
    'ksu-modules/ExtremePerformance-Final-2026022603.zip': ['ksu', 'ebdaa8d6d80c499997eb987d14081384'],
    'ksu-modules/ExtremeGT-vivoD9400.zip': ['ksu', '75cc83544b0e41bebf259eaea30e08fe'],
    'ksu-modules/AutoADBWiFi.zip': ['ksu', 'ef0d66b209c740ddbcd749d808d513f1'],
    'ksu-modules/RemoveThermalControl-iQOO-v1.0.3.zip': ['ksu', '672a7e9b855248799ba09752fb51ac20'],
    'ksu-modules/VIVO-BlockSystemUpdate.zip': ['ksu', '580ffb14ffde41b080670970a6591150'],

    'lsp-modules/vivo-iqoo-theme-crack-v114514.zip': ['lsp', 'e7635552b9d044c0b9241d5bff7d4311'],
    'lsp-modules/theme-crack-above-15.5.0.1.zip': ['lsp', '973e5c86d2664ffb9b081497385b973a'],
    'lsp-modules/DeepSeek-CA-Root.zip': ['lsp', 'df98e724b2ab48f4966154d14bc9b61f'],
    'lsp-modules/magic_mount_rs-2.2.51-534.zip': ['lsp', '5ab0aef649264cedbeaaa1bb76fb4437'],

    'theme/MTManager-2.26.4-and-5-more.rar': ['theme', '1ceda1d3ea764c56afb75a67adf7ff54'],
    'theme/pack/com.android-xiaomi-clone-original.systemui': ['themePack', 'b8b0a560cb3140b98ce11e35cd1687c8'],
    'theme/pack/xiaomi-clone-modified.itz': ['themePack', 'b7aa21c87d71491f8596f18216aa963e'],

    'toolbox/VioletToolbox.exe': ['toolbox', '470c3bde961143258a02064fce43dcd8'],

    'common/7z2603-x64.exe': ['base', 'f67cdbc9de15436c8443a335fdba7995'],
    'common/ADB-portable-oneclick.zip': ['base', '8a49cf93ebfc428b8312cec6e748d48f'],
    'common/vivo_usb_driver.exe': ['base', 'fb6132fb00b4488095affe2092886762']
  };

  /* --------------------------------------------------------------------------
     夸克深链策略（2026-09-16 实测结论，勿凭直觉改动）

     夸克分享页 hash 路由为 `#/list/share/<fid>`，其中 <fid> 只能是**目录 fid**。
     实测三组对照：
       · #/list/share                              → 落在分享根目录（vivo刷机工具）
       · #/list/share/<目录fid>                    → ✅ 正确定位到该目录，面包屑与
                                                     文件列表均正确
       · #/list/share/<目录fid>/<文件fid>          → ❌ 文件 fid 被当作目录解析，
                                                     页面显示「没有文件」（空目录）
     因此：一律使用**目录级**深链，不做文件级拼接。
     文件级定位改由 UI 提示承担 —— 按钮 title / 点击后的 toast 会告知用户
     「该文件位于哪个目录、文件名是什么」，用户进目录后即可一眼找到。
     -------------------------------------------------------------------------- */
  var QUARK_LINK_MODE = 'dir';

  /* 站点级入口：直接落在「vivo 玩机工具」主目录，省去一次点击 */
  var QUARK_ENTRY = QUARK_HASH + '97f5cfcef7274365acec22035df7e0d1';

  function quarkOf(file) {
    var hit = QMAP[file];
    if (!hit) return null;
    var dir = QDIR[hit[0]];
    var chain = [QDIR.root, QDIR.base];
    if (dir !== QDIR.base) {
      if (hit[0] === 'misans') chain.push(QDIR.ksu);
      if (hit[0] === 'themePack') chain.push(QDIR.theme);
      if (hit[0] === 'bootloaderTool') chain.push(QDIR.bootloader);
      chain.push(dir);
    }

    var dirUrl = QUARK_HASH + dir.fid;
    var fileUrl = QUARK_HASH + dir.fid + '/' + hit[1];

    return {
      dirFid: dir.fid,
      fileFid: hit[1],
      dirName: dir.name,
      path: chain.map(function (d) { return d.name; }).join(' / '),
      dirUrl: dirUrl,
      fileUrl: fileUrl,
      url: QUARK_LINK_MODE === 'dir' ? dirUrl : fileUrl
    };
  }

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
          relAsset: 'MiSans-Replace-OriginOS6-Heavy.zip',
          desc: 'MiSans Heavy 字重替换模块。单文件体积 117 MiB，超过 GitHub 仓库单文件 100 MiB 硬性上限，因此通过 GitHub Releases 通道分发，直链下载不限速，同时保留夸克网盘镜像。',
          tags: ['字体', 'MiSans', 'Heavy', '> 100 MiB'],
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

      /* 未进入仓库主干的资源（> 100 MiB），其 downloads/ 与 blob/ 路径并不存在，
         任何指向它们的链接都会 404。统一改写为 Release 页面，避免出现死链。 */
      if (it.relAsset) {
        it.pageUrl = RELEASE_PAGE;
        it.blobUrl = RELEASE_PAGE;
        it.rawUrl = RELEASE_PAGE;
      }
      var q = quarkOf(it.file);
      it.quark = q;
      it.quarkUrl = q ? q.url : QUARK_SHARE;
      it.quarkPath = q ? q.path : QUARK_NOTE;
      it.quarkHint = q
        ? '将在夸克网盘中打开《' + q.dirName + '》，请下载 ' + it.fileName
        : '将在夸克网盘中打开分享目录';

      /* > 100 MiB 的资源由 Release 附件承载：
         · relUrl   —— Release 直链（主通道）
         · chanText —— 分发通道标签，用于卡片徽标与提示文案
         · dlUrl    —— 「复制下载链接」与命令面板实际使用的地址 */
      it.relUrl = it.relAsset ? RELEASE_DL + it.relAsset.split('/').map(encodeURIComponent).join('/') : '';
      it.chan = it.relUrl ? 'release' : 'repo';
      it.chanText = it.relUrl ? 'GitHub Release' : 'GitHub 仓库';
      it.dlUrl = it.relUrl || it.pageUrl;
      ALL.push(it);
    });
  });

  var TOTAL = ALL.reduce(function (s, i) { return s + i.size; }, 0);
  var REPO_TOTAL = ALL.reduce(function (s, i) { return s + (i.large ? 0 : i.size); }, 0);

  /* ---------- 站点指标（供首页数字滚动使用，避免在 HTML 里写死） ----------
     页面只写 data-metric="count" 这类语义键，具体数值与单位由数据层给出，
     新增/删除资源后首页统计自动同步，不会出现「页面写 35、实际 36」的漂移。 */
  function units(n) {
    if (n < 1024) return { v: n, dec: 0, suffix: ' B' };
    var u = ['KiB', 'MiB', 'GiB'], i = -1;
    do { n /= 1024; i++; } while (n >= 1024 && i < u.length - 1);
    var dec = n >= 100 ? 0 : (n >= 10 ? 1 : 2);
    return { v: +n.toFixed(dec), dec: dec, suffix: ' ' + u[i] };
  }

  function countIn(catId) {
    var c = CATS.filter(function (x) { return x.id === catId; })[0];
    return c ? c.items.length : 0;
  }

  var MISANS_N = ALL.filter(function (i) { return i.group === 'MiSans 字体模块'; }).length;
  var RELEASE_N = ALL.filter(function (i) { return !!i.relUrl; }).length;

  var METRICS = {
    count: { v: ALL.length, dec: 0, suffix: '' },
    cats: { v: CATS.length, dec: 0, suffix: '' },
    ksu: { v: countIn('ksu'), dec: 0, suffix: '' },
    weights: { v: MISANS_N, dec: 0, suffix: '' },
    channels: { v: 3, dec: 0, suffix: '' },          /* 仓库 / Release / 夸克网盘 */
    releases: { v: RELEASE_N, dec: 0, suffix: '' },
    total: units(TOTAL),
    repoTotal: units(REPO_TOTAL)
  };

  w.PTDATA = {
    repo: REPO,
    branch: BRANCH,
    pages: PAGES,
    pagesGh: PAGES_GH,
    releaseTag: RELEASE_TAG,
    releasePage: RELEASE_PAGE,
    releaseLatest: RELEASE_LATEST,
    releaseDl: RELEASE_DL,
    quarkShare: QUARK_SHARE,
    quarkEntry: QUARK_ENTRY,
    quarkList: QUARK_LIST,
    quarkNote: QUARK_NOTE,
    quarkLinkMode: QUARK_LINK_MODE,
    quarkDirs: QDIR,
    cats: CATS,
    all: ALL,
    bytes: bytes,
    metrics: METRICS,
    total: TOTAL,
    totalText: bytes(TOTAL),
    repoTotal: REPO_TOTAL,
    repoTotalText: bytes(REPO_TOTAL),
    count: ALL.length
  };
})(window);
