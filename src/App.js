import { useState } from "react";
import "./App.css";

function App() {
  const [showText, setShowText] = useState(false);
  const toggleText = () => setShowText(!showText);
  return (
    <div className="App">
      <button onClick={toggleText}>show/hide</button>
      {showText && <h1>sepideh style codeing</h1>}
    </div>
  );
}
export default App;
