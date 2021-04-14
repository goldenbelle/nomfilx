import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// useConfirm: 사용자가 뭔가 하기 전에(이벤트) 확인하는 것!

// Hook 순서 //
// 1. 원하는 Hook함수를 만든다.
// 2. argu는 이 함수 실행을 위해 필요한 것들을 적는다.
// 3. App, HTML에서 함수를 실행하기 위한 것들을 선언하고, Hook함수를 실행한다.

const useConfirm = (message = "", callback, rejection) => {
 // Validation
 if (callback && typeof callback !== "function") {
  return;
 }
 if (rejection && typeof rejection !== "function") {
  return;
 }
 //// callback(rejection)이 존재하고 + 그것들의 타입이 함수일때만 useConfirm 실행.

 const confirmAction = () => {
  if (window.confirm(message)) {
   callback();
  } else {
   rejection();
  }
 };
 return confirmAction;
};

const App = () => {
 const deleteWorld = () => console.log("Delete");
 const abort = () => console.log("Aborted");

 const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

 return (
  <div className="App">
   <button onClick={confirmDelete}>Delete the world</button>
  </div>
 );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
