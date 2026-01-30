export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";
export const profile_avatar =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};
export const Img_Cdn_Url = "https://image.tmdb.org/t/p/w500";

export const Support_Lang = [
  { identifire: "en", name: "English" },
  { identifire: "hindi", name: "Hindi" },
  { identifire: "marathi", name: "Marathi" },
];

export const Gemini_Api_Key = import.meta.env.VITE_GEMINI_KEY;
