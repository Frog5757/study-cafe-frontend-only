/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Topbar from "../components/layouts/Topbar";
import Header from "../components/uiParts/Header";
import IconButton from "../components/uiParts/button/IconButton";
import MainTitle from "../components/uiParts/title/MainTitle";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import BodyLayout from "../components/layouts/BodyLayout";
export default function HomePage() {
  return (
    <>
      <Topbar />
      <Header
        title="Study Cafe"
        dec="自分だけの解決策、あなたと一緒に見つけます。"
      />
      <BodyLayout>
        <MainTitle title="さっそく診断テストを始めましょう" />
        <div css={buttonsWrapper}>
          <IconButton
            icon={
              <ManageSearchIcon sx={{ fontSize: "100px", color: "#ffffff" }} />
            }
            label="診断テスト"
            bgColor="#6d3b17b6"
            to="/diagnostic/subjectselect"
            description="苦手な単元の原因を診断できます。"
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
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;
