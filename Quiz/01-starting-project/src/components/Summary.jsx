import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export default function Summary() {
  const { givenAnswers, score, questions } = useContext(QuizContext);
  let incorrect = 0;

  function getClass(givenAnswer, correctAnswer) {
    let defaultClass = "user-answer ";
    if (givenAnswer === "") return defaultClass + "skipped";
    if (givenAnswer === correctAnswer) return defaultClass + "correct";
    incorrect++;
    return defaultClass + "wrong";
  }

  return (
    <div id="summary">
      <img src="/src/assets/quiz-complete.png" />
      <h2>Your score: {score}</h2>
      <h3 style={{ fontSize: "2rem" }}>Results</h3>
      <ol>
        {givenAnswers.map((givenAnswer, givenAnswerId) => {
          let answerClass = getClass(
            givenAnswer,
            questions[givenAnswerId].correctAnswer
          );
          return (
            <li key={givenAnswerId}>
              <h3>{questions[givenAnswerId].question}</h3>
              <p className="question">{questions[givenAnswerId].question}</p>
              <p>
                Correct answer:{" "}
                <span className="user-answer">
                  {questions[givenAnswerId].correctAnswer}
                </span>
              </p>
              <p>
                Your answer: <span className={answerClass}>{givenAnswer}</span>
              </p>
            </li>
          );
        })}
      </ol>
      <div id="summary-stats">
        <div>
          <p className="text">correct</p>
          <p className="number">{(+score * 100) / questions.length}%</p>
        </div>

        <div>
          <p className="text">Incorrect</p>
          <p className="number"> {(incorrect * 100) / questions.length}%</p>
        </div>

        <div>
          <p className="text">Skipped</p>
          <p className="number">
            {((questions.length - score - incorrect) * 100) / questions.length}%
          </p>
        </div>
      </div>
    </div>
  );
}
