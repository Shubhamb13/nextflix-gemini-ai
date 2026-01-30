import { useSelector } from "react-redux";
import Videobackground from "./Videobackground";
import Videotitle from "./Videotitle";

export default function Maincontainer() {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const movie = movies[0];
  const { original_title, overview, id } = movie;

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Background Video */}
      <Videobackground movie_id={id} />

      {/* Overlay Content */}
      <Videotitle title={original_title} overview={overview} />
    </section>
  );
}
