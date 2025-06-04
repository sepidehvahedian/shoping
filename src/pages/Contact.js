import React, { useContext } from "react";
import ChangeProfile from "../Components/ChangeProfile";
import { ContactContext } from "../App";

const Contact = () => {
  const{username}=useContext(ContactContext)
  return (
    <React.Fragment>
      <p>This is Contact page - username is {username}</p>
      <ChangeProfile  />
    </React.Fragment>
  );
};

export default Contact;
