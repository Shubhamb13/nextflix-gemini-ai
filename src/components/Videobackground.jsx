import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const Videobackground = ({ movie_id }) => {
  const trailerVideo = useSelector((state) => state.movies.MovieTrailer);

  useMovieTrailer({ movie_id });

  if (!trailerVideo?.key) return null;

  return (
    <div
      className="
        relative
        w-screen
        h-[60vh]
        sm:h-[70vh]
        md:h-[80vh]
        lg:h-[100dvh]
        -z-30
        overflow-hidden
        pointer-events-none
      "
    >
      <iframe
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2

          w-[170vw] h-[170vh]
          
        "
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
    </div>
  );
};

export default Videobackground;
