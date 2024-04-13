import PropTypes from "prop-types";

const QuizCard = ({ quiz, onClick }) => {
  return (
    <div className="quizCardContainer" onClick={onClick}>
      <h2>{quiz.title}</h2>
    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuizCard;
