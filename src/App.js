import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { galleryActions } from "./store/gallerySlice";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Countertops from "./pages/Countertops";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  // const [activeLink, setActiveLink] = useState("home");

  // const activeLinkHandler = (link) => {
  //   setActiveLink(link);
  //   // console.log(activeLink);
  // };

  useEffect(() => {
    async function startFetch() {
      try {
        const response = await fetch(
          "https://kkimage-new-default-rtdb.firebaseio.com/images.json"
        );
        if (!response.ok) {
          throw new Error("Could not fetch data!");
        }
        const data = await response.json();
        dispatch(galleryActions.fetchImages({ images: data }));
      } catch (error) {
        console.log(error);
      }
    }

    startFetch();
  }, [dispatch]);

  return (
    <Router>
      <div className="page">
        <Nav />
        <Routes>
          <Route exact path="/kkproject-2" element={<Home />} />
          <Route path="/kkproject-2/countertops" element={<Countertops />} />
          <Route path="/kkproject-2/gallery" element={<Gallery />} />
          <Route path="/kkproject-2/about" element={<About />} />
          <Route path="/kkproject-2/contact" element={<Contact />} />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
