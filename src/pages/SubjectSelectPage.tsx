/** @jsxImportSource @emotion/react */
import Topbar from "../components/layouts/Topbar";
import Header from "../components/uiParts/Header";
import BodyLayout from "../components/layouts/BodyLayout";
import SubjectSelect from "../components/uiParts/diagnosticTest/SelectSubject";
import { useNavigate } from "react-router-dom";

export default function SubjectSelectPage() {
  const navigate = useNavigate();
  const handleNavigate = (subject: string) => {
    navigate(`/diagnostic/unit/${subject}`);
  };
  return (
    <>
      <Topbar />
      <Header title="診断テスト" dec="苦手な単元の原因を診断できます" />
      <BodyLayout>
        <SubjectSelect onSelect={handleNavigate} />
      </BodyLayout>
    </>
  );
}
