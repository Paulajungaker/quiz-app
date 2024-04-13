import { Link } from "react-router-dom";
import QuizCard from "./QuizCard";
import quizData from "../quizData.json";

const Quizlist = () => {
  return (
    <div>
      <h1>Choose a Quiz</h1>
      <div className="quizCards">
        {quizData.map((quiz, index) => (
          <Link key={index} to={`/quiz/${encodeURIComponent(quiz.title)}`}>
            <QuizCard quiz={quiz} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Quizlist;
