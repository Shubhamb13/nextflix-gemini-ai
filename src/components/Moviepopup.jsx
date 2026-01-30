import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useSelectedmovie from "../hooks/useSelectedmovie";
import { clearSelectedMovies } from "../utils/gptSlice";

const Moviepopup = () => {
  const dispatch = useDispatch();
  const { selectedMovie, selectedMovieTrailer } = useSelector(
    (store) => store.gpt,
  );

  useSelectedmovie(selectedMovie?.id);
  if (!selectedMovieTrailer) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-black w-[800px] h-[450px] rounded-lg relative overflow-hidden">
        {/* ❌ Close */}
        <button
          className="absolute top-10 right-3 z-20
                     w-5 h-5 flex items-center justify-center
                     rounded-full bg-black/70 text-white
                     hover:bg-gray-400 hover:scale-110
                     transition-all duration-200"
          onClick={() => dispatch(clearSelectedMovies())}
        >
          ✖
        </button>

        {/* 🎬 Trailer */}
        {selectedMovieTrailer?.key ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${selectedMovieTrailer.key}?autoplay=1&mute=1&vq=hd1080`}
            title="Movie Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className="text-white flex items-center justify-center h-full">
            Loading trailer...
          </div>
        )}
      </div>
    </div>
  );
};

export default Moviepopup;
