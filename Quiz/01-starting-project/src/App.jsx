import Quiz from "./components/Quiz";
import QuizContextProvider from "./components/QuizContext";

function App() {
  return (
    <QuizContextProvider>
      <Quiz />
    </QuizContextProvider>
  );
}

export default App;
