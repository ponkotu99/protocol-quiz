const consensusQuestions = [
  {
    category: "コンセンサス",
    question: "心肺停止前静脈路確保と輸液の対象はおよそ15歳以上である。",
    type: "ox",
    answer: "○",
    explanation: "対象はおよそ15歳以上。",
  },

  {
    category: "コンセンサス",
    question: "増悪するショックが疑われる場合は輸液適応を考慮する。",
    type: "ox",
    answer: "○",
    explanation: "増悪するショックでは輸液適応を考慮する。",
  },

  {
    category: "コンセンサス",
    question: "心原性ショックが強く疑われる場合も輸液適応となる。",
    type: "ox",
    answer: "×",
    explanation: "心原性ショックは対象除外。",
  },

  {
    category: "コンセンサス",
    question: "クラッシュ症候群では圧迫解除後の急変に注意する。",
    type: "ox",
    answer: "○",
    explanation: "圧迫解除後に急変する可能性がある。",
  },

  {
    category: "コンセンサス",
    question: "ショック分類の鑑別は不要である。",
    type: "ox",
    answer: "×",
    explanation: "ショック分類の鑑別は重要。",
  },

  {
    category: "コンセンサス",
    question: "説明と同意は救急現場でも重要である。",
    type: "ox",
    answer: "○",
    explanation: "十分な説明と了解が必要。",
  },

  {
    category: "コンセンサス",
    question: "心肺停止前輸液は医師の具体的指示を必要とする。",
    type: "ox",
    answer: "○",
    explanation: "特定行為のため具体的指示が必要。",
  },

  {
    category: "コンセンサス",
    question: "穿刺の試行は1回90秒以内を目途とする。",
    type: "ox",
    answer: "○",
    explanation: "穿刺試行は90秒以内。",
  },

  {
    category: "コンセンサス",
    question: "静脈路確保の穿刺回数は原則何回まで？",
    type: "choice",
    choices: ["1回", "2回", "3回", "制限なし"],
    answer: "2回",
    explanation: "穿刺回数は原則2回。",
  },

  {
    category: "コンセンサス",
    question: "輸液速度は急速輸液を原則とする。",
    type: "ox",
    answer: "○",
    explanation: "急速輸液を原則とする。",
  },

  {
    category: "コンセンサス",
    question: "500ml毎に医師へ報告し指示を受ける。",
    type: "ox",
    answer: "○",
    explanation: "500ml毎に医師へ報告する。",
  },

  {
    category: "コンセンサス",
    question: "手関節部橈側皮静脈は神経損傷リスクが低いため推奨される。",
    type: "ox",
    answer: "×",
    explanation: "神経損傷リスクが高く避けることが望ましい。",
  },

  {
    category: "コンセンサス",
    question: "穿刺時は針刺し事故に十分注意する。",
    type: "ox",
    answer: "○",
    explanation: "針刺し事故防止に十分注意する。",
  },

  {
    category: "コンセンサス",
    question: "心肺停止状態へ変化した場合は心肺停止プロトコールへ移行する。",
    type: "ox",
    answer: "○",
    explanation: "CPAへ移行時は心肺停止プロトコールへ。",
  },

  {
    category: "コンセンサス",
    question: "血糖測定は医師の具体的指示が必要である。",
    type: "ox",
    answer: "×",
    explanation: "血糖測定自体は具体的指示不要。",
  },

  {
    category: "コンセンサス",
    question: "血糖測定の穿刺部位は中指・環指を原則とする。",
    type: "ox",
    answer: "○",
    explanation: "中指・環指を原則とする。",
  },

  {
    category: "コンセンサス",
    question: "50%ブドウ糖溶液の投与量は？",
    type: "choice",
    choices: ["10ml", "20ml", "40ml", "100ml"],
    answer: "40ml",
    explanation: "50%ブドウ糖40mlを原則とする。",
  },

  {
    category: "コンセンサス",
    question: "50%ブドウ糖溶液は急速投与を原則とする。",
    type: "ox",
    answer: "×",
    explanation: "3〜4分かけてゆっくり投与。",
  },

  {
    category: "コンセンサス",
    question: "ブドウ糖投与後は継続的観察を行う。",
    type: "ox",
    answer: "○",
    explanation: "容態悪化時は医師へ報告する。",
  },

  {
    category: "コンセンサス",
    question: "現場活動時間は大幅延長を推奨する。",
    type: "ox",
    answer: "×",
    explanation: "早期搬送に努める。",
  },
];

export default consensusQuestions;