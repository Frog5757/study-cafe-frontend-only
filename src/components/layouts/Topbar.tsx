/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../config/firebase"; // Firebase設定をインポート
import { signOut } from "firebase/auth";

export default function Topbar() {
  const { user } = useAuth();
  const navigate = useNavigate(); // ページ遷移のためのフック

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebaseのサインアウト関数
      navigate("/login"); // ログインページへリダイレクト
    } catch (err) {
      console.error("ログアウトに失敗しました:", err);
      alert("ログアウトに失敗しました。");
    }
  };

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
          <Link to="/diagnostic/subjectselect" css={linkStyle}>
            <li css={topbarContent}>診断テスト</li>
          </Link>

          {user ? (
            <>
              <Link to="/mypage" css={linkStyle}>
                <li css={topbarContent}>マイページ</li>
              </Link>
              <li css={topbarContent} onClick={handleLogout}>
                ログアウト
              </li>
            </>
          ) : (
            <>
              <Link to="/login" css={linkStyle}>
                <li css={topbarContent}>ログイン</li>
              </Link>
              <Link to="/signup" css={linkStyle}>
                <li css={topbarContent}>新規登録</li>
              </Link>
            </>
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const topbarLeft = css`
  flex: 4;
  display: flex;
  justify-content: flex-start; /* 左に寄せる */

  @media (max-width: 768px) {
    flex: none;
    text-align: center;
    margin: 10px 0;
    width: 100%; /* 幅を100%にしてセンタリングを安定させる */
  }
`;

const topbarRight = css`
  flex: 8;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%; 

  }
`;

const topbarContents = css`
  list-style-type: none;
  display: flex;
  color: rgb(111, 111, 111);
  margin: 0;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding-inline-start: 0;
    padding: 0px;
  }
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
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    height: 50px;
    width: 120px;
    font-size: 14px;
    margin: 5px;
  }
`;

const logo = css`
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 5px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding:10px 10px;
  }
`;

const linkStyle = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
