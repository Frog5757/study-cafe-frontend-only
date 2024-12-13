/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  icon: ReactNode;
  title: string;
  to?: string;
  onClick?: () => void;
  bgColor?: string;
  description?: string; // 説明文を追加
}

const Button: React.FC<ButtonProps> = ({
  icon,
  title,
  to,
  onClick,
  bgColor = "#6d3b17b6",
  description, // 説明文を受け取る
}) => {
  const buttonContent = (
    <>
      <div css={[buttonWrapper, { backgroundColor: bgColor }]}>
        {React.cloneElement(icon as React.ReactElement, {
          sx: { fontSize: "100px", color: "rgba(255, 255, 255, 0.994)" },
        })}
        <div css={iconName}>{title}</div>
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

const iconName = css`
  font-size: 25px;
  color: #ffffff;
`;

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

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const linkStyle = css`
  text-decoration: none;
  color: inherit;
`;

const buttonDescription = css`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #555;
  max-width: 200px;
`;

export default Button;
