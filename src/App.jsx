import { useState } from "react";



import cpaQuestions from "./questions/cpa";
import preCpaQuestions from "./questions/preCpa";
import consensusQuestions from "./questions/consensus";
import dnarQuestions from "./questions/dnar";
import caseQuestions from "./questions/caseQuestions";

const allQuestions = [
  ...cpaQuestions,
  ...preCpaQuestions,
  ...consensusQuestions,
  ...dnarQuestions,
  ...caseQuestions,
];

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState([]);

  const startQuiz = (category) => {
    const filtered =
      category === "ランダム"
        ? [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 20)
        : [...allQuestions]
            .filter((q) => q.category === category)
            .sort(() => Math.random() - 0.5);

    setQuestions(filtered);
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelectedCategory(category);
    setShowExplanation(false);
    setWrongQuestions([]);
  };

  const startWrongQuiz = () => {
    setQuestions(wrongQuestions);
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelectedCategory("復習");
    setShowExplanation(false);
  };

  const handleAnswer = (choice) => {
    const q = questions[current];
    const correct = choice === q.answer;

    if (correct) {
      setScore(score + 1);
    } else {
      setWrongQuestions((prev) => [...prev, q]);
    }

    setLastAnswerCorrect(correct);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={titleStyle}>プロトコールQuiz</h1>

          <button style={buttonStyle} onClick={() => startQuiz("ランダム")}>
            ランダム20問
          </button>

          <button style={buttonStyle} onClick={() => startQuiz("心肺蘇生")}>
            心肺蘇生
          </button>

          <button style={buttonStyle} onClick={() => startQuiz("心肺停止前")}>
            心肺停止前
          </button>

          <button style={buttonStyle} onClick={() => startQuiz("コンセンサス")}>
            コンセンサス
          </button>

          <button style={buttonStyle} onClick={() => startQuiz("DNAR")}>
            DNAR
          </button>

          <button style={buttonStyle} onClick={() => startQuiz("症例")}>
            症例
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const rate = Math.round((score / questions.length) * 100);

    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1>結果</h1>
          <h2>{score} / {questions.length}</h2>
          <h2>正答率 {rate}%</h2>

          {wrongQuestions.length > 0 && (
            <button style={reviewButtonStyle} onClick={startWrongQuiz}>
              間違えた問題を復習
            </button>
          )}

          <button style={buttonStyle} onClick={() => setQuestions([])}>
            ホームへ戻る
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>プロトコールQuiz</h1>
        <h2>{selectedCategory}</h2>

        <h3>
          問題 {current + 1} / {questions.length}
        </h3>

        <h2>{q.question}</h2>

        {!showExplanation ? (
          q.type === "ox" ? (
            <div>
              <button style={buttonStyle} onClick={() => handleAnswer("○")}>
                ○
              </button>
              <button style={buttonStyle} onClick={() => handleAnswer("×")}>
                ×
              </button>
            </div>
          ) : (
            <div>
              {q.choices.map((choice) => (
                <div key={choice}>
                  <button style={buttonStyle} onClick={() => handleAnswer(choice)}>
                    {choice}
                  </button>
                </div>
              ))}
            </div>
          )
        ) : (
          <div>
            <h2 style={{ color: lastAnswerCorrect ? "#22c55e" : "#ef4444" }}>
              {lastAnswerCorrect ? "正解！" : "不正解"}
            </h2>

            <h3>正答：{q.answer}</h3>

            <p style={{ marginTop: "20px", fontSize: "18px" }}>
              {q.explanation}
            </p>

            <button style={buttonStyle} onClick={nextQuestion}>
              次へ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(135deg, #020617 0%, #0f172a 45%, #1e3a8a 100%)",
  color: "white",
  fontFamily: "sans-serif",
  padding: "20px",
};

const cardStyle = {
  background: "rgba(15, 23, 42, 0.86)",
  backdropFilter: "blur(12px)",
  padding: "40px",
  borderRadius: "28px",
  width: "100%",
  maxWidth: "850px",
  textAlign: "center",
  boxShadow: "0 0 50px rgba(59,130,246,0.28)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const titleStyle = {
  fontSize: "56px",
  fontWeight: "bold",
  marginBottom: "30px",
  letterSpacing: "2px",
  textShadow: "0 0 22px rgba(96,165,250,0.85)",
};

const buttonStyle = {
  margin: "10px",
  padding: "16px 24px",
  borderRadius: "16px",
  border: "none",
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 0 20px rgba(37,99,235,0.45)",
};

const reviewButtonStyle = {
  margin: "10px",
  padding: "16px 24px",
  borderRadius: "16px",
  border: "none",
  background: "linear-gradient(135deg,#dc2626,#991b1b)",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 0 20px rgba(220,38,38,0.45)",
};