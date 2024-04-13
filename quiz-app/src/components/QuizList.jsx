import { useState } from "react";
import QuizCard from "./QuizCard";
import Quiz from "./Quiz";
import quizData from "../quizData.json";

const Quizlist = () => {
  const [selectedQuizIndex, setSelectedQuizIndex] = useState(null);

  return (
    <div>
      <h1>Choose a Quiz</h1>
      <div className="quizCards">
        {quizData.map((quiz, index) => {
          <QuizCard
            key={index}
            quiz={quiz}
            onClick={() => setSelectedQuizIndex(index)}
          />;
        })}
      </div>
      {selectedQuizIndex !== null && (
        <Quiz quiz={quizData[selectedQuizIndex]} />
      )}
    </div>
  );
};

export default Quizlist;
