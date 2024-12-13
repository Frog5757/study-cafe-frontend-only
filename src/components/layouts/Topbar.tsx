/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default function Topbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Firebaseのログイン状態を監視
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // ユーザー状態をセット
    });
    return () => unsubscribe();
  }, []);

  return (
    <div css={topbarContainer}>
      <div css={topbarLeft}>
        <Link to="/" css={linkStyle}>
          <div css={logo}>Study Cafe</div>
        </Link>
      </div>
      <div css={topbarRight}>
        <ul css={topbarContents}>
          <Link to="/" css={linkStyle}>
            <li css={topbarContent}>ホーム</li>
          </Link>
          <Link to="/diagnostic/subject" css={linkStyle}>
            <li css={topbarContent}>診断テスト</li>
          </Link>
          <Link to="/login" css={linkStyle}>
            <li css={topbarContent}>確認テスト</li>
          </Link>

          {/* ログイン状態に応じて「マイページ」または「ログイン」を表示 */}
          {user ? (
            <Link to="/mypage" css={linkStyle}>
              <li css={topbarContent}>マイページ</li>
            </Link>
          ) : (
            <Link to="/login" css={linkStyle}>
              <li css={topbarContent}>ログイン</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

const topbarContainer = css`
  background-color: hsl(0, 0%, 100%);
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const topbarLeft = css`
  flex: 4;
`;

const topbarRight = css`
  flex: 8;
  display: flex;
  justify-content: flex-end;
`;

const topbarContents = css`
  list-style-type: none;
  display: flex;
  color: rgb(111, 111, 111);
  margin: 0;
`;

const topbarContent = css`
  margin-right: 40px;
  display: flex;
  align-items: center;
  height: 100px;
  width: 150px;
  justify-content: center;
  padding: 0 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const logo = css`
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 5px;
  margin-left: 40px;
`;

const linkStyle = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
