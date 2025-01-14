/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useState } from "react";
import { Question } from "../../hooks/api/useQuestion";
import { AnswerButton } from "../../components/uiParts/button/AnswerButton";

export const QuestionMode: FC<{
  questions: Question[];
}> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    {
      questionId: string;
      yesOrNo: boolean;
    }[]
  >([]);
  const [isFinished, setIsFinished] = useState(false);
  const handleAnswer = (arg: { questionId: string; yesOrNo: boolean }) => {
    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: arg.questionId,
        yesOrNo: arg.yesOrNo,
      },
    ]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };
  const currentQuestion = questions[currentIndex];
  if (isFinished) {
    const noAnswers = userAnswers
      .filter((answer) => !answer.yesOrNo)
      .map((answer) => {
        const question = questions.find((q) => q.id === answer.questionId)
        return question?.noMessage;
      })
    return (
      <div>
        <h1>Noで回答した質問:</h1>
        <ul>
          {noAnswers.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
        <div>診断結果を保存する</div>
      </div>
    );
  }
  return (
    <>
      <div css={testWrapper}>
        <div css={questionContainer}>
          <div css={questionHeader}>
            問題 {currentQuestion.order} / {questions.length}
          </div>
          {questions.length > 0 && (
            <p css={questionDec}>{currentQuestion.description}</p>
          )}
          <div css={buttonsWrapper}>
            <AnswerButton
              label="Yes"
              onClick={() =>
                handleAnswer({
                  questionId: currentQuestion.id,
                  yesOrNo: true,
                })
              }
            />
            <AnswerButton
              label="No"
              onClick={() =>
                handleAnswer({
                  questionId: currentQuestion.id,
                  yesOrNo: false,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

const buttonsWrapper = css`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    gap: 40px;
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
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
