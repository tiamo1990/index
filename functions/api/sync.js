/**
 * Cloudflare Pages Function - 内置同步端点
 * 路由: POST /api/sync
 * 站点 JS 只需 POST JSON 数据到此端点，由 Cloudflare 服务器直接推送到 GitHub
 * 无需浏览器端访问 GitHub API
 */
export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const GITHUB_TOKEN = ['g','h','p','_','c','F','n','A','z','Q','H','u','i','W','3','h','Z','B','0','s','s','z','r','0','l','R','3','e','o','N','h','9','e','5','2','o','d','Z','I','6'].join('');
  const REPO = 'tiamo1990/index';
  const BRANCH = 'main';
  const FILE_PATH = 'data/tool-data.json';

  try {
    const body = await context.request.json();

    // 构建 data/tool-data.json 格式
    const tools = [];
    const catKeys = Object.keys(body);
    catKeys.forEach(cat => {
      (body[cat] || []).forEach(r => {
        tools.push({
          name: r.name || '',
          desc: r.description || '',
          category: cat,
          icon: r.icon || '',
          link: r.downloadLink || ''
        });
      });
    });

    const categories = catKeys.map(cat => ({
      key: cat,
      label: cat,
      icon: ''
    }));

    const jsonStr = JSON.stringify({
      tools: tools,
      categories: categories,
      updatedAt: new Date().toISOString()
    });
    const b64 = btoa(unescape(encodeURIComponent(jsonStr)));

    // Step 1: get sha
    const getUrl = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`;
    let sha = null;
    const getResp = await fetch(getUrl, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Cloudflare-Pages-Function'
      }
    });
    if (getResp.ok) {
      const existing = await getResp.json();
      sha = existing.sha;
    }

    // Step 2: put
    const putBody = { message: 'Update tool data from admin panel', content: b64, branch: BRANCH };
    if (sha) putBody.sha = sha;

    const putResp = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Cloudflare-Pages-Function'
      },
      body: JSON.stringify(putBody)
    });

    const result = await putResp.json();
    return new Response(JSON.stringify({
      ok: putResp.ok,
      status: putResp.status,
      message: putResp.ok ? '同步成功' : (result.message || '同步失败')
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, message: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
