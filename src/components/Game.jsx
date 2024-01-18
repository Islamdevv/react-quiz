import React from "react";

const Game = ({ question, onClickVariants, questions, step }) => {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);
  return (
    <div className="main_game">
      <div className="game">
        <div className="main_inner">
          <div className="inner" style={{ width: `${percentage}%` }}></div>
        </div>
        <h2>{question.title}</h2>
        <ul>
          {question.variants.map((txt, index) => (
            <li key={index} onClick={() => onClickVariants(index)}>
              {txt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
