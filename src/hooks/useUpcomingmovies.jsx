import React, { useEffect } from "react";
import { options } from "../utils/constans";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesslice";

const useUpcomingmovies = () => {
  const dispatch = useDispatch();
  const upcoming_movies=useSelector((store)=>store.movies.UpcomingMovies);
  const getUpcomingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options,
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
   !upcoming_movies && getUpcomingmovies();
  });
  return <div></div>;
};

export default useUpcomingmovies;
