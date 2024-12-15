/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import Topbar from "../../components/layouts/Topbar";
import Unit from "../../components/uiParts/Unit";
import Header from "../../components/uiParts/Header";
import BodyLayout from "../../components/layouts/BodyLayout";
import DiagnosticTestStartButton from "../../components/uiParts/button/DiagnosticTestStartButton";
import MainTitle from "../../components/uiParts/title/MainTitle";

const DiagnosticTestStartPage = () => {
  const { subject, unit } = useParams();
  const navigate = useNavigate();
  const fontColor = "#548dda";
  const startTest = () => {
    navigate(`/test/${unit}`);
  };

  // 型安全にチェックするために、subject と unit の型を厳密に扱う
  let headerTitle = "";
  let testItems: string[] = [];

  if (subject === "math" || subject === "english") {
    if (subject === "math") {
      if (unit === "seifu-no-imi") {
        headerTitle = "正の数と負の数";
        testItems = ["数の大小", "数直線", "絶対値"];
      } else if (unit === "add-sub") {
        headerTitle = "加法・減法";
        testItems = ["加法", "減法", "かっこがある式"];
      } else if (unit === "mul-div") {
        headerTitle = "乗法・除法";
        testItems = [
          "一次関数",
          "グラフの変化",
          "関数の応用",
          "直線の傾き",
          "変化の割合",
        ];
      }
    } else if (subject === "english") {
      if (unit === "不定詞") {
        testItems = [
          "不定詞の名詞的用法",
          "不定詞の形容詞的用法",
          "不定詞の副詞的用法",
          "目的語としての不定詞",
          "不定詞の否定形（not to）",
        ];
      } else if (unit === "動名詞") {
        testItems = [
          "動名詞の基本",
          "動名詞を目的語に取る動詞",
          "動名詞と現在分詞の違い",
          "前置詞＋動名詞",
          "否定の動名詞（not ～ing）",
        ];
      } else if (unit === "時制") {
        testItems = [
          "現在形・過去形・未来形",
          "進行形の基本",
          "完了形の基本",
          "時制の一致",
          "未来の表現（be going to / will）",
        ];
      }
    }
  }

  return (
    <>
      <Topbar />
      {unit && (
        <>
          <Header title={`診断テスト(${headerTitle})`} dec="" />
          <BodyLayout>
            <MainTitle title="次の項目を診断できます" />
            <Unit items={testItems} fontColor={fontColor} />
            <div css={buttonWrapper}>
              <DiagnosticTestStartButton onClick={startTest} />
            </div>
          </BodyLayout>
        </>
      )}
      {!unit && <p>単元が選択されていません。</p>}
    </>
  );
};

const buttonWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default DiagnosticTestStartPage;
