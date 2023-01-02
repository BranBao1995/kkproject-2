import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { galleryActions } from "../store/gallerySlice";
import Photos from "../components/Photos";
import "./Gallery.css";

function Gallery() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.gallery.images);

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

  useEffect(() => {}, [images]);

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
          onClick={() => setTopFilterHandler("cabinets")}
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
          onClick={() => setTopFilterHandler("countertops")}
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
            onClick={() => setLowFilterHandler("all")}
          >
            All
          </div>
          <div
            className={
              lowFilter.category === "bedroom"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => setLowFilterHandler("bedroom")}
          >
            Bedroom
          </div>
          <div
            className={
              lowFilter.category === "kitchen"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => setLowFilterHandler("kitchen")}
          >
            Kitchen
          </div>
          <div
            className={
              lowFilter.category === "livingroom"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => setLowFilterHandler("livingroom")}
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
            onClick={() => setLowFilterHandler("all")}
          >
            All
          </div>
          <div
            className={
              lowFilter.category === "bathroom"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => setLowFilterHandler("bathroom")}
          >
            Bathroom
          </div>
          <div
            className={
              lowFilter.category === "kitchen"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => setLowFilterHandler("kitchen")}
          >
            Kitchen
          </div>
          <div
            className={
              lowFilter.category === "livingroom"
                ? "filter-low-level-button-selected"
                : "filter-low-level-button"
            }
            onClick={() => setLowFilterHandler("livingroom")}
          >
            Living Room
          </div>
        </section>
      )}
      {/* <Photos /> */}
    </div>
  );
}

export default Gallery;
