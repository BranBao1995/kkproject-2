import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <nav className="footer-nav">
        <NavLink
          className="footer-nav-link"
          to="/kkproject-2"
          onClick={() => props.onSetActiveLink("home")}
        >
          Home
        </NavLink>
        <NavLink
          className="footer-nav-link"
          to="/kkproject-2/countertops"
          onClick={() => props.onSetActiveLink("countertops")}
        >
          Countertops
        </NavLink>
        <NavLink
          className="footer-nav-link"
          to="/kkproject-2/gallery"
          onClick={() => props.onSetActiveLink("gallery")}
        >
          Gallery
        </NavLink>
        <NavLink
          className="footer-nav-link"
          to="/kkproject-2/about"
          onClick={() => props.onSetActiveLink("about")}
        >
          About
        </NavLink>
        <NavLink
          className="footer-nav-link"
          to="/kkproject-2/contact"
          onClick={() => props.onSetActiveLink("contact")}
        >
          Contact
        </NavLink>
      </nav>
      <section className="footer-socials">
        <p className="footer-copyright">
          © K&K Cabinets & Countertops. All rights reserved
        </p>
        <div className="footer-icons">
          <a
            className="footer-icon-link"
            href="http://facebook.com/KKcabinetskw"
          >
            <FaFacebook />
          </a>
          <a
            className="footer-icon-link"
            href="mailto:kkcabinets2000@gmail.com"
          >
            <MdEmail />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
