# vivo 玩机工具 · Play Toolkit

> 面向 **vivo / iQOO（骁龙 9400 平台）** 的玩机资源整合仓库：永久解锁 Bootloader、免解锁临时 Root、
> KernelSU 内核模块、LSPosed 主题破解与 OriginOS 6 系统 UI 替换。

## 在线站点

站点：**https://shancha.dpdns.org/** —— 带搜索、分类筛选与命令面板的图形化资源库。

资源提供**三条互为镜像的分发通道**：

| 通道 | 地址 | 定位 |
| --- | --- | --- |
| 🌐 GitHub 仓库 | https://github.com/tiamo1990/index | 除超限文件外的全部资源，站点同源直链，版本可追溯 |
| 📦 GitHub Releases | https://github.com/tiamo1990/index/releases/tag/v2026.09.16 | 承载体积超过仓库单文件 100 MiB 上限的资源 |
| ☁️ 夸克网盘 | https://pan.quark.cn/s/956743d482f3 | 全量打包转存，国内访问速度稳定 |

## 超 100 MiB 文件的分发方式

GitHub 对**仓库内单个文件**设有 **100 MiB** 的硬性上限，超限文件既无法提交，也无法由 GitHub Pages 提供。
因此本站采用**双轨**策略：不超限的资源随仓库主干走 Pages 直链；超限资源改由 **Release 附件**承载
（单文件上限 2 GiB，且不占用 Pages 站点体积配额），站点对应卡片标注「超 100 MiB」与「Release 通道」，
主按钮指向 Release 直链，同时保留夸克网盘镜像作为备份。

当前通过 Release 通道分发的资源共 **1 项**：

| 资源 | 体积 | Release 直链 |
| --- | --- | --- |
| MiSans 字体替换 · Heavy | 117 MiB | [下载](https://github.com/tiamo1990/index/releases/download/v2026.09.16/MiSans-Replace-OriginOS6-Heavy.zip) |

> 新增超限资源时：在 GitHub 上创建/更新 Release 并上传附件，然后在 `assets/data/resources.js`
> 对应条目上加 `relAsset: '文件名'`（必要时同步调整顶部的 `RELEASE_TAG`）。
> 数据层会自动派生 Release 直链，并把 `downloads/`、`blob/` 等不存在的路径改写为 Release 页面，避免死链。

### 网盘下载的定位方式

站内每个资源卡片的「夸克网盘」按钮都会**直接定位到该文件所在的目录**，而不是分享根目录。
例如「vivo / iQOO 9400 一键解锁工具」会直接打开
`vivo 玩机工具 / 解锁bootloader（永久）`，省去逐层点击。

> **实现说明**：夸克分享页的 hash 路由只接受**目录** fid，即 `#/list/share/<目录fid>`。
> 实测在其后再追加文件 fid（`/<目录fid>/<文件fid>`）不会聚焦该文件，而是把文件当目录解析，
> 页面显示「没有文件」。因此本站不做文件级拼接，改由按钮悬浮提示与点击后的顶部提示
> 告知「目标目录 + 目标文件名」，进入目录后即可一眼找到目标文件。
> 目录 fid 的对应关系集中维护在 `assets/data/resources.js` 的 `QDIR` / `QMAP` 中。

### 域名说明

- **规范域名**：https://shancha.dpdns.org/ —— 由仓库根目录的 `CNAME` 文件绑定，站点内所有链接均指向它。
- `https://tiamo1990.github.io/index` 会被 GitHub **301** 到规范域名（GitHub 自签证书未就绪时为 http），
  属于历史地址，请优先使用规范域名。
- ⚠️ `CNAME` 是自定义域名的唯一凭据：**清空仓库时若删掉它，域名绑定会立即失效**
  （访问返回 GitHub Pages 的「There isn't a GitHub Pages site here」）。重建站点时务必保留。

## 资源总览

共 **35 项**资源，覆盖 **8 个分类**，总体积 **602 MiB**（其中随仓库主干分发 484 MiB，其余走 Release 通道）。

| 分类 | 项目数 | 体积 | 说明 |
| --- | --- | --- | --- |
| **解锁 Bootloader** | 4 | 47.9 MiB | 骁龙 9400 平台永久解锁方案，含一键工具、配套 Root 管理器与预置组件。 |
| **临时 Root** | 2 | 8.06 MiB | 不写分区、不破坏保修状态的临时提权方案，重启即失效，适合尝鲜与调试。 |
| **Root 管理器** | 1 | 8.69 MiB | 权限授予、模块管理与系统校验的核心运行环境。 |
| **KernelSU 模块** | 17 | 396 MiB | 内核级模块合集：字体替换、性能调度、温控移除、OTA 阻断与系统隐藏。 |
| **LSPosed 模块** | 4 | 1.77 MiB | Xposed 框架模块，主要面向主题破解与证书注入场景，需 Zygisk 环境支持。 |
| **主题替换资源** | 3 | 81.7 MiB | OriginOS 6 主题包与系统 UI 资源，配合主题破解模块使用可实现全局外观替换。 |
| **玩机工具箱** | 1 | 33.2 MiB | 图形化集成工具，把常用刷机、调试、备份操作收敛到统一界面。 |
| **通用环境与驱动** | 3 | 24.0 MiB | 刷机前必须就绪的底层环境：USB 驱动、ADB 平台工具与解压缩组件。 |

## 全部下载项

### 解锁 Bootloader

| 资源 | 文件名 | 体积 | 通道 | 下载 |
| --- | --- | --- | --- | --- |
| vivo / iQOO 9400 一键解锁工具 | `vivo-iqoo-9400-unlock-tool.zip` | 23.0 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/bootloader/vivo-iqoo-9400-unlock-tool.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/bootloader/vivo-iqoo-9400-unlock-tool.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| KernelSU 管理器（解锁配套） | `KernelSU.apk` | 8.67 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/bootloader/vivo-iqoo-9400-unlock-tool/KernelSU.apk) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/bootloader/vivo-iqoo-9400-unlock-tool/KernelSU.apk) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| SakiSU v4.3.0（arm64-v8a） | `SakiSU_v4.3.0-sakisu.1_35039-arm64-v8a-release.apk` | 8.09 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/bootloader/vivo-iqoo-9400-unlock-tool/SakiSU_v4.3.0-sakisu.1_35039-arm64-v8a-release.apk) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/bootloader/vivo-iqoo-9400-unlock-tool/SakiSU_v4.3.0-sakisu.1_35039-arm64-v8a-release.apk) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| 解锁工具辅助程序 test.exe | `test.exe` | 8.16 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/bootloader/vivo-iqoo-9400-unlock-tool/test.exe) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/bootloader/vivo-iqoo-9400-unlock-tool/test.exe) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |

