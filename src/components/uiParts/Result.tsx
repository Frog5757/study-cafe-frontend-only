/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface ResultProps {
  // ユーザーが回答した Yes または No のリスト
  userAnswers: string[];
  // 質問オブジェクト
  questions: { id: number; question: string; resultMessage: string }[]; // 質問配列
}

const Result: React.FC<ResultProps> = ({ userAnswers, questions }) => {
  const { subject, unit } = useParams();
  const determineResult = () => {
    const results = questions
      .map((q, index) => (userAnswers[index] === "No" ? q.resultMessage : null))
      .filter((message) => message !== null);
    if (results.length === 0) {
      return `あなたは完璧です！`;
    }
    return results.join("\n");
  };
  return (
    <div css={resultwrapper}>
      <div css={resultContainer}>
        <h2 css={resultTitle}>診断結果</h2>
        <p css={resultContent}>{determineResult()}</p>
        <p css={saveResult}>この診断結果を保存する</p>
        <Link to={`/diagnostic/teststart/${subject}/${unit}`} css={linkStyle}>
          <p>もう一度診断を受ける</p>
        </Link>
      </div>
    </div>
  );
};

const resultwrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  justify-content: center;
  margin: 0;
`;
const resultContainer = css`
  color: #878787;
  background-color: #fff0ee;
  padding: 20px;
  margin-top: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1000px;
  width: 800px;
  min-height: 300px;
  overflow: auto; /* 内容が増えたらスクロール可能にする場合 */
`;

const resultTitle = css`
  font-size: 25px;
  color: #ffffff;
  background-color: #7e0038;
  letter-spacing: 5px;
`;
const resultContent = css`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 40px;
  line-height: 2;
  letter-spacing: 5px;
  white-space: pre-line; /* 改行を反映 */
  color: #2d2d2d;
`;

const linkStyle = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    color: #4a4a4a;
  }
`;
const saveResult = css`
  color: inherit;
  cursor: pointer;
  &:hover {
    color: #4a4a4a;
  }
`;
export default Result;
