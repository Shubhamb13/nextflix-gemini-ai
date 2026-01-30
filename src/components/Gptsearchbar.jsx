import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/lang";
import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { Gemini_Api_Key, options } from "../utils/constans";
import { addGptMoviesResult, startLoading } from "../utils/gptSlice";

const Gptsearchbar = () => {
  const Language = useSelector((store) => store.lang.lang);
  const SearcValue = useRef(null);
  const dispatch = useDispatch();

  const MovieList = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleClick = async () => {
    dispatch(startLoading());

    const searchText = SearcValue.current.value.trim();
    if (!searchText) return;

    const query = `
Act as a movie recommendation system.
Suggest 5 movies for this query: ${searchText}.
Only return movie names, comma separated.
`;

    const ai = new GoogleGenAI({ apiKey: Gemini_Api_Key });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
    });

    const Recommended_Movies = response.text
      .split(",")
      .map((movie) => movie.trim());

    const tmdb_results = await Promise.all(
      Recommended_Movies.map((movie) => MovieList(movie))
    );

    dispatch(
      addGptMoviesResult({
        MoviesNames: Recommended_Movies,
        gptResults: tmdb_results,
      })
    );

    SearcValue.current.value = "";
  };

  return (
    <div className="flex justify-center mt-36 sm:mt-32 px-3 sm:px-4">
      <div
        className="
          w-full
          max-w-md sm:max-w-xl md:max-w-2xl
          bg-black/70
          backdrop-blur-md
          p-4 sm:p-6
          rounded-xl
          shadow-xl
          border border-gray-700
        "
      >
        {/* Title */}
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">
          {lang[Language].title}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-center text-xs sm:text-sm mb-5 sm:mb-6">
          {lang[Language].subtitle}
        </p>

        {/* Search Form */}
        <form
          className="flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={SearcValue}
            type="text"
            placeholder={lang[Language].gptSearchPlaceHolder}
            className="
              w-full
              px-4 py-3
              rounded-lg
              bg-gray-900
              text-white
              placeholder-gray-400
              text-sm sm:text-base
              focus:outline-none
              focus:ring-2
              focus:ring-red-600
            "
          />

          <button
            onClick={handleClick}
            className="
              w-full sm:w-auto
              px-6 py-3
              bg-red-600
              hover:bg-red-700
              transition-all
              rounded-lg
              text-white
              text-sm sm:text-base
              font-semibold
            "
          >
            {lang[Language].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Gptsearchbar;
