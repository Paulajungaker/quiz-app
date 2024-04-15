import { Link, useLocation } from "react-router-dom";
import "../../styling/QuizCompletedPage.css";

const QuizCompletedPage = () => {
  const location = useLocation();

  const { state } = location;
  const score = state?.score;
  const totalQuestions = state?.totalQuestions;

  return (
    <div className="completedContainer">
      <h1 className="completedTitle">You have completed the Quiz</h1>
      <p className="completedScore">
        Your score: {score} / {totalQuestions}
      </p>
      <p className="completedText">Thank you for taking the quiz</p>
      <Link className="linkToHomepage" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default QuizCompletedPage;
