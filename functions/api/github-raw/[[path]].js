/**
 * Cloudflare Pages Function - GitHub Raw 代理
 * 路由: /api/github-raw/*
 * 代理 raw.githubusercontent.com 的内容
 */
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  const rawPath = url.pathname.replace(/^\/api\/github-raw\//, '');
  const targetUrl = `https://raw.githubusercontent.com/${rawPath}`;

  const headers = new Headers(request.headers);
  headers.set('Host', 'raw.githubusercontent.com');
  headers.delete('cf-connecting-ip');
  headers.delete('cf-ipcountry');
  headers.delete('cf-ray');
  headers.delete('cf-visitor');

  const resp = await fetch(targetUrl, {
    method: request.method,
    headers: headers,
  });

  const out = new Response(resp.body, resp);
  out.headers.set('Access-Control-Allow-Origin', '*');
  return out;
}
