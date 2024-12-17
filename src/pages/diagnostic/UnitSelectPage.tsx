/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import Topbar from "../../components/layouts/Topbar";
import Header from "../../components/uiParts/Header";
import BodyLayout from "../../components/layouts/BodyLayout";
import UnitSelect from "../../components/uiParts/UnitSelect";
import MainTitle from "../../components/uiParts/title/MainTitle";
import SubTitle from "../../components/uiParts/title/SubTitle";
import { AccessTime, Calculate,} from "@mui/icons-material";

const UnitSelectPage = () => {
  const { subject } = useParams();
  const subjectData = {
    math: {
      headerTitle: "診断テスト(数学)",
      headerDesc: "苦手な単元の原因を診断できます",
      mainTitle: "診断したい単元を選んでください",
      subTitle: "正負の数",
      buttons: [
        {
          icon: <Calculate />,
          title: "正の数と負の数",
          to: "/diagnostic/teststart/math/seifu-no-imi",
          bgColor: "#717d9d",
        },
        {
          icon: <Calculate />,
          title: "加法・減法",
          to: "/diagnostic/teststart/math/add-sub",
          bgColor: "#717d9d",
        },
      ],
    },
    english: {
      headerTitle: "診断テスト(英語)",
      headerDesc: "苦手な単元の原因を診断できます",
      mainTitle: "診断したい単元を選択してください",
      subTitle: "be動詞",
      buttons: [
        {
          icon: <AccessTime />,
          title: "be動詞の基本",
          to: "/diagnostic/teststart/english/bedoushi-kihon",
          bgColor: "#9d7180",
        },
        {
          icon: <AccessTime />,
          title: "be動詞の否定文と疑問文",
          to: "/diagnostic/teststart/english/bedoushi-kako-gimon",
          bgColor: "#9d7180",
        },
      ],
    },
  };
  const selectedSubject = subjectData[subject as keyof typeof subjectData];
  return (
    <>
      <Topbar />
      <Header
        title={selectedSubject.headerTitle}
        dec={selectedSubject.headerDesc}
      />
      <BodyLayout>
        <MainTitle title={selectedSubject.mainTitle} />
        <SubTitle title={selectedSubject.subTitle} />
        <UnitSelect
          title={selectedSubject.mainTitle}
          subTitle={selectedSubject.subTitle}
          buttons={selectedSubject.buttons}
        />
      </BodyLayout>
    </>
  );
};

export default UnitSelectPage;
