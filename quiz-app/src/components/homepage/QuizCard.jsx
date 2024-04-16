import PropTypes from "prop-types";
import "../../styling/QuizCard.css";

const QuizCard = ({ quiz }) => {
  return (
    <div className="quizCardContainer">
      <h2 className="QuizCardTitle">{quiz.title}</h2>
      <img src={quiz.image} alt={quiz.title} className="quizCardImage" />
    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.object.isRequired,
};

export default QuizCard;
