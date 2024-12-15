/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface UnitProps {
  items: string[];
  fontColor: string;
}
const Unit: React.FC<UnitProps> = ({ items, fontColor }) => {
  return (
    <>
      <ul css={itemsStyle}>
        {items.map((item, index) => (
          <li css={[itemStyle, { color: fontColor }]} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

const itemsStyle = css`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0;
`;
const itemStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
export default Unit;
