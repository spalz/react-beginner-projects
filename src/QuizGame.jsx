import React from "react";
import PT from "prop-types";

import QuizQuestion from "./QuizQuestion";

const Game = ({ step, question, onClickVariant, countQuestions }) => {
  const progress = step * (100 / countQuestions);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progress}%` }}
          className="progress__inner"
        ></div>
      </div>
      <QuizQuestion question={question} onClickVariant={onClickVariant} />
    </>
  );
};

Game.propTypes = {
  step: PT.number.isRequired,
  question: PT.shape({
    title: PT.string,
    variants: PT.arrayOf(PT.string),
  }),
  onClickVariant: PT.func,
  countQuestions: PT.number.isRequired,
};

export default Game;
