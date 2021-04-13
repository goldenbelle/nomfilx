// increase and decrase number

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// HOOK
function App() {
  const [item, setItem] = useState(1);

  const increase = () => setItem(item + 1);

  return (
    <div className="App">
      <h1> {item} eeeeeeee </h1>
      <button onClick={increase}> yoyoyo </button>
    </div>
  );
}


// CLASS
class AppClass extends React.Component {
  state = { item: null };

  increase = () => {
    console.log("increase");
    this.setState({item: this.state.item+1});
  }

  render() {
    const { item } = this.state;
    console.log(item);
    return (
      <>
        <h1> {item} eeeeeeee </h1>
        <button onClick={this.increase}> yoyoyo </button>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
