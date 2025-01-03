/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconButton } from "./button/IconButton";
import { ReactNode } from "react";
interface UnitSelectProps {
  buttons: { icon: ReactNode; label: string; to: string; bgColor: string }[];
}
export const UnitSelect = ({ buttons }: UnitSelectProps) => {
  return (
    <>
      <div css={buttonsWrapper}>
        {buttons.map((btn, index) => (
          <IconButton
            key={index}
            icon={btn.icon}
            label={btn.label}
            to={btn.to}
            bgColor={btn.bgColor}
          />
        ))}
      </div>
    </>
  );
};
const buttonsWrapper = css`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    gap: 40px;
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
