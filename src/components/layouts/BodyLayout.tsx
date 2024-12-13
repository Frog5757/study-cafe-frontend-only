/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";

interface BodyLayoutProps {
  children: ReactNode;
}

export default function BodyLayout({ children }: BodyLayoutProps) {
  return (
    <div css={mainBody}>
      <div css={bodyContents}>{children}</div>
    </div>
  );
}

const mainBody = css`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const bodyContents = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
