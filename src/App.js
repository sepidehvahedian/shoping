import { useState } from "react";
import "./App.css";

function App() {
  const clickHandler = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <button onClick={clickHandler}>fetch data</button>
      <p></p>
    </div>
  );
}

export default App;
