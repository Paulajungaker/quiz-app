import PropTypes from "prop-types";
import "../styling/QuizCard.css";
import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <div className="quizCardContainer">
      <h2 className="QuizCardTitle">{quiz.title}</h2>
      <img src={quiz.image} alt={quiz.title} className="quizCardImage" />
      <div>
        <Link to={`/quiz/${encodeURIComponent(quiz.title)}`}>Start Quiz</Link>
      </div>
    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.object.isRequired,
};

export default QuizCard;
