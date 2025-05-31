import { useState } from "react";
import "./App.css";

function App() {
  const [age,setAge]=useState(0)
  const increaseAge = () => {
    setAge ( age + 1);

  };
  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={increaseAge}>Increse age</button>
    </div>
  );
}

export default App;
