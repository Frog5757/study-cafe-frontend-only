import React, { useState } from "react";
import SignUp from "../components/auth/SignUp";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await SignUp(email, password);
      // 成功した場合、リダイレクトや次のアクション
    } catch (error: unknown) {
      console.log(error)
    }
  };

  return (
    <div>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default SignUpPage;
