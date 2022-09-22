import React, { useState } from "react";

import QuizGame from "./QuizGame";
import QuizResult from "./QuizResult";

import "./index.scss";
import questions from "./questions.json";

export const App = () => {
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(0);
  const [correctQuestion, setCorrectQuestion] = useState(0);

  const question = questions[step];
  const countQuestions = questions.length;

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index) {
      setCorrectQuestion(correctQuestion + 1);
    }
    if (step >= 2) {
      setSuccess(true);
    }
  };

  const resetQuiz = (index) => {
    setStep(0);
    setSuccess(false);
    setCorrectQuestion(0)
  };

  return (
    <div className="App">
      {!success ? (
        <QuizGame
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          countQuestions={countQuestions}
        />
      ) : (
        <QuizResult
          correctQuestion={correctQuestion}
          countQuestions={countQuestions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default App;
