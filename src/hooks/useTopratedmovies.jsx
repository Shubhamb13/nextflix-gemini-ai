import React, { useEffect } from "react";
import { options } from "../utils/constans";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopratedmovies = () => {
  const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopratedMovies();
  }, []);
  return <div></div>;
};

export default useTopratedmovies;
