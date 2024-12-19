/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import React, { useState } from "react";

const signUpUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (err) {
    console.error("Registration error:", err);
    throw err;
  }
};

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

        <button css={signupButton} type="submit">
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

  &:hover {
    background-color: #898989;
  }
`;
export default SignUp;
