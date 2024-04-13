import PropTypes from "prop-types";
import { useState } from "react";

const Quiz = ({ quiz }) => {
  const [userAnswers, setUserAnswers] = useState(
    Array(quiz.questions.length).fill(null)
  );

  const handleAnswerSelect = (questionsIndex, selectedOptionIndex) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[questionsIndex] = selectedOptionIndex;
    setUserAnswers(updatedUserAnswers);
  };

  const handleSubmitQuiz = () => {
    const score = userAnswers.reduce((totalScore, answer, index) => {
      return answer === quiz.questions[index].correctAnswerIndex
        ? totalScore + 1
        : totalScore;
    }, 0);

    alert(`Your score: ${score}/${quiz.questions.length}`);
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      <div>
        {quiz.questions.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={optionIndex}
                      checked={userAnswers[index] === optionIndex}
                      onChange={() => handleAnswerSelect(index, optionIndex)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
};

Quiz.propTypes = {
  quiz: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        correctAnswerIndex: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Quiz;
