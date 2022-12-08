import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Countertops from "./pages/Countertops";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  const activeLinkHandler = (link) => {
    setActiveLink(link);
    console.log(activeLink);
  };

  return (
    <Router>
      <div className="page">
        <Nav onSetActiveLink={activeLinkHandler} nowActive={activeLink} />
        <Routes>
          <Route
            exact
            path="/kkproject-2/"
            element={<Home onSetActiveLink={activeLinkHandler} />}
          />
          <Route path="/kkproject-2/countertops" element={<Countertops />} />
          <Route path="/kkproject-2/gallery" element={<Gallery />} />
          <Route path="/kkproject-2/about" element={<About />} />
          <Route path="/kkproject-2/contact" element={<Contact />} />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
        <Footer onSetActiveLink={activeLinkHandler} />
      </div>
    </Router>
  );
}

export default App;
