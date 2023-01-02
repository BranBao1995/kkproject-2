import React, { useState } from "react";

import "./Photos.css";

function Photos(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [backdropImage, setBackdropImage] = useState(null);

  const showBackdropHandler = (image) => {
    setShowBackdrop(true);
    setBackdropImage(image);
  };

  const hideBackdropHandler = () => {
    setShowBackdrop(false);
    setBackdropImage(null);
  };

  let gallery = Object.keys(props.photos).map((el) => {
    return (
      <div
        className="gallery-image-container"
        key={props.photos[el].id}
        onClick={() => showBackdropHandler(props.photos[el].image_url)}
      >
        <img
          className="gallery-image"
          src={props.photos[el].image_url}
          alt=""
        ></img>
      </div>
    );
  });

  let backdrop = (
    <div className="gallery-image-backdrop" onClick={hideBackdropHandler}>
      <img
        className="gallery-image-backdrop-image"
        src={backdropImage}
        alt=""
      ></img>
    </div>
  );

  return (
    <section className="gallery-gallery">
      {gallery}
      {showBackdrop ? backdrop : ""}
    </section>
  );
}

export default Photos;
