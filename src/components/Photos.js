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
  //   let gallery = quartz_images.map((image) => {
  //     return (
  //       <div
  //         className="image-container"
  //         key={image.id}
  //         onClick={() => showBackdropHandler(image.image)}
  //       >
  //         <img
  //           className="image"
  //           src={image.image}
  //           alt=""
  //         ></img>
  //       </div>
  //     );
  //   });

  let backdrop = (
    <div className="image-backdrop" onClick={hideBackdropHandler}>
      <img className="image-backdrop-image" src={backdropImage} alt=""></img>
    </div>
  );

  return (
    <section className="quartz-gallery">
      {/* {gallery} */}
      {showBackdrop ? backdrop : ""}
    </section>
  );
}

export default Photos;
