const fs = require('fs');
const html = fs.readFileSync('C:/webws/hcip_practice.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/g);
if (!scripts) { console.log('No script blocks found'); process.exit(); }
scripts.forEach((s, i) => {
  const code = s.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
  try {
    new Function(code);
  } catch(e) {
    const pos = html.indexOf(s);
    console.error(`Block ${i} (pos ~${pos}): ${e.message}`);
    // show surrounding context
    const lines = code.split('\n');
    const match = e.message.match(/line (\d+)/);
    const lineNum = match ? parseInt(match[1]) : 0;
    if (lineNum > 0) {
      console.error(`  Line ${lineNum}: ${lines[lineNum-1]?.trim()}`);
      if (lines[lineNum]) console.error(`  Line ${lineNum+1}: ${lines[lineNum]?.trim()}`);
    }
  }
});
console.log(`Checked ${scripts.length} script blocks. Done.`);
