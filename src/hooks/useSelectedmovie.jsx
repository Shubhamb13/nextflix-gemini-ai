import React, { useEffect } from "react";
import { addselectedMovieTrailer } from "../utils/gptSlice";
import { options } from "../utils/constans";
import { useDispatch } from "react-redux";

const useSelectedmovie = (id) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    );
    const json = await data.json();
    // console.log(json);
    const filterData = await json.results.filter(
      (video) => video.type === "Trailer",
    );
    const Trailer = filterData.length ? filterData[0] : json.results[0];

    // console.log(Trailer);
    dispatch(addselectedMovieTrailer(Trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
  return <div></div>;
};

export default useSelectedmovie;
