import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import SubjectSelectPage from "./pages/diagnostic/SubjectSelectPage";
import UnitSelectPage from "./pages/diagnostic/UnitSelectPage";
import DiagnosticTestStartPage from "./pages/diagnostic/DiagnosticTestStartPage";

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
          element={<DiagnosticTestStartPage />}
        />
        <Route
          path="/diagnostic/unitselect/:subject"
          element={<UnitSelectPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
