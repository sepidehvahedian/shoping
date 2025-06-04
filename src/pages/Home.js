import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = (props) => {
  const { data:catData, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isLoading) return <h2>loding</h2>;
  if (isError) return <h2>sorry , there was an error : {error.message}</h2>;

  return (
    <React.Fragment>
      <p>{catData?.fact}</p>
      <button onClick={refetch}>update</button>
    </React.Fragment>
  );
};

export default Home;
