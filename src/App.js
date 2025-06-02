import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [predicteResult, setPredictedResult] = useState({});

  const fetchFact = () => {
    Axios.get(`https://api.agify.io?name=${text}`)
      .then((response) => {
        console.log("پاسخ سرور:", response.data);
        setPredictedResult(response.data);
      })
      .catch((error) => {
        console.error("خطا:", error);
      });
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={fetchFact}>predicte age</button>
      <h1>age is : {predicteResult.age}</h1>
      <h1>age is : {predicteResult.name}</h1>
    </div>
  );
}

export default App;
