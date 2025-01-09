/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import React, { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const signUpUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await axios.post(`${API_URL}/api/signup`, {
      uid: user.uid,
      email: user.email,
    });
    console.log(user.uid);
  } catch (err) {
    console.error("Registration error:", err);
    throw err;
  }
};

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isFormValid = email.length > 0 && password.length > 0;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUpUser(email, password);
      alert("登録成功！");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div css={signupWrapper}>
        <div css={subTitle}>メールアドレス</div>
        <input
          css={inputWrapper}
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div css={subTitle}>パスワード</div>
        <input
          css={inputWrapper}
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          css={[signupButton, isFormValid && signUpButtonActive]}
          type="submit"
          disabled={!isFormValid}
        >
          登録
        </button>
      </div>
    </form>
  );
};
const inputWrapper = css`
  width: 300px;
  height: 34px;
  margin: 10px 0px;
`;
const signupWrapper = css`
  text-align: center;
`;
const subTitle = css`
  color: #3a3a3a;
  font-weight: bold;
`;
const signupButton = css`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  width: 200px;
  background-color: #b0b0b0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #d3d3d3; /* ボタンが無効な場合は色を変更 */
    cursor: not-allowed; /* マウスカーソルを変更 */
  }
`;
const signUpButtonActive = css`
  background-color: #4caf50; /* フォームが入力されている場合は緑色に */
  &:hover {
    background-color: #45a049;
  }
`;
