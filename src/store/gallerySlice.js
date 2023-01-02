import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: null,
};

// {
//     cabinets: {
//       all: [],
//       bedroom: [],
//       kitchen: [],
//       livingroom: [],
//     },
//     countertops: {
//       all: [],
//       bathroom: [],
//       kitchen: [],
//       livingroom: [],
//     },
//   },

const gallerySlice = createSlice({
  name: "gallery",
  initialState: initialState,
  reducers: {
    fetchImages(state, action) {
      state.images = action.payload.images;
    },
  },
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice;
