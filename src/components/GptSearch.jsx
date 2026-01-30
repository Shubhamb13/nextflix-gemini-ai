import Gptmoviesuggestions from "./Gptmoviesuggestions";
import Gptsearchbar from "./Gptsearchbar";
import bgimg from "../assets/images/netflixbackground.jpg";
import { useSelector } from "react-redux";
import Moviepopup from "./Moviepopup";

const GptSearch = () => {
  const selectedMovies = useSelector((store) => store.gpt.selectedMovie);
  return (
    <div className="relative min-h-screen text-white">
      <img
        src={bgimg}
        alt="background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="fixed top-0 left-0 w-full h-full bg-black/70 -z-10"></div>

      <div className="relative z-10">
        <Gptsearchbar />
         <div>{selectedMovies && <Moviepopup />}</div>
        <Gptmoviesuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
