import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import SubjectSelectPage from "./pages/diagnostic/SubjectSelectPage";
import UnitSelectPage from "./pages/diagnostic/UnitSelectPage";
import TestStartPage from "./pages/diagnostic/TestStartPage";
import QuestionPage from "./pages/diagnostic/QuestionPage";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/diagnostic/subjectselect"
          element={<SubjectSelectPage />}
        />
        <Route
          path="/diagnostic/teststart/:subject/:unit"
          element={<TestStartPage />}
        />
        <Route
          path="/diagnostic/unitselect/:subject"
          element={<UnitSelectPage />}
        />
        <Route path="/test/:unit" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
