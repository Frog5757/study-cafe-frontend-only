/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Subject } from "../../hooks/api/useSubjects";
import { MainTitle } from "../../components/uiParts/title/MainTitle";
import { IconButton } from "../../components/uiParts/button/IconButton";
import { Abc, Calculate } from "@mui/icons-material";

export const SubjectMode: FC<{
  subjects: Subject[];
  onClickButton: (subjectId: string) => void;
}> = ({ subjects, onClickButton }) => {
  const iconStyle = { fontSize: "100px", color: "#ffffff" };
  const getIconForSubject = (subjectName: string) => {
    switch (subjectName) {
      case "数学":
        return <Calculate sx={iconStyle} />;
      case "英語":
        return <Abc sx={iconStyle} />;
      default:
        return <Calculate sx={iconStyle} />;
    }
  };
  const getIconForBgColor = (subjectName: string) => {
    switch (subjectName) {
      case "数学":
        return "#6ea1c8";
      case "英語":
        return "#c86eb9";
      default:
        return  "#000000";
    }
  };
  return (
    <>
      <MainTitle title="診断したい科目を選択してください" />
      <div css={buttonsWrapper}>
        {subjects.map((subject) => {
          return (
            <IconButton
              key={subject.id}
              icon={getIconForSubject(subject.name)}
              label={subject.name}
              bgColor={getIconForBgColor(subject.name)}
              onClick={() => onClickButton(subject.id)}
            />
          );
        })}
      </div>
    </>
  );
};
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
