import Header from "./Header";
import Question from "./Question";
import { QuizContext } from "./QuizContext";
import { useContext } from "react";
import Summary from "./Summary";

export default function Quiz() {
  // all the state of the quiz application
  // iterate through the quiz questions
  // display a results screen when all quiz questions have bene exhausted

  const { currentQuestionId, questions, finished } = useContext(QuizContext);

  return (
    <div id="quiz">
      <Header />
      {!finished && <Question currentQuestion={questions[currentQuestionId]} />}
      {finished && <Summary />}
    </div>
  );
}
