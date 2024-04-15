import PropTypes from "prop-types";

const Question = ({ question, onAnswerSubmit }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswerSubmit(index)}>{option}</button>
          </li>
        ))}
      </ul>
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
