/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface AnswerButtonProps {
  label: string;
  onClick: () => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} css={buttonStyle}>
      {label}
    </button>
  );
};

const buttonStyle = css`
  background: #925e4ede;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
  transition: background 0.3s;
  height: 70px;
  width: 200px;

  &:hover {
    background: #674338de;
  }
`;

export default AnswerButton;
