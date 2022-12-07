import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/kk_logo.png";
import "./Nav.css";

function Nav() {
  const [activeLink, setActiveLink] = useState("home");

  const activeLinkHandler = (link) => {
    setActiveLink(link);
    console.log(activeLink);
  };

  const inactiveClass = "navbar-link";
  const activeClass = "navbar-link-active";

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="company logo"></img>
      <ul className="navbar-links">
        <li>
          <NavLink
            className={activeLink === "home" ? activeClass : inactiveClass}
            onClick={() => activeLinkHandler("home")}
            to="/kkproject-2"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              activeLink === "countertops" ? activeClass : inactiveClass
            }
            onClick={() => activeLinkHandler("countertops")}
            to="/kkproject-2/countertops"
          >
            Countertops
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeLink === "gallery" ? activeClass : inactiveClass}
            onClick={() => activeLinkHandler("gallery")}
            to="/kkproject-2/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeLink === "about" ? activeClass : inactiveClass}
            onClick={() => activeLinkHandler("about")}
            to="/kkproject-2/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeLink === "contact" ? activeClass : inactiveClass}
            onClick={() => activeLinkHandler("contact")}
            to="/kkproject-2/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
