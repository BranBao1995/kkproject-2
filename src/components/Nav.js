import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/kk_logo.png";
import "./Nav.css";

function Nav(props) {
  // const [activeLink, setActiveLink] = useState("home");

  // const activeLinkHandler = (link) => {
  //   setActiveLink(link);
  //   console.log(activeLink);
  // };

  const inactiveClass = "navbar-link";
  const activeClass = "navbar-link-active";

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="company logo"></img>
      <ul className="navbar-links">
        <li>
          <NavLink
            className={props.nowActive === "home" ? activeClass : inactiveClass}
            onClick={() => props.onSetActiveLink("home")}
            to="/kkproject-2"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              props.nowActive === "countertops" ? activeClass : inactiveClass
            }
            onClick={() => props.onSetActiveLink("countertops")}
            to="/kkproject-2/countertops"
          >
            Countertops
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              props.nowActive === "gallery" ? activeClass : inactiveClass
            }
            onClick={() => props.onSetActiveLink("gallery")}
            to="/kkproject-2/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              props.nowActive === "about" ? activeClass : inactiveClass
            }
            onClick={() => props.onSetActiveLink("about")}
            to="/kkproject-2/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              props.nowActive === "contact" ? activeClass : inactiveClass
            }
            onClick={() => props.onSetActiveLink("contact")}
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
