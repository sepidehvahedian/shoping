import logo from "./logo.svg";
import "./App.css";

function App() {
  const names = ["sepideh", "mahta", "mohsen"];

  return (
    <div className="App">
      {names.map((name) => {
        return <p>{name}</p>;
      })}
    </div>
  );
}

export default App;
