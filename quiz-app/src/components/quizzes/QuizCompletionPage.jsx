import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const QuizCompletedPage = ({ score, totalQuestions }) => {
  return (
    <div>
      <h1>Quiz Completed</h1>
      <p>
        Your score: {score}/{totalQuestions}
      </p>
      <p>Thank you for taking the quiz</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

QuizCompletedPage.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number,
};

export default QuizCompletedPage;
