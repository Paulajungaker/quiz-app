import "../../styling/Header.css";
import HeaderImage from "../../../public/HeaderImage.jpg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  return (
    <div className={isHomepage ? "headerContainer" : "headerContainer hidden"}>
      <h1 className="header">QuizMaster</h1>;
      <img
        src={HeaderImage}
        alt="Background image of game"
        className="headerImage"
      />
    </div>
  );
};

export default Header;
