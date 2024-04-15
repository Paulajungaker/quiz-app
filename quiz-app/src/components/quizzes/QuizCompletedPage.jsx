import { Link, useLocation } from "react-router-dom";

const QuizCompletedPage = () => {
  const location = useLocation();

  const { state } = location;
  const score = state?.score;
  const totalQuestions = state?.totalQuestions;

  return (
    <div>
      <h1>Quiz Completed</h1>
      <p>
        Your score: {score} / {totalQuestions}
      </p>
      <p>Thank you for taking the quiz</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default QuizCompletedPage;
