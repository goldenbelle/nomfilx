import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// useNetwork: 네트워크(인터넷) 끊길때/연결될때  어떻게 되는지 //

// 모르겠따 ;; 콘솔에서 오프라인 온라인도 없고 ~~ 일단 패스 ! 

const useNetwork = (onChange) => {
  const [status, setStauts] = useState(navigator.onLine);
  //// navigator.onLine은 인터넷 연결됐을 때 true 리턴한당. 기본값임

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStauts(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  });
  return status;
};


const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online?"gg":"xx");
  }
  const status = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{status ? "Online" : "Offline"}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
