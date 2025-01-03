/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Items} from "./Items";
import {Header} from "./Header";
import {BodyLayout} from "../layouts/BodyLayout";
import {TestStartButton} from "./button/TestStartButton";
import {MainTitle} from "./title/MainTitle";

interface TestStartProps {
  headerTitle: string;
  mainTitle: string;
  startButtonTitle: string;
  testItems: string[];
  fontColor: string;
  onStartTest: () => void;
}

export const TestStart: React.FC<TestStartProps> = ({
  headerTitle,
  mainTitle,
  startButtonTitle,
  testItems,
  fontColor,
  onStartTest,
}) => {
  return (
    <>
      <Header title={headerTitle} dec="" />
      <BodyLayout>
        <MainTitle title={mainTitle} />
        <Items items={testItems} fontColor={fontColor} />
        <div css={buttonWrapper}>
          <TestStartButton onClick={onStartTest} title={startButtonTitle} />
        </div>
      </BodyLayout>
    </>
  );
};

const buttonWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

