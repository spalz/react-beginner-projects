import React from "react";

const QuizResult = ({ correctQuestion, countQuestions, resetQuiz }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>
        Вы отгадали {correctQuestion} ответа из {countQuestions}
      </h2>
      <button onClick={resetQuiz}>Попробовать снова</button>
    </div>
  );
};

export default QuizResult;
