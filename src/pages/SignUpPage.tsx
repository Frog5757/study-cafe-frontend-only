import React from "react";
import SignUp from "../components/auth/SignUp";
import Topbar from "../components/layouts/Topbar";
import BodyLayout from "../components/layouts/BodyLayout";
import Header from "../components/uiParts/Header";
import MainTitle from "../components/uiParts/title/MainTitle";
const SignUpPage: React.FC = () => {
  return (
    <div>
      <Topbar />
      <Header title="新規登録ページ" />
      <BodyLayout>
        <MainTitle title="新規登録"/>
        <SignUp />
      </BodyLayout>
    </div>
  );
};

export default SignUpPage;
