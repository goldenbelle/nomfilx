import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// useBeforeLeave : window 떠나기 전에 실행됨. 예를들어 마우스가 윈도우 벗어나면 실행.

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    
    // 마우스가 위로 갔을때만 함수 실행
    const { clientY } = event;
    //// clientY는 콘솔에 event 찍어서 알아낸거임
    if(clientY <= 0) {
      onBefore();
    } //// Y의 값이 0보다 작으면 (위로 가면) onBefore하고, 그보다 이상이면 암것도 안함.
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    //// 이벤트 리스너는 함수랑 짝꿍임
    //// 이벤트 리스너를 통해 실행되는 함수는 무조건 event를 argu로 받는다.
    return () => {
      //// return 안에 있는 부분이 componentWillupMount 부분
      //// function to clean up
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

const App = () => {
  const begForLife = () => {
    console.log("Please don't leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello </h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
