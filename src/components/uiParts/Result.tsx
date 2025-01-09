/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { MainTitle } from "./title/MainTitle";
import { BodyLayout } from "../layouts/BodyLayout";
import axios from "axios";

interface ResultProps {
  userAnswers: string[];
  questions?: { id: number; question: string; resultMessage: string }[];
}

export const Result: React.FC<ResultProps> = ({ userAnswers, questions }) => {
  const { subject, unit } = useParams();
  const navigate = useNavigate(); 
  const convertSubject = (subject: string | undefined): string => {
    switch (subject) {
      case "math":
        return "数学";
      case "english":
        return "英語";
      default:
        return "未定義";
    }
  };
  const convertUnit = (unit: string | undefined): string => {
    switch (unit) {
      case "seinosu-funosu":
        return "正負の数";
      case "add-sub":
        return "加法・減法";
      case "bedoushi-kihon":
        return "be動詞の基本";
      case "bedoushi-kako-gimon":
        return "be動詞の否定文と疑問文";
      default:
        return "未定義";
    }
  };

  const determineResult = () => {
    const results = questions
      .map((q, index) => (userAnswers[index] === "No" ? q.resultMessage : null))
      .filter((message) => message !== null);
    if (results.length === 0) {
      return `あなたは完璧です！`;
    }
    return results.join("\n");
  };

  const saveResultToDatabase = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert(
        "ログインしていません。診断結果を保存するにはログインしてください。"
      );
      return;
    }
    const convertedSubject = convertSubject(subject);
    const convertedUnit = convertUnit(unit);
    const resultData = {
      uid: user.uid,
      email: user.email,
      subject: convertedSubject,
      unit: convertedUnit,
      result: determineResult(),
      timestamp: new Date(),
    };

    try {
      const idToken = await user.getIdToken();
      // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const LocalApiUrl = import.meta.env.VITE_API_URL;
      console.log(import.meta);
      if (!LocalApiUrl) {
        alert("APIのURLが設定されていません。");
        return;
      }

      await axios.post(`${LocalApiUrl}/api/results/save`, resultData, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      navigate("/mypage"); // マイページにリダイレクト
    } catch (error) {
      console.error("診断結果の保存中にエラーが発生しました:", error);
      alert("診断結果の保存に失敗しました。");
    }
  };

  return (
    <>
      <BodyLayout>
        <MainTitle title="診断結果" />
        <div css={resultwrapper}>
          <div css={resultContainer}>
            <div>{userAnswers}</div>
            <p css={resultContent}>{determineResult()}</p>
            <p css={saveResult} onClick={saveResultToDatabase}>
              この診断結果を保存する
            </p>
            <Link
              to={`/diagnostic/teststart/${subject}/${unit}`}
              css={linkStyle}
            >
              <p>もう一度診断を受ける</p>
            </Link>
          </div>
        </div>
      </BodyLayout>
    </>
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
  background-color: #fff7f2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1000px;
  width: 800px;
  min-height: 300px;
`;

const resultContent = css`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 40px;
  line-height: 2;
  letter-spacing: 5px;
  white-space: pre-line;
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

