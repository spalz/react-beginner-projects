import React, { useState } from "react";

import "./index.scss";

const App = () => {
  const [count, setCount] = useState(0);

  const setPlus = () => {
    setCount(count + 1);
  };
  const setMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={setMinus}>
          - Минус
        </button>
        <button className="plus" onClick={setPlus}>
          Плюс +
        </button>
      </div>
    </div>
  );
};

export default App;
