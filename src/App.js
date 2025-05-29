import logo from "./logo.svg";
import "./App.css";

function App() {
  const age = 20;

  if (age > 20) {
    return <div className="App"> over age </div>;
  } else return <div className="App"> under </div>;
}

export default App;
