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
  @media (max-width: 768px) {
    font-size: 24px; 
    margin-top: 15px; 
    margin-bottom: 40px;  
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;
