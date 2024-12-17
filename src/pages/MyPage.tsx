import React from "react";
import { User, signOut } from "firebase/auth";
import { auth } from "../config/firebase"; // Firebaseの設定ファイルをインポート

interface MyPageProps {
  user: User | null; // userはnullの場合も考慮して型を変更
}

const MyPage: React.FC<MyPageProps> = ({ user }) => {
  if (!user) {
    return <p>ログインしてください。</p>; // userがnullの場合の処理
  }

  const handleLogout = async () => {
    try {
      await signOut(auth); // FirebaseのsignOut関数を呼び出してログアウト
      alert("ログアウトしました");
    } catch (err) {
      console.error("ログアウトに失敗しました:", err);
      alert("ログアウトに失敗しました。");
    }
  };

  return (
    <div>
      <h1>マイページ</h1>
      <p>ようこそ、{user.email}さん！</p>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default MyPage;
