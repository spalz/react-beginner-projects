import React from "react";
import PT from "prop-types";

const defaultCurrencies = ["usd", "kgs", "rub", "eur", "chf"];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? "active" : ""}
            key={cur}
          >
            {cur.toLocaleUpperCase()}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  );
};

Block.propTypes = {
  value: PT.oneOfType([PT.string, PT.number]),
  currency: PT.string.isRequired,
  onChangeValue: PT.func,
  onChangeCurrency: PT.func,
};
