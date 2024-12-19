/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"; // 認証状態を取得するカスタムフック

export default function Topbar() {
  const { user } = useAuth(); // ユーザーの認証状態を取得

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

          {user ? ( // ログイン状態の場合
            <>
              <Link to="/mypage" css={linkStyle}>
                <li css={topbarContent}>マイページ</li>
              </Link>
              <li
                css={topbarContent}
                onClick={() => {
                  /* ログアウト処理を追加 */
                }}
              >
                ログアウト
              </li>
            </>
          ) : (
            // 未ログイン状態の場合
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
  cursor: pointer;

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
