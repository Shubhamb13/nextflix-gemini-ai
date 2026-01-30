import { useEffect } from "react";
import { options } from "../utils/constans";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularmovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?Page=1",
      options
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  return <div></div>;
};
export default usePopularmovies;
