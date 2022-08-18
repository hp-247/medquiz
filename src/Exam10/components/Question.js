import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      {currentQuestion.image.length !== 0 && (
        <div>
          <a className="thumbnail" href="#thumb">
            <img
              src={currentQuestion.image}
              width="100px"
              height="90px"
              border="0"
              alt="back"
            />
            <span>
              <img
                src={currentQuestion.image}
                alt="back"
                width="327"
                height="369"
              />
            </span>
          </a>
        </div>
      )}

      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
