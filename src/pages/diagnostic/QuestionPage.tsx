/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import Topbar from "../../components/layouts/Topbar";
import Header from "../../components/uiParts/Header";
import Question from "../../components/uiParts/Question";
import {
  seifunokazuQuestions,
  addSubQuestions,
  bedoushiNoKihonQuestion,
  bedoushiNoKakoGimonQuestion
} from "../../data/questions";
const QuestionPage = () => {
  const { unit } = useParams();
  return (
    <>
      <Topbar />
      {unit === "seinosu-funosu" && (
        <>
          <Header title="診断テスト(正の数と負の数)" dec="" />
          <Question questions={seifunokazuQuestions} />
        </>
      )}
      {unit === "add-sub" && (
        <>
          <Header title="診断テスト(加法・減法)" dec="" />
          <Question questions={addSubQuestions}  />
        </>
      )}
      {unit === "bedoushi-kihon" && (
        <>
          <Header title="診断テスト(be動詞の基本)" dec="" />
          <Question questions={bedoushiNoKihonQuestion}  />
        </>
      )}
      {unit === "bedoushi-kako-gimon" && (
        <>
          <Header title="診断テスト(be動詞の否定文と疑問文)" dec="" />
          <Question questions={bedoushiNoKakoGimonQuestion}  />
        </>
      )}
    </>
  );
};

export default QuestionPage;
