import { Class } from "./Class";
import "./App.css";

function App() {
  const classes = [
    { name: "html", finished: true },
    { name: "JavaScript", finished: false },
    { name: "css", finished: true },
    { name: "bootStap", finished: false },
    { name: "react", finished: true },
    { name: "python", finished: false },
  ];

  return (
    <div className="App">
      {classes.map((c, index) => {
        return c.finished && <Class key={index} name={c.name} />;
      })}
    </div>
  );
}

export default App;
