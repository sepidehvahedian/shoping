import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [excuse, setExcuse] = useState("");
  const fetchFact = (name) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}/`)
      .then((response) => {
        console.log("پاسخ سرور:", response.data);
        setExcuse(response.data[0].excuse);
      })
      .catch((error) => {
        console.error("خطا:", error);
      });
  };

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchFact("party")}>Party</button>
      <button onClick={() => fetchFact("family")}>Family</button>
      <button onClick={() => fetchFact("office")}>Office</button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
