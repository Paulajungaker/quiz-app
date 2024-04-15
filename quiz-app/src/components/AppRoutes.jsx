import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizList from "./QuizList";
import Header from "./Header";
import QuizPage from "./QuizPage";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
