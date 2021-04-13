import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue, validator) => {
  const [item, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { item, onChange };
};

const App = () => {
  const maxLen = (a) => a.length <= 10;
  // (a) => a.includes("@") 하면 @는 입력 못하게 됨.

  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1> Hi </h1>
      <input placeholder="name" value={name.item} onChange={name.onChange} />
    </div>
  );
};