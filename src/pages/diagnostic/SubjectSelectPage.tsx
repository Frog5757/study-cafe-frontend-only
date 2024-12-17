/** @jsxImportSource @emotion/react */
import Topbar from "../../components/layouts/Topbar";
import Header from "../../components/uiParts/Header";
import BodyLayout from "../../components/layouts/BodyLayout";
import SubjectSelect from "../../components/uiParts/SubjectSelect";
import MainTitle from "../../components/uiParts/title/MainTitle";
import { useNavigate } from "react-router-dom";

export default function SubjectSelectPage() {
  const navigate = useNavigate();
  const handleNavigate = (subject: string) => {
    navigate(`/diagnostic/unitselect/${subject}`);
  };
  return (
    <>
      <Topbar />
      <Header title="診断テスト" dec="苦手な単元の原因を診断できます" />
      <BodyLayout>
        <MainTitle title="診断したい科目を選択してください" />
        <SubjectSelect onSelect={handleNavigate} />
      </BodyLayout>
    </>
  );
}
