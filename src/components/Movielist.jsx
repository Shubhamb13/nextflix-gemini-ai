import React from "react";
import Moviecard from "./Moviecard";
import { useDispatch } from "react-redux";
import { addselectedMovie } from "../utils/gptSlice";
import Moviepopup from "./Moviepopup";

const Movielist = ({ title, movies }) => {
  const dispatch = useDispatch();
  
  // console.log(selectedMovies);
  return (
    <div className="p-6">
      <div className="text-white py-4 text-2xl">{title}</div>
      <div className="flex overflow-x-auto hide-scrollbar">
        <div className="flex">
          {movies?.map((movies) => (
            <Moviecard
              key={movies.id}
              img_url={movies?.poster_path}
              alt_tag={movies?.title}
              onClick={() => dispatch(addselectedMovie(movies))}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Movielist;
