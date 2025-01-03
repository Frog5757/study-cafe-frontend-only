/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface SubTitleProps {
  title: string;
}

export const SubTitle = ({ title }: SubTitleProps) => {
  return <div css={subTitle}>{title}</div>;
};

const subTitle = css`
  color: #848484;
  font-size: 30px;
  margin-bottom: 20px;
  letter-spacing: 10px;
`;
