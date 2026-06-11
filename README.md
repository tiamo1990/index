# 个人工具合集站

一个简洁美观的纯静态工具导航站，部署于 [https://shancha.dpdns.org](https://shancha.dpdns.org)。

## 项目简介

本站点用于整理和分享各类免费实用工具的下载入口，涵盖系统工具、办公工具、开发工具、网络工具、多媒体工具等分类，支持搜索、分类浏览和工具详情页。

## 部署域名

- **生产地址**: `https://shancha.dpdns.org`
- **部署方式**: GitHub Pages（CNAME 指向 `shancha.dpdns.org`）

## 技术栈

- 纯静态 HTML / CSS / JavaScript
- 无框架依赖，直接由浏览器加载
- 响应式设计，适配桌面端和移动端
- GitHub Pages 托管

## 目录结构

```
index-main/
├── index.html            # 首页
├── system.html           # 系统工具
├── office.html           # 办公工具
├── dev.html              # 开发工具
├── network.html          # 网络工具
├── multimedia.html       # 多媒体工具
├── plugin.html           # 其他工具
├── tool-detail.html      # 工具详情页
├── tool-detail-template.html
├── help.html             # 使用帮助
├── login.html            # 后台登录
├── admin.html            # 后台管理
├── styles.css            # 主样式
├── script.js             # 首页脚本
├── admin-script.js       # 后台脚本
├── sitemap.xml           # 站点地图
├── robots.txt            # 爬虫规则
├── 404.html             # 自定义 404 页面
└── CNAME                # GitHub Pages 自定义域名
```

## 注意事项

- 后台登录密码已在前端代码中修改，生产环境建议使用服务端认证，避免前端硬编码凭据。
- GitHub Token 已从源码中移除，请通过环境变量或服务端注入方式配置。
- 大文件（APK、RAR 等）不应放入仓库，建议使用 GitHub Releases 或外部网盘分发。

## License

MIT
