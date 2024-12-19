/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface HeaderProps {
  title: string;
  dec?: string;
}
const Header: React.FC<HeaderProps> = ({ title, dec }) => {
  return (
    <>
      <div css={mainHeader}>
        <div css={headerTitle}>{title}</div>
        <div css={headerDec}>{dec}</div>
      </div>
    </>
  );
};
const mainHeader = css`
  height: 250px;
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const headerDec = css`
  color: #9f9f9f;
  padding-top: 10px;
`;

const headerTitle = css`
  font-size: 80px;
  letter-spacing: 10px;
  color: #7c7c7c;
`;
export default Header;
