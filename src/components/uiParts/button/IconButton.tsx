/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  icon?: ReactNode;
  buttonType?: "submit";
  to?: string;
  onClick?: () => void;
  bgColor?: string;
  description?: string;
  label?: string;
}

export const IconButton: React.FC<ButtonProps> = ({
  icon,
  to,
  onClick,
  bgColor,
  description,
  label,
}) => {
  const buttonContent = (
    <>
      <div css={[buttonWrapper, { backgroundColor: bgColor }]}>
        {icon}
        <div css={iconName}>{label}</div>
      </div>
      {description && <div css={buttonDescription}>{description}</div>}
    </>
  );

  if (to) {
    return (
      <Link to={to} css={linkStyle}>
        {buttonContent}
      </Link>
    );
  }
  return <div onClick={onClick}>{buttonContent}</div>;
};

const buttonWrapper = css`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50px;
  transition: 0.5s;
  cursor: pointer;
  position: relative; /* アイコンとラベルの位置がずれないように */

  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;

const iconName = css`
  font-size: 20px;
  height: 50px;
  color: #ffffff;
  display: flex;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const buttonDescription = css`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  color: #555;
  max-width: 200px;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const linkStyle = css`
  text-decoration: none;
  color: inherit;
`;
