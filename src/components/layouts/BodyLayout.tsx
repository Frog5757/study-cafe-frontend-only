/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";

interface BodyLayoutProps {
  children: ReactNode;
}

export const BodyLayout = ({ children }: BodyLayoutProps) => {
  return (
    <div css={mainBody}>
      <div css={bodyContents}>{children}</div>
    </div>
  );
};

const mainBody = css`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

const bodyContents = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  max-width: 100%;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    padding: 0 10px;
  }
`;
