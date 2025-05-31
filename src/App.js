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
        return <Users name={user.name} age={user.age} />;
      })}
    </div>
  );
}

const Users = (props) => {
  console.log(props);
  return (
    <h2>
      {props.name} : {props.age}
    </h2>
  );
};

export default App;
