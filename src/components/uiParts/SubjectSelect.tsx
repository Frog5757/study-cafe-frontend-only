/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IconButton from "./button/IconButton";
import { ReactNode } from "react";

interface SubjectSelectProps {
  buttons: {
    icon: ReactNode;
    label: string;
    bgColor: string;
    to: string;
  }[];
}

export default function SubjectSelect({ buttons }: SubjectSelectProps) {
  return (
    <div css={buttonsWrapper}>
      {buttons.map((btn, index) => (
        <IconButton
          key={index}
          icon={btn.icon}
          label={btn.label}
          bgColor={btn.bgColor}
          to={btn.to}
        />
      ))}
    </div>
  );
}

const buttonsWrapper = css`
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    gap: 40px; 
    justify-content: center; 
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
