import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: null,
  toDisplay: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState: initialState,
  reducers: {
    fetchImages(state, action) {
      state.images = action.payload.images;
    },
    setImagesToDisplay(state, action) {
      state.toDisplay = action.payload.images;
    },
  },
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice;
