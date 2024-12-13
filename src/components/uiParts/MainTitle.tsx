/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface MainTitleProps {
  title: string;
}

export default function MainTitle({ title }: MainTitleProps) {
  return <div css={mainTitle}>{title}</div>;
}

const mainTitle = css`
  color: #848484;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: center;
`;
