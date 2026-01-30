import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-20 text-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div
        className="
          relative
          h-full
          flex flex-col justify-center
          px-4 sm:px-8 md:px-12
          pt-24 sm:pt-32 md:pt-0
          max-w-full sm:max-w-xl md:max-w-2xl
        "
      >
        {/* Movie Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
          {title}
        </h1>

        {/* Movie Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="flex items-center justify-center gap-2 bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            <FaPlay className="text-sm sm:text-base" />
            Play
          </button>

          <button className="flex items-center justify-center gap-2 bg-gray-500/60 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-gray-500 transition">
            <AiOutlineInfoCircle className="text-lg sm:text-xl" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videotitle;
