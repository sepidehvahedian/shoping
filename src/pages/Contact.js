import React from "react";
import ChangeProfile from "../Components/ChangeProfile";
const Contact = (props) => {
  return (
    <React.Fragment>
      <p>This is Contact page - username is {props.username}</p>
      <ChangeProfile setUsername={props.setUsername} />
    </React.Fragment>
  );
};

export default Contact;
