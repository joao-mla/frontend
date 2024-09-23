import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  console.log(timeout);
  console.log(remainingTime);
  useEffect(() => {
    const timerId = setTimeout(onTimeout, timeout);

    return () => clearInterval(timerId);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}></progress>
  );
}
