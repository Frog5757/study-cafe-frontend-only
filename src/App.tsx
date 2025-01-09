import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HomePage } from "../src/pages/HomePage";
import { TestStartPage } from "./pages/Diagnostic/TestStartPage";
import { QuestionPage } from "./pages/Diagnostic/QuestionPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { MyPage } from "./pages/MyPage";
import { useAuth } from "../src/hooks/useAuth";
import { DiagnosticPage } from "./pages/Diagnostic";

export const App = () => {
  const { user } = useAuth(); // 認証状態を取得

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diagnostic" element={<DiagnosticPage />} />
        {/* <Route
          path="/diagnostic/subjectselect"
          element={<SubjectSelectPage />}
        /> */}
        {/* <Route
          path="/diagnostic/unitselect/:subject"
          element={<UnitSelectPage />}
        /> */}
        <Route
          path="/diagnostic/teststart/:subject/:unit"
          element={<TestStartPage />}
        />
        <Route path="/test/:subject/:unit" element={<QuestionPage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/mypage" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/mypage" /> : <SignUpPage />}
        />
        <Route
          path="/mypage"
          element={user ? <MyPage user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};
