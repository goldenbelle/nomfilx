import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

// useFadeIn = 원하는 element를 tㅓ서히 나타나게 함

const useFadeIn = (duration = 1, delay = 1) => {
  if(typeof duration !== "number"){
    return;
  }

  const element = useRef();

  // useFadeIn이 실행되고나서 실행되는 부분이 바로 Effect.
  useEffect(()=>{
    if(element.current){
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  },[])
  return {ref: element, style: {opacity: 0}};
  //// return에서 element를 쓸 수도 있구나. 
  //// Fade In 자체가 이벤트영향 안받고 element에 주는 효과라서 이렇게 리턴할 수 있는듯.
}

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hell o</h1>
      <p {...fadeInP}>gaegaegae</p>
    </div>
  );
};
//// {...fadeInH1} 풀어쓰면? useFadeIn은 그냥 return element만 하고
// h1 ref={fadeInH1} style={{opacity:0}} 이랑 똑같다 @@
//// why????? fadeInH1을 각각의 태그에 못쓰는거지??? 아. .엘레멘트ㄸ문에.. 

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
