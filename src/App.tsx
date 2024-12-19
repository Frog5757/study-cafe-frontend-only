import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../src/pages/Home";
import SubjectSelectPage from "./pages/diagnostic/SubjectSelectPage";
import UnitSelectPage from "./pages/diagnostic/UnitSelectPage";
import TestStartPage from "./pages/diagnostic/TestStartPage";
import QuestionPage from "./pages/diagnostic/QuestionPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import { useAuth } from "../src/hooks/useAuth"; // 仮に作ったカスタムフック

export const App = () => {
  const { user } = useAuth(); // 認証状態を取得

  return (
    <Router>
      <Routes>
        {/* ホームページ */}
        <Route path="/" element={<Home />} />

        {/* 診断ページ */}
        <Route
          path="/diagnostic/subjectselect"
          element={<SubjectSelectPage />}
        />
        <Route
          path="/diagnostic/unitselect/:subject"
          element={<UnitSelectPage />}
        />
        <Route
          path="/diagnostic/teststart/:subject/:unit"
          element={<TestStartPage />}
        />
        <Route path="/test/:subject/:unit" element={<QuestionPage />} />

        {/* ログインとサインアップページ */}
        <Route
          path="/login"
          element={user ? <Navigate to="/mypage" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/mypage" /> : <SignUpPage />}
        />

        {/* マイページ (ログイン後のみアクセス可) */}
        <Route
          path="/mypage"
          element={user ? <MyPage user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
