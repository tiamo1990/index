# ToolHub — 工具下载站

纯静态 SPA 工具导航站，部署于 [shancha.dpdns.org](https://shancha.dpdns.org)。

## 项目简介

单页应用（SPA）架构，涵盖系统工具、办公工具、开发工具、网络工具、多媒体工具等分类。支持搜索、分类多选过滤、排序（默认/最常用/最近使用）、后台管理（本地 localStorage 存储）、导入导出等功能。

## 部署

- **生产地址**: `https://shancha.dpdns.org`
- **部署方式**: GitHub Pages + Cloudflare（CNAME 指向 `shancha.dpdns.org`）

## 技术栈

- 纯静态 HTML / CSS / JavaScript（SPA 架构）
- 无框架依赖，零构建步骤
- 深色毛玻璃 UI，响应式设计
- localStorage 持久化管理数据
- GitHub Pages 托管

## 目录结构

```
index-main/
├── index.html              # SPA 入口（工具大厅 / 管理后台 / 帮助中心三合一）
├── 404.html                # 自定义 404 页面
├── CNAME                   # GitHub Pages 自定义域名
├── README.md               # 项目说明
├── robots.txt              # 爬虫规则
├── sitemap.xml             # 站点地图
├── css/
│   ├── base.css            # 设计系统 + 基础组件 + 导航
│   └── styles.css          # 页面布局 + 功能模块样式
└── js/
    ├── tool-data.js        # 工具资源数据
    └── app.js              # 应用逻辑（导航、搜索、管理后台、帮助中心）
```

## 注意事项

- 管理后台数据存储在浏览器 localStorage，清除缓存会导致数据丢失，建议定期导出 JSON 备份。
- 后台登录凭据请参考管理后台「设置」页面，生产环境建议使用服务端认证。
- 大文件（APK、RAR 等）不应放入仓库，使用外部网盘分发。

## License

MIT

<!-- force pages rebuild: 2026-07-05 21:26:12 -->
