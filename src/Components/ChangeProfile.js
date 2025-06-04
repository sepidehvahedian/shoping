import React, { useState } from "react";
const ChangeProfile = (props) => {
  const [newUsername, setNewUsername] = useState("");
  return (
    <React.Fragment>
      <input onChange={(e) => setNewUsername(e.target.value)} />
      <button onClick={() => props.setUsername(newUsername)}>
        change username
      </button>
    </React.Fragment>
  );
};
export default ChangeProfile;
