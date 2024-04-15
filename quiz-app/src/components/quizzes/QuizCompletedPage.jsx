import { useLocation, useNavigate } from "react-router-dom";
import CompletedImage from "../../../public/Celebrate.png";
import "../../styling/QuizCompletedPage.css";

const QuizCompletedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  const score = state?.score;
  const totalQuestions = state?.totalQuestions;

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="completedContainer">
      <h1 className="completedTitle">You have completed the Quiz</h1>
      <img
        src={CompletedImage}
        alt="Icon with confetti"
        className="completedImage"
      />
      <p className="completedScore">
        Your score: {score} / {totalQuestions}
      </p>
      <p className="completedText">Thank you for taking the quiz</p>
      <button className="buttonToHomepage" onClick={handleBackToHome}>
        Back to home
      </button>
    </div>
  );
};

export default QuizCompletedPage;
