/** @jsxImportSource @emotion/react */
import Topbar from "../../components/layouts/Topbar";
import Header from "../../components/uiParts/Header";
import BodyLayout from "../../components/layouts/BodyLayout";
import SubjectSelect from "../../components/uiParts/SubjectSelect";
import MainTitle from "../../components/uiParts/title/MainTitle";
import { Abc, SquareFoot } from "@mui/icons-material";

const subjectData = [
  {
    icon: <SquareFoot sx={{ fontSize: "100px", color: "#ffffff" }} />,
    label: "数学",
    bgColor: "#336dff",
    to: "/diagnostic/unitselect/math",
  },
  {
    icon: <Abc sx={{ fontSize: "100px", color: "#ffffff" }} />,
    label: "英語",
    bgColor: "#fa2ea7",
    to: "/diagnostic/unitselect/english",
  },
];

export default function SubjectSelectPage() {
  return (
    <>
      <Topbar />
      <Header title="診断テスト" dec="苦手な単元の原因を診断できます" />
      <BodyLayout>
        <MainTitle title="診断したい科目を選択してください" />
        <SubjectSelect buttons={subjectData} />
      </BodyLayout>
    </>
  );
}
