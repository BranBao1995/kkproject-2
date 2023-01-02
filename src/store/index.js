import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallerySlice";

const store = configureStore({
  reducer: { gallery: gallerySlice.reducer },
});

export default store;
