/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Result } from "./Result";
import { AnswerButton } from "./button/AnswerButton";

interface Question {
  id: number;
  question: string;
  resultMessage: string;
}

interface QuestionProps {
  questions: Question[];
  resultMessage?: string;
}

export const Question: React.FC<QuestionProps> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    setUserAnswers((prev) => [...prev, answer]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <>
        <Result userAnswers={userAnswers} questions={questions} />
      </>
    );
  }

  const currentQuestion = questions[currentIndex];
  return (
    <div css={testWrapper}>
      <div css={questionContainer}>
        <div css={questionHeader}>
          問題 {currentIndex + 1} / {questions.length}
        </div>
        <p css={questionDec}>{currentQuestion.question}</p>
        <div css={buttonsWrapper}>
          <AnswerButton label="Yes" onClick={() => handleAnswer("Yes")} />
          <AnswerButton label="No" onClick={() => handleAnswer("No")} />
        </div>
      </div>
    </div>
  );
};

const testWrapper = css`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const questionHeader = css`
  font-size: 20px;
  color: #636363;
`;

const questionDec = css`
  font-size: 40px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 30px; /* タブレット画面でフォントサイズを小さく */
  }

  @media (max-width: 480px) {
    font-size: 24px; /* スマホ画面ではさらに小さく */
  }
`;

const questionContainer = css`
  color: #878787;
  padding: 20px;
  margin-top: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1000px;
  width: 800px;
  height: 300px;

  @media (max-width: 1024px) {
    width: 600px; /* タブレット向けに幅を調整 */
  }

  @media (max-width: 768px) {
    width: 90%; /* スマホ向けに幅を調整 */
    height: auto; /* 高さは自動調整 */
  }

  @media (max-width: 480px) {
    padding: 15px; /* スマホで余白を少し小さく */
  }
`;

const buttonsWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;
