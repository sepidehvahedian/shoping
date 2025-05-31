import { useState } from "react";
import "./App.css";

function App() {
  const [textColor, setTextColor] = useState("red");

  return (
    <div className="App">
      <button
        onClick={() => setTextColor(textColor === "red" ? "green" : "red")}
      >
        Change color
      </button>
      <h1 style={{ color: textColor }}>sepideh style coding</h1>
    </div>
  );
}
export default App;
