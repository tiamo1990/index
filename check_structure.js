const fs = require('fs');
const h = fs.readFileSync('C:/webws/hcip_practice.html', 'utf8');
console.log('File size:', h.length);
console.log('Has <body:', h.includes('<body'));
console.log('Has id="app":', h.includes('id="app"'));
console.log('Has DOMContentLoaded:', h.includes('DOMContentLoaded'));
console.log('Has render() call:', h.includes('render()'));
console.log('Script blocks:', (h.match(/<script/g) || []).length);

// Check HTML structure
const bodyIdx = h.indexOf('<body');
const bodyEnd = h.indexOf('</body>');
console.log('Body tag at:', bodyIdx, 'end:', bodyEnd);

// Check if </html> exists
console.log('Has closing tags:', h.includes('</html>'), h.includes('</body>'), h.includes('</head>'));

// Check for unclosed script tags
const openScripts = (h.match(/<script/g) || []).length;
const closeScripts = (h.match(/<\/script>/g) || []).length;
console.log('Open script:', openScripts, 'Close script:', closeScripts);

// Find DOMContentLoaded handler
const dcIdx = h.indexOf('DOMContentLoaded');
if (dcIdx > -1) {
  console.log('\nDOMContentLoaded context:\n' + h.slice(dcIdx, dcIdx + 500));
}

// Find render() call in DOMContentLoaded
const renderCalls = h.match(/render\(\)/g);
console.log('\nrender() calls:', renderCalls?.length || 0);

// Last 300 chars
console.log('\n--- File end ---\n' + h.slice(-300));
