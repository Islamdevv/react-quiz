import React from "react";

const Result = ({ correct, questions }) => {
  return (
    <div className="main_result">
      <div className="result">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
          alt="resultIMG"
        />
        <h2>
          Вы ответили на {correct} вопроса из {questions.length}
        </h2>
        <a href="/">
          <button>Попробовать снова</button>
        </a>
      </div>
    </div>
  );
};

export default Result;
