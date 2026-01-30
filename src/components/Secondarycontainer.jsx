import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import Moviepopup from "./Moviepopup";

const Secondarycontainer = () => {
  const movies = useSelector((state) => state.movies);
  const selectedMovies = useSelector((store) => store.gpt.selectedMovie);

  return (
    <div className="">
      <div className=" -mt-52 relative z-30 md:pl-6">
        <div>{selectedMovies && <Moviepopup />}</div>
        <Movielist title="Now Playing Movies" movies={movies.nowPlayingMovies} />
        <Movielist title="Popular" movies={movies.PopularMovies} />
        <Movielist title="Top Rated" movies={movies.TopRatedMovies} />
        <Movielist title="Upcoming Movies" movies={movies.UpcomingMovies} />
      </div>
    </div>
  );
};
export default Secondarycontainer;



