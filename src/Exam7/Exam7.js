import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";

import React from "react";

function Exam4() {
  return (
    <div>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default Exam4;
