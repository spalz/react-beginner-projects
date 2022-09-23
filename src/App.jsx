import React, { useState, useEffect, useRef } from "react";

import { Block } from "./Block";

import "./index.scss";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("kgs");
  const [fromPrice, setFromPrice] = useState(1);
  const [toPrice, setToPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const ratesRef = useRef({});

  const onChangeCurrencyLeft = (cur) => {
    setFromCurrency(cur);
  };
  const onChangeCurrencyRight = (cur) => {
    setToCurrency(cur);
  };

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`
    )
      .then((resp) => resp.json())
      .then((json) => {
        ratesRef.current = json.usd;
        setIsLoading(true);
        onChangeFromPrice(1);
      })
      .catch((error) =>
        console.error("Произошла ошибка, курс валют не получен", error)
      );
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setFromPrice(value);
    setToPrice(result.toFixed(2));
  };

  const onChangeToPrice = (value) => {
    const result =
      (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(2));
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="App">
      {isLoading && (
        <>
          <Block
            value={fromPrice}
            currency={fromCurrency}
            onChangeCurrency={onChangeCurrencyLeft}
            onChangeValue={onChangeFromPrice}
          />
          <Block
            value={toPrice}
            currency={toCurrency}
            onChangeCurrency={onChangeCurrencyRight}
            onChangeValue={onChangeToPrice}
          />
        </>
      )}
    </div>
  );
}

export default App;
