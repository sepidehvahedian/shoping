import  User  from "./User";
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
        return <User key={index} name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
