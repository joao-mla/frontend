import { useState } from "react";
import { createContext } from "react";
import questions from "../questions";
import { shuffle } from "../questions";

shuffle(questions);

export const QuizContext = createContext({
  questions: [],
  currentQuestionId: 0,
  checkAnswer: () => {},
  finished: false,
  score: 0,
  givenAnswers: [],
});

export default function QuizContextProvider({ children }) {
  const [currentQuestionId, setCurrentQuestion] = useState(0);
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [givenAnswers, setGivenAnswers] = useState([]);

  function checkAnswer(answer) {
    setGivenAnswers((prev) => [...prev, answer]);

    if (questions[currentQuestionId].correctAnswer === answer)
      setScore((prev) => prev + 1);

    if (currentQuestionId === questions.length - 1) setFinishedQuiz(true);
    else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  const cxtValue = {
    questions: questions,
    currentQuestionId: currentQuestionId,
    checkAnswer: checkAnswer,
    finished: finishedQuiz,
    score: score,
    givenAnswers: givenAnswers,
  };

  return (
    <QuizContext.Provider value={cxtValue}>{children}</QuizContext.Provider>
  );
}
