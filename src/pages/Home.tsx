/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Topbar from "../components/layouts/Topbar";
import Header from "../components/uiParts/Header";
import Button from "../components/uiParts/button/Button";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import QuizIcon from "@mui/icons-material/Quiz";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MapIcon from "@mui/icons-material/Map";
import BodyLayout from "../components/layouts/BodyLayout";
export default function Home() {
  return (
    <>
      <Topbar />
      <Header
        title="Study Cafe"
        dec="自分だけの解決策、あなたと一緒に見つけます。"
      />
      <BodyLayout>
        <div css={buttonsWrapper}>
          <Button
            icon={<ManageSearchIcon />}
            title="診断テスト"
            to="/diagnosticmain"
            description="苦手な単元の原因を診断できます。"
          />
          <Button
            icon={<QuizIcon />}
            title="確認テスト"
            to="/diagnostic"
            description="何がわかっていないのか、問題を通して確認できます。"
          />
          <Button
            icon={<MenuBookIcon />}
            title="参考書"
            to="/diagnostic"
            description="参考書を確認するためのボタンです"
          />
          <Button
            icon={<MapIcon />}
            title="ロードマップ"
            to="/diagnostic"
            description="学習の進め方や、勉強法などを解説しています。"
          />
        </div>
      </BodyLayout>
    </>
  );
}
const buttonsWrapper = css`
  display: flex;
  justify-content: center; 
  gap: 80px; 
`;
