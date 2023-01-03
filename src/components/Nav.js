import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/kk_logo.png";
import "./Nav.css";

function Nav(props) {
  let inactiveClass = "navbar-link";
  let activeClass = "navbar-link-active";

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="company logo"></img>
      <ul className="navbar-links">
        <li>
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
            to="/kkproject-2"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
            to="/kkproject-2/countertops"
          >
            Countertops
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
            to="/kkproject-2/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
            to="/kkproject-2/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
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
