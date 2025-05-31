import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increse </button>
      <button onClick={() => setCount(count - 1)}>decrese </button>
      <button onClick={() => setCount(count - count)}>set to 0</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
