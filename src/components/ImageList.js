import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(({ urls, alt_description, id }) => {
    return <ImageCard image={urls.regular} alt={alt_description} key={id} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
