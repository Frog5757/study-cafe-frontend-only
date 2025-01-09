/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Topbar } from "../../components/layouts/Topbar";
import { Header } from "../../components/uiParts/Header";
import { BodyLayout } from "../../components/layouts/BodyLayout";
import { MainTitle } from "../../components/uiParts/title/MainTitle";
import { Subject, useSubjects } from "../../hooks/api/useSubjects";
import { FC, useState } from "react";
import { IconButton } from "../../components/uiParts/button/IconButton";
import { Abc } from "@mui/icons-material";
import { useUnits } from "../../hooks/api/useUnits";
import { useQuestions } from "../../hooks/api/useQuestion";
import { UnitMode } from "./UnitMode";
import { QuestionMode } from "./QuestionMode";

export const DiagnosticPage: FC = () => {
  const { isLoading: isLoadingSubjects, subjects } = useSubjects();
  const { isLoading: isLoadingUnits, units } = useUnits();
  const { isLoading: isLoadingQuestions, questions } = useQuestions();
  const isLoading = isLoadingSubjects || isLoadingUnits || isLoadingQuestions;
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
    null
  );
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<
    "subject" | "unit" | "questions"
  >("subject");

  const unitsPerSelectedSubject = units.filter(
    (unit) => unit.subjectId === selectedSubjectId
  );
  const quetionsPerSelectedUnit = questions.filter(
    (question) => question.unitId === selectedUnitId
  );

  return (
    <>
      <Topbar />
      <Header title="診断テスト" dec="苦手な単元の原因を診断できます" />
      <BodyLayout>
        {isLoading && <>取得中</>}
        {!isLoading && selectedMode === "subject" && (
          <SubjectMode
            subjects={subjects}
            onClickButton={(subjectId) => {
              setSelectedSubjectId(subjectId);
              setSelectedMode("unit");
            }}
          />
        )}
        {!isLoading && selectedMode === "unit" && (
          <UnitMode
            units={unitsPerSelectedSubject}
            onClickButton={(unitId) => {
              setSelectedUnitId(unitId);
              setSelectedMode("questions");
            }}
          />
        )}
        {!isLoading && selectedMode === "questions" && (
          <QuestionMode questions={quetionsPerSelectedUnit} />
        )}
      </BodyLayout>
    </>
  );
};

const SubjectMode: FC<{
  subjects: Subject[];
  onClickButton: (subjectId: string) => void;
}> = ({ subjects, onClickButton }) => {
  return (
    <>
      <MainTitle title="診断したい科目を選択してください" />
      <div css={buttonsWrapper}>
        {subjects.map((subject) => {
          return (
            <IconButton
              key={subject.id}
              icon={<Abc sx={{ fontSize: "100px", color: "#ffffff" }} />}
              label={subject.name}
              bgColor={"#6ec89c"}
              onClick={() => onClickButton(subject.id)}
            />
          );
        })}
      </div>
    </>
  );
};

// const UnitMode: FC<{
//     units:Unit[]
// }> = ({units}) => {
//   const mainTitle = "hoge";
//   const subTitile = "hoge";

//    const unitData = {
//       math: {
//         headerTitle: "診断テスト(数学)",
//         headerDesc: "苦手な単元の原因を診断できます",
//         mainTitle: "診断したい単元を選択してください",
//         subTitle: "正負の数",
//         buttons: [
//           {
//             icon: <Calculate sx={{ fontSize: "100px", color: "#ffffff" }} />,
//             label: "正の数と負の数",
//             to: "/diagnostic/teststart/math/seinosu-funosu",
//             bgColor: "#717d9d",
//           },
//           {
//             icon: <Calculate sx={{ fontSize: "100px", color: "#ffffff" }} />,
//             label: "加法・減法",
//             to: "/diagnostic/teststart/math/add-sub",
//             bgColor: "#717d9d",
//           },
//         ],
//       },
//       english: {
//         headerTitle: "診断テスト(英語)",
//         headerDesc: "苦手な単元の原因を診断できます",
//         mainTitle: "診断したい単元を選択してください",
//         subTitle: "be動詞",
//         buttons: [
//           {
//             icon: <AccessTime sx={{ fontSize: "100px", color: "#ffffff" }} />,
//             label: "be動詞の基本",
//             to: "/diagnostic/teststart/english/bedoushi-kihon",
//             bgColor: "#9d7180",
//           },
//           {
//             icon: <AccessTime sx={{ fontSize: "100px", color: "#ffffff" }} />,
//             label: "be動詞の否定文と疑問文",
//             to: "/diagnostic/teststart/english/bedoushi-kako-gimon",
//             bgColor: "#9d7180",
//           },
//         ],
//       },
//     };

//   return (
//     <>
//       <MainTitle title={mainTitle} />
//       <SubTitle title={subTitile} />
//            <div css={buttonsWrapper}>
//               {buttons.map((btn, index) => (
//                 <IconButton
//                   key={index}
//                   icon={btn.icon}
//                   label={btn.label}
//                   to={btn.to}
//                   bgColor={btn.bgColor}
//                 />
//               ))}
//             </div>
//       {/*<UnitSelect buttons={selectedUnit.buttons} /> */}
//     </>
//   );
// };

const buttonsWrapper = css`
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 40px;
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
