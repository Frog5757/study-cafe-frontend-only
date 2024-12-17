/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import Topbar from "../../components/layouts/Topbar";
import TestStart from "../../components/uiParts/TestStart";
const TestStartPage = () => {
  const { subject, unit } = useParams();
  const navigate = useNavigate();

  const startTest = () => {
    navigate(`/test/${unit}`);
  };

  let headerTitle = "";
  let testItems: string[] = [];
  let fontColor = "";

  if (subject === "math" || subject === "english") {
    if (subject === "math") {
      fontColor = "#548dda";
      if (unit === "seifu-no-imi") {
        headerTitle = "診断テスト(正の数と負の数)";
        testItems = ["数の大小", "数直線", "絶対値"];
      } else if (unit === "add-sub") {
        headerTitle = "診断テスト(加法・減法)";
        testItems = ["加法", "減法", "かっこがある式"];
      }
    } else if (subject === "english") {
      fontColor = "#da5454";
      if (unit === "bedoushi-kihon") {
        headerTitle = "診断テスト(be動詞の基本)";
        testItems = ["be動詞の意味", "be動詞の短縮形", "be動詞の使い分け"];
      } else if (unit === "bedoushi-kako-gimon") {
        headerTitle = "診断テスト(be動詞の否定文と疑問文)";
        testItems = ["be動詞の否定文","be動詞の疑問文"];
      }
    }
  }

  return (
    <>
      <Topbar />
      {unit ? (
        <TestStart
          headerTitle={headerTitle}
          testItems={testItems}
          fontColor={fontColor}
          onStartTest={startTest}
          mainTitle="次の項目を診断できます"
          startButtonTitle="診断テストを開始する"
        />
      ) : (
        <p>単元が選択されていません。</p>
      )}
    </>
  );
};

export default TestStartPage;
