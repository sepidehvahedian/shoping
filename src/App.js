import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState();
  const handelChange=(e)=>{
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={handelChange}></input>
      <h1>{inputValue}</h1>
    </div>
  );
}
export default App;
