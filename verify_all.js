const fs = require('fs');
const h = fs.readFileSync('C:/webws/hcip_practice.html', 'utf8');
const lines = h.split('\n');

let ok = 0, fail = 0;

// 1. Check new features exist
const features = {
  '题目搜索 - searchQuestions function': /function searchQuestions/,
  '题目搜索 - doSearch function': /function doSearch/,
  '快捷键帮助 - showShortcutHelp function': /function showShortcutHelp/,
  '草稿纸 - toggleDraftPaper function': /function toggleDraftPaper/,
  '草稿纸 - draftNotes in AppState': /draftNotes/,
  '答题笔记 - getQuestionNote function': /function getQuestionNote/,
  '答题笔记 - toggleQuestionNote function': /function toggleQuestionNote/,
  '快捷键 ? key handler': /\?.*showShortcutHelp/,
  '搜索入口 - home page tool card': /题目搜索/,
  '快捷键入口 - home page tool card': /快捷键帮助/,
  '草稿纸按钮 - exam quiz view': /toggleDraftPaper/,
  '笔记按钮 - practice quiz view': /toggleQuestionNote/,
};

console.log('=== Feature Verification ===\n');
for (const [name, regex] of Object.entries(features)) {
  if (regex.test(h)) {
    console.log(`✅ ${name}`);
    ok++;
  } else {
    console.log(`❌ ${name}`);
    fail++;
  }
}

// 2. Bug fix checks
console.log('\n=== Bug Fix Verification ===\n');

// selectFill no longer has dead code
if (h.includes("function selectFill(v)") && !h.includes("return;\n    AppState.userAnswers[AppState.currentIdx] = v;")) {
  console.log('✅ selectFill - dead code removed');
  ok++;
} else {
  console.log('❌ selectFill - still has dead code');
  fail++;
}

// clearAllTimers uses AppState
if (h.includes("AppState.timerInterval") && h.includes("AppState.autoSaveInterval")) {
  if (!h.includes("window.examTimerInterval") || h.indexOf("window.examTimerInterval") > h.indexOf("function clearAllTimers")) {
    // Need to check it's NOT in clearAllTimers
    const start = h.indexOf("function clearAllTimers");
    const end = h.indexOf("\n}", start) + 2;
    const block = h.slice(start, end);
    if (block.includes("AppState.timerInterval") && !block.includes("window.examTimerInterval")) {
      console.log('✅ clearAllTimers - uses AppState vars instead of window');
      ok++;
    } else {
      console.log('❌ clearAllTimers - wrong vars');
      fail++;
    }
  }
} else {
  console.log('❌ clearAllTimers - uses wrong vars');
  fail++;
}

// saveProgressAndExit uses clearAllTimers
const spIdx = h.indexOf("function saveProgressAndExit()");
const spBlock = h.slice(spIdx, spIdx + 300);
if (spBlock.includes("clearAllTimers()") && !spBlock.includes("window.examTimerInterval")) {
  console.log('✅ saveProgressAndExit - uses clearAllTimers()');
  ok++;
} else {
  console.log('❌ saveProgressAndExit - still has manual cleanup');
  fail++;
}

// selectJudge uses DOM update
const sjIdx = h.indexOf("function selectJudge(v)");
const sjBlock = h.slice(sjIdx, sjIdx + 600);
if (sjBlock.includes("document.getElementById('question-card')") && sjBlock.includes("classList.toggle") && !sjBlock.includes("render();")) {
  console.log('✅ selectJudge - uses DOM update instead of full render');
  ok++;
} else {
  console.log('❌ selectJudge - still uses full render');
  fail++;
}

// Wrong book clear uses per-subject keys
if (h.includes("hcip_' + AppState.currentSubject + '_wrong'") && h.includes("hcip_' + AppState.currentSubject + '_wrong_counts'")) {
  console.log('✅ Wrong book clear - uses per-subject keys');
  ok++;
} else {
  console.log('❌ Wrong book clear - still uses hardcoded keys');
  fail++;
}

console.log(`\n=== Totals: ${ok} passed, ${fail} failed ===`);
console.log(`File: ${lines.length} lines, ${h.length} bytes`);
