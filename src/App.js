import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [catFact, setCatFact] = useState();

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  return (
    <div className="App">
      <button onClick={fetchFact}>fetch data</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
