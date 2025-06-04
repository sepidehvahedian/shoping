import React, { useState } from "react";
const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");

  return (
    <React.Fragment>
      <input onChange={(e) => setNewUsername(e.target.value)} />
      <button>change username</button>
    </React.Fragment>
  );
};
export default ChangeProfile;
