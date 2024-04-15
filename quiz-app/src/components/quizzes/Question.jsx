import PropTypes from "prop-types";
import "../../styling/Question.css";

const Question = ({ question, onAnswerSubmit }) => {
  return (
    <div className="questionContainer">
      <h2 className="questionTitle">{question.question}</h2>
      <div className="optionsContainer">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="questionButtons"
            onClick={() => onAnswerSubmit(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onAnswerSubmit: PropTypes.func.isRequired,
};

export default Question;
