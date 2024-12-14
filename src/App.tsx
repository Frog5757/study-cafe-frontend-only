import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import SubjectSelectPage from "./pages/SubjectSelectPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostic/subject" element={<SubjectSelectPage />} />
      </Routes>
    </Router>
  );
};
export default App;
