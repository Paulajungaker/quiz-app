import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizList from "./homepage/QuizList";
import Header from "./homepage/Header";
import QuizPage from "./quizzes/QuizPage";
import QuizCompletedPage from "./quizzes/QuizCompletionPage";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/quiz-completed" element={<QuizCompletedPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
