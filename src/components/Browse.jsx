import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularmovies from "../hooks/usePopularmovies";
import useTopratedmovies from "../hooks/useTopratedmovies";
import useUpcomingmovies from "../hooks/useUpcomingmovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
  const GptSearchstatus = useSelector((state) => state.gpt.Gptstatus);
  // console.log(GptSearchstatus);
  useNowPlayingMovies();
  usePopularmovies();
  useTopratedmovies();
  useUpcomingmovies();

  return (
    <div>
      <Header />
      {GptSearchstatus ? (
        <GptSearch />
      ) : (
        <div className="relative z-10">
          <Maincontainer />
          <Secondarycontainer />
        </div>
      )}
    </div>
  );
};
export default Browse;
