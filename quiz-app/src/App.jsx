import "./App.css";
import QuizList from "./components/QuizList";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <QuizList />
    </div>
  );
};

export default App;
