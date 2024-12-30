/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const isFormValid = email.length > 0 && password.length > 0;

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      setError("メールアドレスまたはパスワードが間違っています。");
    }
  };

  return (
    <div>
      <div css={loginWrapper}>
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
          css={[loginButton, isFormValid && loginButtonActive]}
          onClick={handleLogin}
          disabled={!isFormValid}
        >
          ログイン
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

const subTitle = css`
  color: #3a3a3a;
  font-weight: bold;
`;
const loginWrapper = css`
  text-align: center;
`;
const inputWrapper = css`
  width: 300px;
  height: 34px;
  margin: 10px 0px;
`;
const loginButton = css`
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
const loginButtonActive = css`
  background-color: #56bbc7; /* フォームが入力されている場合は緑色に */
  &:hover {
    background-color: #4dafba;
  }
`;
export default Login;
