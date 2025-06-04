import { useState } from "react";
export const useToggle = ({ intialValue = false }) => {
  const [state, setState] = useState(intialValue);
  const toogle = () => {
    setState((prevState) => !prevState);
  };
  return [state, toogle];
};