### 临时 Root

| 资源 | 文件名 | 体积 | 通道 | 下载 |
| --- | --- | --- | --- | --- |
| vivo 一键越狱（minimal 精简版） | `vivo-oneclick-jailbreak-minimal.zip` | 8.05 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/temp-root/vivo-oneclick-jailbreak-minimal.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/temp-root/vivo-oneclick-jailbreak-minimal.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| 临时 Root 无实权修复脚本 | `fix-temp-root-no-real-permission.sh` | 2.38 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/temp-root/fix-temp-root-no-real-permission.sh) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/temp-root/fix-temp-root-no-real-permission.sh) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |

### Root 管理器

| 资源 | 文件名 | 体积 | 通道 | 下载 |
| --- | --- | --- | --- | --- |
| KernelSU v3.2.5-44 管理器 | `KernelSU_v3.2.5-44-g0f65ab64.apk` | 8.69 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/root-manager/KernelSU_v3.2.5-44-g0f65ab64.apk) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/root-manager/KernelSU_v3.2.5-44-g0f65ab64.apk) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |

### KernelSU 模块

| 资源 | 文件名 | 体积 | 通道 | 下载 |
| --- | --- | --- | --- | --- |
| MiSans 字体替换 · Regular | `MiSans-Replace-OriginOS6-Regular.zip` | 89.9 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/MiSans-Replace-OriginOS6-Regular.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/MiSans-Replace-OriginOS6-Regular.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| MiSans 字体替换 · Demibold | `MiSans-Replace-OriginOS6-Demibold.zip` | 90.1 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/MiSans-Replace-OriginOS6-Demibold.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/MiSans-Replace-OriginOS6-Demibold.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| MiSans 字体替换 · Bold | `MiSans-Replace-OriginOS6-Bold.zip` | 90.4 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/MiSans-Replace-OriginOS6-Bold.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/MiSans-Replace-OriginOS6-Bold.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| MiSans 字体替换 · Heavy | `MiSans-Replace-OriginOS6-Heavy.zip` | 117 MiB | Release | [Release 直链](https://github.com/tiamo1990/index/releases/download/v2026.09.16/MiSans-Replace-OriginOS6-Heavy.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| Zygisk Next 1.4.5 | `Zygisk-Next-1.4.5-836-b13d58a.zip` | 4.49 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/Zygisk-Next-1.4.5-836-b13d58a.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/Zygisk-Next-1.4.5-836-b13d58a.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| magic_mount_rs 2.2.51 | `magic_mount_rs-2.2.51-534.zip` | 1.37 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/magic_mount_rs-2.2.51-534.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/magic_mount_rs-2.2.51-534.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| MediaTek Mali GPU Governor v2.12.3 | `Mediatek_Mali_GPU_Governor_v2.12.3.zip` | 955 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/Mediatek_Mali_GPU_Governor_v2.12.3.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/Mediatek_Mali_GPU_Governor_v2.12.3.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| Chase Dream 线程 4+3+1 v2.1.3 | `Chase-dream-thread-4-3-1-v2.1.3.zip` | 715 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/Chase-dream-thread-4-3-1-v2.1.3.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/Chase-dream-thread-4-3-1-v2.1.3.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| 月虹一键隐藏模块 v5.4.7 | `YueHong-Hide-v5.4.7.zip` | 643 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/YueHong-Hide-v5.4.7.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/YueHong-Hide-v5.4.7.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| RescueX v3.5.11 | `RescueX-v3.5.11.zip` | 183 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/RescueX-v3.5.11.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/RescueX-v3.5.11.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| FontLoader 字体加载器 | `FontLoader.zip` | 142 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/FontLoader.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/FontLoader.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| block_vivo_ota v1.2 | `block_vivo_ota_v1.2.zip` | 45.7 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/block_vivo_ota_v1.2.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/block_vivo_ota_v1.2.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| 极致性能 · 最终版 2026022603 | `ExtremePerformance-Final-2026022603.zip` | 33.7 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/ExtremePerformance-Final-2026022603.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/ExtremePerformance-Final-2026022603.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| ExtremeGT（vivo D9400） | `ExtremeGT-vivoD9400.zip` | 8.35 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/ExtremeGT-vivoD9400.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/ExtremeGT-vivoD9400.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| AutoADB WiFi | `AutoADBWiFi.zip` | 8.21 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/AutoADBWiFi.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/AutoADBWiFi.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| 移除温控 · iQOO 系列专用版 v1.0.3 | `RemoveThermalControl-iQOO-v1.0.3.zip` | 7.77 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/RemoveThermalControl-iQOO-v1.0.3.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/RemoveThermalControl-iQOO-v1.0.3.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| vivo 屏蔽系统更新 | `VIVO-BlockSystemUpdate.zip` | 6.00 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/ksu-modules/VIVO-BlockSystemUpdate.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/ksu-modules/VIVO-BlockSystemUpdate.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |

### LSPosed 模块

| 资源 | 文件名 | 体积 | 通道 | 下载 |
| --- | --- | --- | --- | --- |
| vivo / iQOO 主题破解 v114514 | `vivo-iqoo-theme-crack-v114514.zip` | 389 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/lsp-modules/vivo-iqoo-theme-crack-v114514.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/lsp-modules/vivo-iqoo-theme-crack-v114514.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| 主题破解（15.5.0.1 以上版本） | `theme-crack-above-15.5.0.1.zip` | 21.1 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/lsp-modules/theme-crack-above-15.5.0.1.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/lsp-modules/theme-crack-above-15.5.0.1.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| DeepSeek CA Root 证书注入 | `DeepSeek-CA-Root.zip` | 1.78 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/lsp-modules/DeepSeek-CA-Root.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/lsp-modules/DeepSeek-CA-Root.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| magic_mount_rs 2.2.51（LSP 通道） | `magic_mount_rs-2.2.51-534.zip` | 1.37 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/lsp-modules/magic_mount_rs-2.2.51-534.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/lsp-modules/magic_mount_rs-2.2.51-534.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |

### 主题替换资源

| 资源 | 文件名 | 体积 | 通道 | 下载 |
| --- | --- | --- | --- | --- |
| MT 管理器 2.26.4 等 6 个配套工具 | `MTManager-2.26.4-and-5-more.rar` | 73.0 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/theme/MTManager-2.26.4-and-5-more.rar) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/theme/MTManager-2.26.4-and-5-more.rar) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| 仿小米主题包（修改版） | `xiaomi-clone-modified.itz` | 8.12 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/theme/pack/xiaomi-clone-modified.itz) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/theme/pack/xiaomi-clone-modified.itz) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| com.android 系统 UI（仿小米原版） | `com.android-xiaomi-clone-original.systemui` | 541 KiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/theme/pack/com.android-xiaomi-clone-original.systemui) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/theme/pack/com.android-xiaomi-clone-original.systemui) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |

