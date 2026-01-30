import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constans";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const Now_playingMovie = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options,
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !Now_playingMovie && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
