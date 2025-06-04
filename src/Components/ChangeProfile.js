import React, { useContext, useState } from "react";
import { ContactContext } from "../App";
const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(ContactContext);
  return (
    <React.Fragment>
      <input onChange={(e) => setNewUsername(e.target.value)} />
      <button onClick={() => setUsername(newUsername)}>change username</button>
    </React.Fragment>
  );
};
export default ChangeProfile;