### 玩机工具箱

| 资源 | 文件名 | 体积 | 通道 | 下载 |
| --- | --- | --- | --- | --- |
| 紫罗兰工具箱 | `VioletToolbox.exe` | 33.2 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/toolbox/VioletToolbox.exe) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/toolbox/VioletToolbox.exe) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |

### 通用环境与驱动

| 资源 | 文件名 | 体积 | 通道 | 下载 |
| --- | --- | --- | --- | --- |
| ADB 环境一键部署便携包 | `ADB-portable-oneclick.zip` | 13.5 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/common/ADB-portable-oneclick.zip) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/common/ADB-portable-oneclick.zip) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| vivo USB 驱动 | `vivo_usb_driver.exe` | 8.98 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/common/vivo_usb_driver.exe) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/common/vivo_usb_driver.exe) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |
| 7-Zip 26.03 x64 | `7z2603-x64.exe` | 1.58 MiB | 仓库 | [直链下载](https://shancha.dpdns.org/downloads/common/7z2603-x64.exe) · [仓库](https://github.com/tiamo1990/index/blob/main/downloads/common/7z2603-x64.exe) · [夸克网盘](https://pan.quark.cn/s/956743d482f3) |

## 目录结构

```
.nojekyll                  # 禁用 Jekyll，确保静态资源原样发布
CNAME                      # 自定义域名 shancha.dpdns.org（删除会导致域名解绑）
index.html                 # 首页（能力矩阵 / 分类总览 / 热门资源 / 三通道）
tools.html                 # 资源库（搜索 / 筛选 / 排序 / 三通道下载）
guide.html                 # 刷机指南（六阶段完整流程）
faq.html                   # 常见问题与免责声明
404.html                   # 自定义错误页
robots.txt / sitemap.xml   # 抓取与站点地图（均指向规范域名）
assets/css/main.css        # 液态玻璃设计系统（双主题、弹性动效、响应式）
assets/js/app.js           # 站点运行时（主题 / 导航 / 动效 / 命令面板 / 图标库 / 链接注入）
assets/js/home.js          # 首页动态区块（分类总览 / 热门资源）
assets/js/tools.js         # 资源库渲染与筛选逻辑
assets/data/resources.js   # 资源数据层（单点数据源：资源、网盘 fid、Release 通道、站点指标）
downloads/bootloader/      # 解锁工具
downloads/temp-root/       # 临时 Root
downloads/root-manager/    # KernelSU 管理器
downloads/ksu-modules/     # KernelSU 内核模块
downloads/lsp-modules/     # LSPosed 模块
downloads/theme/           # 主题与系统 UI 资源
downloads/toolbox/         # 图形化工具箱
downloads/common/          # 驱动与 ADB 环境
```

## 部署说明

本仓库根目录即静态站点根目录，通过 GitHub Pages 直接发布：

1. 仓库 **Settings → Pages**
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `main`，目录选择 `/ (root)`，保存
4. Custom domain 填 `shancha.dpdns.org`（与根目录 `CNAME` 文件保持一致）
5. 访问 https://shancha.dpdns.org/

发布超 100 MiB 资源的流程（Release 通道）：

1. 在仓库 **Releases → Draft a new release** 创建标签（如 `v2026.09.16`）
2. 上传超过 100 MiB 的附件（单个上限 2 GiB）
3. 在 `assets/data/resources.js` 对应条目补 `relAsset: '附件文件名'`
4. 重新生成 README 并提交，站点卡片会自动切换为 Release 直链

## 已知限制

- GitHub 单文件上限为 **100 MiB**。体积超限的资源（当前 1 项：MiSans 字体替换 · Heavy，117 MiB）
  不进入仓库主干，由 **GitHub Releases** 通道分发，站点对应卡片标注「超 100 MiB」与「Release 通道」。
- 仓库主干总体积约 484 MiB，克隆时请留意网络开销；仅需个别文件时建议使用网页直链下载。
- 站点暂未提供整包离线下载能力，需要全量文件时请使用夸克网盘通道。

## 免责声明

解锁 Bootloader、获取 Root、刷入第三方模块与替换系统资源均属超出厂商设计范围的操作，
**存在数据丢失、系统异常、硬件过热与保修状态变更的风险，请自行承担后果**。
请确保对所操作设备拥有合法所有权，严禁用于破解他人设备、绕过付费授权或其他非法用途。

本站资源均来源于公开渠道，著作权归各自作者所有；本站仅做归类与分发，
如权利人对分发方式有异议，请提交 Issue，我们将在核实后第一时间移除相关文件。
