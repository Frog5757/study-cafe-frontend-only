// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

// import { Topbar } from "../../components/layouts/Topbar";
// import { Header } from "../../components/uiParts/Header";
// import { BodyLayout } from "../../components/layouts/BodyLayout";
// import { SubjectSelect } from "../../components/uiParts/SubjectSelect";
// import { MainTitle } from "../../components/uiParts/title/MainTitle";
// import { Abc, SquareFoot } from "@mui/icons-material";
// import { Subject, useSubjects } from "../../hooks/api/useSubjects";
// import { FC } from "react";
// import { IconButton } from "../../components/uiParts/button/IconButton";

// // const subjectData = [
// //   {
// //     icon: <SquareFoot sx={{ fontSize: "100px", color: "#ffffff" }} />,
// //     label: "数学",
// //     bgColor: "#336dff",
// //     to: "/diagnostic/unitselect/math",
// //   },
// //   {
// //     icon: <Abc sx={{ fontSize: "100px", color: "#ffffff" }} />,
// //     label: "英語",
// //     bgColor: "#fa2ea7",
// //     to: "/diagnostic/unitselect/english",
// //   },
// // ];

// export const SubjectSelectPage = () => {
//   const { isLoading, subjects } = useSubjects();
//   console.log(subjects);
//   if (isLoading) {
//     return <>取得中</>;
//   }
//   return (
//     <>
//       <Topbar />
//       <Header title="診断テスト" dec="苦手な単元の原因を診断できます" />
//       <BodyLayout>
//         <MainTitle title="診断したい科目を選択してください" />
//         {/* <SubjectSelect buttons={subjectData} /> */}
//         <SubjectMode subjects={subjects} />
//       </BodyLayout>
//     </>
//   );
// };

// const SubjectMode: FC<{
//   subjects: Subject[];
// }> = ({ subjects }) => {
//   const subjectNameToIconMap = new Map([["英語", ""]]);
//   return (
//     <div css={buttonsWrapper}>
//       {subjects.map((subject, index) => {
//         return (
//           <IconButton
//             key={index}
//             icon={<Abc sx={{ fontSize: "100px", color: "#ffffff" }} />}
//             label={subject.name}
//             bgColor={""}
//             // component={"div"}
//             onClick={() => {}}
//           />
//         );
//       })}
//     </div>
//   );
// };

// const buttonsWrapper = css`
//   display: flex;
//   justify-content: center;
//   gap: 80px;
//   flex-wrap: wrap;

//   @media (max-width: 768px) {
//     gap: 40px;
//     justify-content: center;
//   }
//   @media (max-width: 480px) {
//     gap: 20px;
//   }
// `;
