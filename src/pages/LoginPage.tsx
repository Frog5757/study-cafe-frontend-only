import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebase"; // Firebaseの認証設定をインポート
import { Topbar } from "../components/layouts/Topbar";
import { Header } from "../components/uiParts/Header";
import { BodyLayout } from "../components/layouts/BodyLayout";
import { Login } from "../components/auth/Login";
import { MyPage } from "./MyPage";
import { MainTitle } from "../components/uiParts/title/MainTitle";
export const LoginPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // Firebase User型を使用
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // ユーザーがログインしている場合はユーザー情報をセット
        navigate("/mypage"); // ログインしている場合、マイページに遷移
      } else {
        setUser(null); // ログインしていない場合、ユーザー情報をnullに設定
      }
    });

    return () => unsubscribe(); // コンポーネントがアンマウントされる際に監視を解除
  }, [navigate]);

  return (
    <div>
      <Topbar />
      <Header title="ログインページ" />
      <BodyLayout>
        <MainTitle title="ログイン" />
        {user ? <MyPage user={user} /> : <Login />}
      </BodyLayout>
    </div>
  );
};
