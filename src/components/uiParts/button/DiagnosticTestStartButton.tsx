/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface DiagnosticTestStartButtonProps {
  onClick?: () => void;
}
const DiagnosticTestStartButton: React.FC<DiagnosticTestStartButtonProps> = ({
  onClick,
}) => {
  return (
    <div css={startButton} onClick={onClick}>
      診断テストを開始する
    </div>
  );
};

const startButton = css`
  font-size: 50px;
  height: 100px;
  width: 500px;
  background-color: #6a48dd;
  color: white;
  padding: 30px 30px;
  border-radius: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background-color: #4f35a5;
    transform: scale(0.95); 
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.15);
  }
`;
export default DiagnosticTestStartButton;
