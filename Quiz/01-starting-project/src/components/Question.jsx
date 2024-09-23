import Answer from "./Answer";
import { shuffle } from "../questions";
import { useCallback, useContext } from "react";
import { QuizContext } from "./QuizContext";
import QuestionTimer from "./QuestionTimer";

export default function Question({ currentQuestion }) {
  // Displays the main question text
  // Displays a list of answers
  const { checkAnswer } = useContext(QuizContext);
  const { question, answers } = currentQuestion;

  shuffle(answers);

  const handleSkip = useCallback(() => checkAnswer(""), [checkAnswer])

  return (
    <div id="question" className="question-overview">
      <QuestionTimer key={question} timeout={10000} onTimeout={handleSkip} />
      <h2>{question}</h2>
      <div id="answers">
        {answers.map((answer) => (
          <Answer key={answer}>{answer}</Answer>
        ))}
      </div>
      <div id="skip-action">
        <button onClick={handleSkip}>Skip</button>
      </div>
    </div>
  );
}
