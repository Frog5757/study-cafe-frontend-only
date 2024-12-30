/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface TestStartButtonProps {
  title: string;
  onClick?: () => void;
}

const TestStartButton: React.FC<TestStartButtonProps> = ({
  onClick,
  title,
}) => {
  return (
    <div css={startButton} onClick={onClick}>
      {title}
    </div>
  );
};

const startButton = css`
  font-size: 50px;
  height: 100px;
  width: 500px;
  background-color: #3ea419;
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
    background-color: #336b1f;
    transform: scale(0.95);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.15);
  }

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    font-size: 40px;
    height: 80px;
    width: 400px;
    padding: 20px 20px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    height: 60px;
    width: 300px;
    padding: 15px 15px;
  }
`;

export default TestStartButton;
