import React from "react";
import PT from "prop-types";

const QuizQuestion = ({
  question: { correct, title, variants },
  onClickVariant,
}) => {
  const handleClickVarian = (idx) => {
    onClickVariant(correct === idx);
  };

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {variants.map((item, idx) => {
          return (
            <li onClick={() => handleClickVarian(idx)} key={idx}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

QuizQuestion.propTypes = {
  question: PT.shape({
    title: PT.string,
    variants: PT.arrayOf(PT.string),
  }),
  onClickVarian: PT.func,
};

export default QuizQuestion;
