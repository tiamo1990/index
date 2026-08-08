const fs = require('fs');
const h = fs.readFileSync('C:/webws/hcip_practice.html', 'utf8');
const lines = h.split('\n');

let issues = [];

// 1. Check for console.log/debugger left in production
lines.forEach((line, i) => {
  if (/console\.(log|debug|warn)\(/.test(line) && !line.trim().startsWith('//')) {
    issues.push(`L${i+1}: ${line.trim().slice(0,100)}`);
  }
});
if (issues.length > 0) {
  console.log(`\n=== ${issues.length} console statements (should clean up for production) ===`);
  issues.slice(0, 20).forEach(x => console.log('  ', x));
}

// 2. Check for innerHTML with user data (XSS risk)
let xssCount = 0;
lines.forEach((line, i) => {
  if (/innerHTML\s*=.*\+|innerHTML\s*=\s*['"`].*\$\{|\.innerHTML\s*=\s*\w+\./.test(line)) {
    xssCount++;
  }
});
if (xssCount > 0) console.log(`\n=== Potential XSS: ${xssCount} innerHTML with dynamic data ===`);

// 3. Check for missing error boundaries in key functions
const hasTryCatch = (fn) => {
  const idx = h.indexOf('function ' + fn);
  if (idx === -1) return 'NOT FOUND';
  const chunk = h.slice(idx, idx + 2000);
  return chunk.includes('try {') || chunk.includes('try{') ? 'OK' : 'NO TRY-CATCH';
};
['render', 'renderQuiz', 'submitAnswer', 'beginExam', 'startPractice', 'checkAnswer'].forEach(fn => {
  const status = hasTryCatch(fn);
  if (status !== 'OK') console.log(`\n${fn}(): ${status}`);
});

// 4. Check for large functions (>100 lines)
const fnMatches = [...h.matchAll(/function\s+(\w+)\s*\(/g)];
fnMatches.forEach(m => {
  const fnName = m[1];
  const start = m.index;
  // Find function body end by brace counting
  let depth = 0, started = false, end = start;
  for (let i = start + m[0].length; i < h.length && i < start + 50000; i++) {
    if (h[i] === '{') { depth++; started = true; }
    else if (h[i] === '}') { depth--; if (started && depth === 0) { end = i; break; } }
  }
  const lineCount = h.slice(start, end).split('\n').length;
  if (lineCount > 80) {
    console.log(`\n${fnName}(): ${lineCount} lines (consider splitting)`);
  }
});

// 5. Check for TODO/FIXME/HACK comments
const todos = [];
lines.forEach((line, i) => {
  const m = line.match(/(TODO|FIXME|HACK|XXX|BUG)/i);
  if (m) todos.push(`L${i+1}: ${line.trim().slice(0,120)}`);
});
if (todos.length) {
  console.log('\n=== TODO/FIXME markers ===');
  todos.forEach(t => console.log('  ', t));
}

// 6. Check for duplicate function definitions
const fnDefs = {};
fnMatches.forEach(m => {
  const name = m[1];
  fnDefs[name] = (fnDefs[name] || 0) + 1;
});
const dups = Object.entries(fnDefs).filter(([,v]) => v > 1);
if (dups.length) {
  console.log('\n=== Duplicate function definitions ===');
  dups.forEach(([n,c]) => console.log(`  ${name}: defined ${c} times`));
}

// 7. Global variable pollution check
const globalVars = [...h.matchAll(/^(?:var|let|const)\s+(\w+)/gm)].map(m=>m[1]);
const globalCounts = {};
globalVars.forEach(v => globalCounts[v] = (globalCounts[v]||0)+1);
const topGlobals = Object.entries(globalCounts).filter(([,c])=>c>1).sort((a,b)=>b[1]-a[1]).slice(0,10);
if (topGlobals.length) {
  console.log('\n=== Frequently used variables (review scope) ===');
  topGlobals.forEach(([n,c]) => console.log(`  ${n}: ${c} declarations`));
}

console.log('\n=== Scan complete ===');
