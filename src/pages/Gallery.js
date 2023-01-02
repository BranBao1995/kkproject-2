import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { galleryActions } from "../store/gallerySlice";
import Photos from "../components/Photos";
import "./Gallery.css";

function Gallery() {
  // states managed by redux
  const dispatch = useDispatch();
  const images = useSelector((state) => state.gallery.images);
  const imagesToDisplay = useSelector((state) => state.gallery.toDisplay);

  // local UI states
  const [topFilter, setTopFilter] = useState("cabinets");
  const [lowFilter, setLowFilter] = useState({
    selected: "cabinets",
    category: "all",
  });

  const setTopFilterHandler = (category) => {
    setTopFilter(category);
    setLowFilter({ selected: category, category: "all" });
  };

  const setLowFilterHandler = (category) => {
    setLowFilter({ ...lowFilter, category: category });
  };

  const renderImagesCabinets = (category) => {
    const photos = images.cabinets[category];
    dispatch(galleryActions.setImagesToDisplay({ images: photos }));
  };

  const renderImagesCountertops = (category) => {
    const photos = images.countertops[category];
    dispatch(galleryActions.setImagesToDisplay({ images: photos }));
  };

  useEffect(() => {
    if (images) {
      const photos = images.cabinets.all;
      dispatch(galleryActions.setImagesToDisplay({ images: photos }));
    }

    console.log(imagesToDisplay);
  }, [images]);

  let gallery = imagesToDisplay;

  return (
    <div className="gallery">
      <section className="filter-top-level">
        <div
          className={
            topFilter === "cabinets"
              ? "filter-top-level-button-selected"
              : "filter-top-level-button"
          }
          id="btn-cabinets"
          onClick={() => {
            setTopFilterHandler("cabinets");
            renderImagesCabinets("all");
          }}
        >
          Cabinets
        </div>
        <div
          className={
            topFilter === "countertops"
              ? "filter-top-level-button-selected"
              : "filter-top-level-button"
          }
          id="btn-countertops"
          onClick={() => {
            setTopFilterHandler("countertops");
            renderImagesCountertops("all");
          }}
        >
          Countertops
        </div>
      </section>
      {lowFilter.selected === "cabinets" && (
        <section className="filter-low-level" id="filter-low-level-cabinets">
          <div
            className={
              lowFilter.category === "all"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => {
              setLowFilterHandler("all");
              renderImagesCabinets("all");
            }}
          >
            All
          </div>
          <div
            className={
              lowFilter.category === "bedroom"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => {
              setLowFilterHandler("bedroom");
              renderImagesCabinets("bedroom");
            }}
          >
            Bedroom
          </div>
          <div
            className={
              lowFilter.category === "kitchen"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => {
              setLowFilterHandler("kitchen");
              renderImagesCabinets("kitchen");
            }}
          >
            Kitchen
          </div>
          <div
            className={
              lowFilter.category === "livingroom"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => {
              setLowFilterHandler("livingroom");
              renderImagesCabinets("livingroom");
            }}
          >
            Living Room
          </div>
        </section>
      )}
      {lowFilter.selected === "countertops" && (
        <section className="filter-low-level" id="filter-low-level-countertops">
          <div
            className={
              lowFilter.category === "all"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => {
              setLowFilterHandler("all");
              renderImagesCountertops("all");
            }}
          >
            All
          </div>
          <div
            className={
              lowFilter.category === "bathroom"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => {
              setLowFilterHandler("bathroom");
              renderImagesCountertops("bathroom");
            }}
          >
            Bathroom
          </div>
          <div
            className={
              lowFilter.category === "kitchen"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => {
              setLowFilterHandler("kitchen");
              renderImagesCountertops("kitchen");
            }}
          >
            Kitchen
          </div>
          <div
            className={
              lowFilter.category === "livingroom"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => {
              setLowFilterHandler("livingroom");
              renderImagesCountertops("livingroom");
            }}
          >
            Living Room
          </div>
        </section>
      )}
      {imagesToDisplay !== null && <Photos photos={gallery} />}
    </div>
  );
}

export default Gallery;
