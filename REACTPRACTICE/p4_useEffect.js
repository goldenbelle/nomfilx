import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("hello");
  
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number, aNumber]);
  return (
    <div className="App">
      <button onClick={()=> setNumber(number+1)}>{number}</button>
      <button onClick={()=> setAnumber(number+1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
