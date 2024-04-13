import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizList from "./components/QuizList";
import Header from "./components/Header";
import QuizPage from "./components/QuizPage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<QuizList />} />
          <Route path="./quiz/:id" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
