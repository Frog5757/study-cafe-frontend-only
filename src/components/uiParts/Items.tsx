/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface UnitProps {
  items: string[];
  fontColor: string;
}

export const Items: React.FC<UnitProps> = ({ items, fontColor }) => {
  return (
    <ul css={itemsStyle}>
      {items.map((item, index) => (
        <li css={[itemStyle, { color: fontColor }]} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const itemsStyle = css`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0;
  flex-wrap: wrap; /* アイテムが画面に合わせて折り返されるように */

  @media (max-width: 768px) {
    gap: 20px; /* スマホ画面でのアイテム間のギャップを小さく */
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px; /* より小さい画面向けにギャップをさらに小さく */
  }
`;

const itemStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 24px; 
  }

  @media (max-width: 480px) {
    font-size: 20px; 
  }
`;


