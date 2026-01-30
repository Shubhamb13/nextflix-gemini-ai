import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import Shimmer from "./Shimmer";

const Gptmoviesuggestions = () => {
  const { gptResults, MoviesNames, isloading } = useSelector(
    (store) => store.gpt,
  );

  if (isloading) return <Shimmer />;
  if (!MoviesNames) return null;
  return (
    <div className="p-4">
      {MoviesNames.map((moviesNames, index) => (
        <Movielist
          key={moviesNames}
          title={moviesNames}
          movies={gptResults[index]}
        />
      ))}
    </div>
  );
};

export default Gptmoviesuggestions;
