import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export default function Answer({ children }) {
  const { checkAnswer } = useContext(QuizContext);

  function handleClick() {
    checkAnswer(children);
  }

  return (
    <div className="answer">
      <button onClick={handleClick}>
        <p>{children}</p>
      </button>
    </div>
  );
}
