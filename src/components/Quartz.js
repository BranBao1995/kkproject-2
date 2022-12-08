import React, { useState } from "react";
import quartz_1 from "../images/quartz/quartz_1.jpg";
import quartz_2 from "../images/quartz/quartz_2.jpg";
import quartz_3 from "../images/quartz/quartz_3.jpg";
import quartz_4 from "../images/quartz/quartz_4.jpg";
import quartz_5 from "../images/quartz/quartz_5.jpg";
import quartz_6 from "../images/quartz/quartz_6.jpg";
import quartz_7 from "../images/quartz/quartz_7.jpg";
import quartz_8 from "../images/quartz/quartz_8.jpg";
import "./Quartz.css";

function Quartz(props) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [backdropImage, setBackdropImage] = useState(null);

  let quartz_images = [
    { id: "quartz_1", image: quartz_1 },
    { id: "quartz_2", image: quartz_2 },
    { id: "quartz_3", image: quartz_3 },
    { id: "quartz_4", image: quartz_4 },
    { id: "quartz_5", image: quartz_5 },
    { id: "quartz_6", image: quartz_6 },
    { id: "quartz_7", image: quartz_7 },
    { id: "quartz_8", image: quartz_8 },
  ];

  const showBackdropHandler = (image) => {
    setShowBackdrop(true);
    setBackdropImage(image);
  };

  const hideBackdropHandler = () => {
    setShowBackdrop(false);
    setBackdropImage(null);
  };
  let gallery = quartz_images.map((image) => {
    return (
      <div
        className="quartz-gallery-image-container"
        key={image.id}
        onClick={() => showBackdropHandler(image.image)}
      >
        <img
          className="quartz-gallery-image"
          src={image.image}
          alt="quartz sample"
        ></img>
      </div>
    );
  });

  let backdrop = (
    <div
      className="quartz-gallery-image-backdrop"
      onClick={hideBackdropHandler}
    >
      <img
        className="quartz-gallery-image-backdrop-image"
        src={backdropImage}
        alt="quartz sample backdrop"
      ></img>
    </div>
  );

  return (
    <section className="quartz-gallery">
      {gallery}
      {showBackdrop ? backdrop : ""}
    </section>
  );
}

export default Quartz;
