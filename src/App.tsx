import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import DiagnosticMain from "../src/pages/diagnostic/DiagnosticMain";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="diagnosticmain" element={<DiagnosticMain />} />
      </Routes>
    </Router>
  );
};
export default App;
