import { useState } from "react";
import Quiz from "./Quiz";
import quizData from "../quizData.json";

const Quizlist = () => {
  const [selectedQuizIndex, setSelectedQuizIndex] = useState(null);

  return (
    <div>
      <h1>Choose a Quiz</h1>
      <ul>
        {quizData.map((quiz, index) => (
          <li key={index} onClick={() => setSelectedQuizIndex(index)}>
            <h2>{quiz.title}</h2>
          </li>
        ))}
      </ul>
      {selectedQuizIndex !== null && (
        <Quiz quiz={quizData[selectedQuizIndex]} />
      )}
    </div>
  );
};

export default Quizlist;
