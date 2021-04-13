import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// PreventLeave : Windew 창 닫았을때 진짜 닫을건지 물어본다.

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
    /// 이 두개가 뭔지 모르는데, window = eforeunload랑 세트라고 생각해라 그래야 함수 실행된다.
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  /// beforeunload는 윈도우가 닫기 전에 function을 실행한다.
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  /// 생성된 event listenr를 지워준다.
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}> Protect </button>
      <button onClick={disablePrevent}> Un Protect </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
