import React, { useEffect, useState } from "react";
import { User } from "firebase/auth";
import axios from "axios";
import Topbar from "../components/layouts/Topbar";
import Header from "../components/uiParts/Header";
import BodyLayout from "../components/layouts/BodyLayout";
import MainTitle from "../components/uiParts/title/MainTitle";

interface MyPageProps {
  user: User | null;
}

interface Result {
  _id: string;
  subject: string;
  unit: string;
  result: string;
  timestamp: string;
}

const MyPage: React.FC<MyPageProps> = ({ user }) => {
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Vercelの環境変数からバックエンドのURLを取得
  const API_URL = import.meta.env.VITE_API_URL;

  // 診断結果を取得する関数
  const getResultFromDatabase = async () => {
    if (!user || !API_URL) return;

    try {
      const token = await user.getIdToken();

      const response = await axios.get(`${API_URL}/api/results/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResults(response.data || []);
      setLoading(false);
    } catch (error) {
      console.error("診断結果の取得エラー:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getResultFromDatabase();
    }
  }, [user]);

  const handleDelete = async (id: string) => {
    if (!user || !API_URL) return;

    try {
      const token = await user.getIdToken();

      await axios.delete(`${API_URL}/api/results/delete`, {
        params: { id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResults((prevResults) => {
        if (!prevResults) return [];

        return prevResults.filter((result) => result._id !== id);
      });
    } catch (error) {
      console.error("診断結果削除エラー:", error);
      alert("削除に失敗しました");
    }
  };

  if (!user) {
    return <p>ログインしてください。</p>;
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
              <div key={result._id}>
                <div>
                  {result.subject} - {result.unit}
                </div>
                <p>{result.result}</p>
                <p>診断日時: {new Date(result.timestamp).toLocaleString()}</p>
                <button onClick={() => handleDelete(result._id)}>削除</button>
              </div>
            ))}
          </div>
        ) : (
          <p>診断結果が見つかりませんでした。</p>
        )}
      </BodyLayout>
    </div>
  );
};

export default MyPage;
