import "../styling/Header.css";
import HeaderImage from "../../public/HeaderImage.jpg";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="header">QuizMaster</h1>;
      <img
        src={HeaderImage}
        alt="Background image of rubic-cube"
        className="headerImage"
      />
    </div>
  );
};

export default Header;
