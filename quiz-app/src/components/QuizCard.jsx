import PropTypes from "prop-types";
import "../styling/QuizCard.css";
import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <div className="quizCardContainer">
      <h2 className="QuizCardTitle">{quiz.title}</h2>
      <img src={quiz.image} alt={quiz.title} className="quizCardImage" />
      <Link to={`/quiz/${quiz.id}`}>Start Quiz</Link>
    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuizCard;
