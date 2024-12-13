/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Topbar from "../../components/layouts/Topbar";
import Button from "../../components/uiParts/button/Button";
import Header from "../../components/uiParts/Header";
import BodyLayout from "../../components/layouts/BodyLayout";
import MainTitle from "../../components/uiParts/MainTitle";
import { Abc, SquareFoot } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const handleNavigate = (subject: string) => {
    navigate(`/unitselectpage/${subject}`);
  };
  return (
    <>
      <Topbar />
      <Header title={"診断テスト"} dec="苦手な単元の原因を診断できます" />
      <BodyLayout>
        <MainTitle title="診断したい科目を選択してください" />
        <div css={buttonsWrapper}>
          <div css={buttonWrapper}>
            <Button
              icon={<SquareFoot />}
              title="数学"
              bgColor="#336dff"
              onClick={() => handleNavigate("math")}
            />
          </div>
          <div css={buttonWrapper}>
            <Button
              icon={<Abc />}
              title="英語"
              bgColor="#fa2ea7"
              onClick={() => handleNavigate("english")}
            />
          </div>
        </div>
      </BodyLayout>
    </>
  );
}

const buttonWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const buttonsWrapper = css`
  display: flex;
  justify-content: center; /* 横並びアイテムの中央揃え */
  gap: 80px; /* ボタン間のスペース */
`;
