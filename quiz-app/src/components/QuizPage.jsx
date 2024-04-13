import { useParams } from "react-router-dom";
import Quiz from "./Quiz";
import quizData from "../quizData.json";

const QuizPage = () => {
  const { id } = useParams();
  const selectedQuiz = quizData.find((quiz) => quiz.title === id);

  return (
    <div>
      {selectedQuiz ? <Quiz quiz={selectedQuiz} /> : <p>Quiz not found!</p>}
    </div>
  );
};

export default QuizPage;
