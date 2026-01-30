import React from "react";
import { Img_Cdn_Url } from "../utils/constans";

const Moviecard = ({ img_url ,alt_tag,onClick}) => {
  if(!img_url) return null;
  return (

    <div className="w-48 pr-4 cursor-pointer" onClick={onClick} >
      <img alt={alt_tag} src={`${Img_Cdn_Url}${img_url}`} />
    </div>
  );
};

export default Moviecard;
