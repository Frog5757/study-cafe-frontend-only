/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { User } from "firebase/auth";
import axios from "axios"; // AxiosをインポートしてHTTPリクエストを送る
import Topbar from "../components/layouts/Topbar";
import Header from "../components/uiParts/Header";
import BodyLayout from "../components/layouts/BodyLayout";
import MainTitle from "../components/uiParts/title/MainTitle";

interface MyPageProps {
  user: User | null; // userはnullの場合も考慮して型を変更
}

interface Result {
  _id: string; // MongoDBの_idを追加
  subject: string;
  unit: string;
  result: string;
  timestamp: string;
}

const MyPage: React.FC<MyPageProps> = ({ user }) => {
  const [results, setResults] = useState<Result[] | null>(null); // 結果を配列で管理
  const [loading, setLoading] = useState<boolean>(true); // ローディング状態を管理

  // 診断結果を取得する関数
  const getResultFromDatabase = async () => {
    if (!user) return;

    try {
      const token = await user.getIdToken();

      const response = await axios.get(
        "http://localhost:4000/api/results/get",
        {
          headers: {
            Authorization: `Bearer ${token}`, // AuthorizationヘッダーにIDトークンを追加
          },
        }
      );

      setResults(response.data || []); // データがない場合は空配列を設定
      setLoading(false); // ローディング状態を解除
    } catch (error) {
      console.error("診断結果の取得エラー:", error);
      setLoading(false); // ローディング状態を解除
    }
  };

  // useEffectで最初にデータを取得
  useEffect(() => {
    if (user) {
      getResultFromDatabase(); // ユーザーがログインしている場合に診断結果を取得
    }
  }, [user]);

  // 診断結果を削除する関数
  const handleDelete = async (id: string) => {
    // idを引数として受け取る
    if (!user) return;

    try {
      const token = await user.getIdToken();

      // 削除リクエストを送信
      await axios.delete("http://localhost:4000/api/results/delete", {
        params: { id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // 削除操作後に更新された結果のみ反映
      setResults((prevResults) => {
        if (!prevResults) return [];

        // 削除した結果を除外する
        const updatedResults = prevResults.filter(
          (result) => result._id !== id // _idでフィルタリングして削除
        );

        return updatedResults; // 状態を更新する
      });

    }catch (error) {
      if (axios.isAxiosError(error)) {
        // AxiosError の場合
        console.error(
          "診断結果削除エラー:",
          error.response?.data || error.message
        );
        alert("削除に失敗しました: " + (error.response?.data || error.message));
      } else if (error instanceof Error) {
        // 一般的な Error の場合
        console.error("診断結果削除エラー:", error.message);
        alert("削除に失敗しました: " + error.message);
      } else {
        // 型不明な場合
        console.error("予期しないエラー:", error);
        alert("予期しないエラーが発生しました");
      }
    }
  }

  if (!user) {
    return <p>ログインしてください。</p>; // userがnullの場合の処理
  }

  return (
    <div>
      <Topbar />
      <Header title="マイページ" dec="" />
      <BodyLayout>
        <MainTitle title="診断結果" />
        {loading ? (
          <p>診断結果を取得中...</p>
        ) : results && results.length > 0 ? (
          <div>
            {results.map((result) => (
              <div key={result._id} css={resultLists}>
                <div css={resultSubAndUni}>
                  {result.subject} - {result.unit}
                </div>
                <p>{result.result}</p>
                <p>診断日時: {new Date(result.timestamp).toLocaleString()}</p>
                <button
                  css={deleteButton}
                  onClick={() => handleDelete(result._id)}
                >
                  削除
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>診断結果が見つかりませんでした。</p>
        )}
        {/* <button css={logoutButton} onClick={handleLogout}>
          ログアウト
        </button> */}
      </BodyLayout>
    </div>
  );
};

const resultLists = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 5px 16px -12px #39608d;
  border-radius: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 50px 50px;
  cursor: pointer;
  min-height: 100px;
`;
const resultSubAndUni = css`
  font-size: 20px;
  color: #848484;
  margin-bottom: 10px;
`;
const deleteButton = css`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  width: 80px;
  background-color: #b0b0b0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6f6f6f;
  }
`;
export default MyPage;
