/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./button/Button";

import { ReactNode } from "react";

interface UnitSelectProps {
  title: string;
  subTitle: string;
  buttons: { icon: ReactNode; title: string; to: string; bgColor: string }[];
}

export default function UnitSelect({ buttons }: UnitSelectProps) {
  return (
    <>
      <div css={buttonsWrapper}>
        {buttons.map((btn, index) => (
          <Button
            key={index}
            icon={btn.icon}
            title={btn.title}
            to={btn.to}
            bgColor={btn.bgColor}
          />
        ))}
      </div>
    </>
  );
}

const buttonsWrapper = css`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 50px;
`;
