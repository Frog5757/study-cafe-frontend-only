/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../../uiParts/button/Button";
import MainTitle from "../../uiParts/MainTitle";
import { Abc, SquareFoot } from "@mui/icons-material";

interface SubjectSelectProps {
  onSelect?: (subject: string) => void; // オプション: クリック時の動作
  links?: { math: string; english: string }; // 各ボタンのリンク先
}

export default function SubjectSelect({ onSelect }: SubjectSelectProps) {
  return (
    <>
      <MainTitle title="診断したい科目を選択してください" />
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
