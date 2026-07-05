/**
 * Cloudflare Pages Function - GitHub API 代理
 * 路由: /api/github-api/*
 * 解决国内浏览器直接访问 api.github.com 的网络问题
 * 请求经 Cloudflare 网络中转，在国内可达性更好
 */
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // 提取 /api/github-api/ 之后的路径
  const apiPath = url.pathname.replace(/^\/api\/github-api\//, '');
  const targetUrl = `https://api.github.com/${apiPath}${url.search}`;

  const headers = new Headers(request.headers);
  headers.set('Host', 'api.github.com');
  headers.set('Accept', 'application/vnd.github.v3+json');
  // 不保留 CF 内部头
  headers.delete('cf-connecting-ip');
  headers.delete('cf-ipcountry');
  headers.delete('cf-ray');
  headers.delete('cf-visitor');

  const resp = await fetch(targetUrl, {
    method: request.method,
    headers: headers,
    body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.text() : undefined,
  });

  const out = new Response(resp.body, resp);
  out.headers.set('Access-Control-Allow-Origin', '*');
  out.headers.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
  out.headers.set('Access-Control-Allow-Headers', '*');
  return out;
}
