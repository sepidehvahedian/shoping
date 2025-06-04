import { useState } from "react";
import { useToggle } from "./useToggle";
import "./App.css";

function App() {
  const [isVisible, toogle] = useToggle(false);
  return (
    <div className="App">
      <button onClick={toogle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>This is my hidden text</h1>}
    </div>
  );
}

export default App;
