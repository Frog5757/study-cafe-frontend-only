/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./button/Button";
import { Abc, SquareFoot } from "@mui/icons-material";

interface SubjectSelectProps {
  onSelect?: (subject: string) => void;
  links?: { math: string; english: string };
}

export default function SubjectSelect({ onSelect }: SubjectSelectProps) {
  return (
    <>
      <div css={buttonsWrapper}>
        <Button
          icon={<SquareFoot />}
          title="数学"
          bgColor="#336dff"
          onClick={onSelect ? () => onSelect("math") : undefined}
        />
        <Button
          icon={<Abc />}
          title="英語"
          bgColor="#fa2ea7"
          onClick={onSelect ? () => onSelect("english") : undefined}
        />
      </div>
    </>
  );
}

const buttonsWrapper = css`
  display: flex;
  justify-content: center;
  gap: 80px;
`;
