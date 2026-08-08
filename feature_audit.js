const fs = require('fs');
const h = fs.readFileSync('C:/webws/hcip_practice.html', 'utf8');

const checks = {
  // 核心功能检查
  '收藏/标记题目': /favorite|bookmark|star|collect|标记|收藏/i,
  '答题笔记/注释': /note|annotation|笔记|注释|备注/i,
  '题目搜索': /search|搜索|查找/i,
  '错题按类型筛选': /wrongType|filterWrong|错题.*筛选|筛选.*错题/i,
  '练习模式随机顺序': /shufflePractice|practiceShuffle|练习.*随机|随机.*练习/i,
  '考试模式草稿纸/计算器': /draft|scratchpad|calculator|草稿|计算器/i,
  '答题历史回看': /reviewAnswer|answerHistory|回顾.*答案|答案.*回顾/i,
  '题目难度标识': /difficulty|难度|easy|hard/i,
  '学习进度统计图表': /chart|progress.*stat|统计.*图|progressChart/i,
  '导出成绩/打印': /export|print|导出|打印/i,
  '夜间模式/主题切换': /dark.*mode|theme|night|夜间|主题|暗色/i,
  '字体大小调节': /font.*size|fontSize|字体/i,
  '快捷键提示面板': /shortcut.*help|helpPanel|快捷键.*帮助/i,
  '断网离线支持': /offline|serviceWorker|cache|离线/i,
  '声音反馈（答对/答错）': /audio|sound|play\(|声音|音效/i,
  '批量操作（清空进度等）': /clearAll|resetAll|批量|清空.*全部/i,
  '多套题库切换': /switchSubject|changeSubject|切换.*题库|题库.*切换/i,
};

console.log('=== 功能缺失检测 ===\n');
for (const [name, regex] of Object.entries(checks)) {
  const found = regex.test(h);
  console.log(`${found ? '✅' : '❌'} ${name}`);
}

// 检查现有功能的完善程度
console.log('\n=== 现有功能完善度 ===\n');

// 计时器
if (h.includes('examTimeLeft') && h.includes('Date.now()')) {
  console.log('⏱️ 考试计时器: ✅ 已用 Date.now() 高精度');
} else if (h.includes('examTimeLeft')) {
  console.log('⏱️ 考试计时器: ⚠️ 存在但可能精度不够');
}

// 自动保存
if (h.includes('autoSave') || h.includes('AutoSave')) {
  console.log('💾 自动保存: ✅ 存在');
} else {
  console.log('💾 自动保存: ❌ 缺失');
}

// 键盘快捷键
const keydownCount = (h.match(/keydown|addEventListener.*key/g) || []).length;
console.log(`⌨️ 键盘快捷键: ${keydownCount > 2 ? '✅' : '⚠️ 基础'} (${keydownCount} 处监听)`);

// 滑动手势
if (h.includes('initSwipeGestures') || h.includes('touchstart') || h.includes('swipe')) {
  console.log('👆 滑动翻页: ✅ 存在');
} else {
  console.log('👆 滑动翻页: ❌ 缺失');
}

// 响应式
const mediaQueryCount = (h.match(/@media/g) || []).length;
console.log(`📱 响应式适配: ${mediaQueryCount > 0 ? '✅' : '❌'} (${mediaQueryCount} 个媒体查询)`);

// 进度保存
if (h.includes('localStorage') || h.includes('saveProgress')) {
  console.log('📦 本地存储: ✅ 存在');
} else {
  console.log('📦 本地存储: ❌ 缺失');
}

// 答题卡
if (h.includes('答题卡') || h.includes('answerCard') || h.includes('panel')) {
  console.log('📋 答题卡面板: ✅ 存在');
} else {
  console.log('📋 答题卡面板: ❌ 缺失');
}

// 错题本
if (h.includes('wrongBook') || h.includes('错题')) {
  console.log('📕 错题本: ✅ 存在');
} else {
  console.log('📕 错题本: ❌ 缺失');
}

// 收藏功能细节
if (/favorite|收藏|markQuestion/.test(h)) {
  console.log('⭐ 收藏题目: ✅ 存在');
} else {
  console.log('⭐ 收藏题目: ❌ 缺失 (高价值功能)');
}

// 检查是否有"查看解析"功能
if (h.includes('解析') || h.includes('explanation') || h.includes('showAnswer')) {
  console.log('📖 查看解析: ✅ 存在');
} else {
  console.log('📖 查看解析: ⚠️ 需确认');
}

console.log('\n=== 扫描完成 ===');
