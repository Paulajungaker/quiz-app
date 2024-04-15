import Question from "./Question";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../../quizData.json";

const QuizPage = () => {
  const { id } = useParams();
  const selectedQuiz = quizData.find((quiz) => quiz.title === id);
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(selectedQuiz.questions.length).fill(null)
  );
  const [score, setScore] = useState(0);

  const handleSubmitAnswer = (selectedOptionIndex) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedOptionIndex;
    setUserAnswers(updatedUserAnswers);

    if (
      selectedOptionIndex ===
      selectedQuiz.questions[currentQuestionIndex].correctAnswerIndex
    ) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const updatedScore =
        score +
        (selectedOptionIndex ===
        selectedQuiz.questions[currentQuestionIndex].correctAnswerIndex
          ? 1
          : 0);
      navigate("/quiz-completed", {
        state: {
          score: updatedScore,
          totalQuestions: selectedQuiz.questions.length,
        },
      });
    }
  };

  return (
    <div className="quizPageContainer">
      <Question
        question={selectedQuiz.questions[currentQuestionIndex]}
        onAnswerSubmit={handleSubmitAnswer}
      />
    </div>
  );
};

export default QuizPage;
