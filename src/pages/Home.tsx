/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Topbar from "../components/layouts/Topbar";
import Header from "../components/uiParts/Header";
import Button from "../components/uiParts/button/Button";
import MainTitle from "../components/uiParts/MainTitle";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import QuizIcon from "@mui/icons-material/Quiz";
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
        <MainTitle title="どちらのテストを始めますか？" />
        <div css={buttonsWrapper}>
          <Button
            icon={<ManageSearchIcon />}
            title="診断テスト"
            to="/diagnostic/subject"
            description="苦手な単元の原因を診断できます。"
          />
          <Button
            icon={<QuizIcon />}
            title="確認テスト"
            to="/diagnostic"
            description="何がわかっていないのか、問題を通して確認できます。"
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
