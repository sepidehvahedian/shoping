import React, { useContext } from "react";
import { ContactContext } from "../App";
const Home = (props) => {
  const {username}=useContext(ContactContext)
  return <p>This is home page - username is {username}</p>;
};
export default Home;
