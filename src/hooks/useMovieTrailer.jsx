import React, { useEffect } from "react";
import { options } from "../utils/constans";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesslice";

const useMovieTrailer = ({ movie_id }) => {
  const dispatch = useDispatch();

  const Movie_Video = useSelector((store) => store.movies.MovieTrailer);
  // console.log(movie_id);
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      options,
    );
    const json = await data.json();
    // console.log(json);
    const filterData = await json.results.filter(
      (video) => video.type === "Trailer",
    );
    const Trailer = filterData.length ? filterData[0] : json.results[0];

    // console.log(Trailer);
    dispatch(addMovieTrailer(Trailer));
  };
  useEffect(() => {
    !Movie_Video && getMovieVideo();
  }, []);
  return <div></div>;
};

export default useMovieTrailer;
