/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MainTitle } from "../../components/uiParts/title/MainTitle";
import { Abc, Calculate } from "@mui/icons-material";
import { FC } from "react";
import { Unit } from "../../hooks/api/useUnits";
import { IconButton } from "../../components/uiParts/button/IconButton";

export const UnitMode: FC<{
  units: Unit[];
  onClickButton: (unitId: string) => void;
}> = ({ units, onClickButton }) => {
  const mainTitle = "単元を選択してください";
  const iconStyle = { fontSize: "90px", color: "#ffffff" };
  const getIconForSubject = (subjectId: string) => {
    switch (subjectId.toString()) {
      case "1":
        return <Calculate sx={iconStyle} />;
      case "2":
        return <Abc sx={iconStyle} />;
      default:
        return <Calculate />;
    }
  };
  return (
    <>
      <MainTitle title={mainTitle} />
      <div css={buttonsWrapper}>
        {units.map((unit) => {
          return (
            <IconButton
              key={unit.id}
              icon={getIconForSubject(unit.subjectId)}
              label={unit.name}
              bgColor={"#c1c1c1"}
              onClick={() => onClickButton(unit.id)}
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
  margin-bottom: 50px;
  @media (max-width: 768px) {
    gap: 40px;
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
