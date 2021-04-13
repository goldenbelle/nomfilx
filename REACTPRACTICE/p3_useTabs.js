import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// api information, 예시로 만듬
const content = [
  {
    tap: "Section1",
    detail: "11111111"
  },
  {
    tap: "Section2",
    detail: "22222222222"
  }
];

//클릭한 버튼의 정보만 나오게 하기
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  const change = () => changeItem;

  return (
    <div className="App">
      <h1> Hi </h1>
      {content.map((section, index) => (
        <button onClick={change}> {section.tap} </button>
      ))}
      <div>{currentItem.detail}</div>
    </div>
  );
};
// content는 global 하게 있어서 바로 씀!, array라 map 사용 가능.

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
