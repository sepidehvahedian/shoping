import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);

  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={()=>setAge(age + 1)}>Increse age</button>
      <button onClick={()=>setAge(age - 1)}>decrese age</button>
    </div>
  );
}

export default App;
