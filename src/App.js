import logo from "./logo.svg";
import "./App.css";

function App() {
  const users = [
    { name: "sepideh", age: 23 },
    { name: "mahta", age: 12 },
    { name: "mohsen", age: 14 },
  ];

  return (
    <div className="App">
      {users.map((user, index) => {
        return (
          <p key={index}>
            {user.name}
            {user.age}
          </p>
        );
      })}
    </div>
  );
}

export default App;
