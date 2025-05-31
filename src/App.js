import logo from "./logo.svg";
import "./App.css";

function App() {
  const age = 20;

  return (
    <div className={age ? "App" : "App-header"}>
      {age > 20 ? <h1>over</h1> : <h1>under</h1>}
      {age == 20 && <h1>age is 20</h1>}
    </div>
  );
}

export default App;
