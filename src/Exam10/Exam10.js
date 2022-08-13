import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";

import React from "react";

function Exam10() {
  return (
    <div>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default Exam10;
