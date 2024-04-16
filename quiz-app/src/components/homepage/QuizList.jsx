import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import QuizCard from "./QuizCard";
import quizData from "../../quizData.json";

const Quizlist = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="listTitle">Choose a Quiz</h1>
      {loading ? (
        <div className="loadingContainer">
          <BsArrowRepeat className="loadingIcon" />
        </div>
      ) : (
        <div className="quizCards">
          {quizData.map((quiz, index) => (
            <Link key={index} to={`/quiz/${encodeURIComponent(quiz.title)}`}>
              <QuizCard quiz={quiz} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quizlist;
