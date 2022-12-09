import React, { useState, useEffect, useRef } from "react";
import MapWrapper from "../components/MapWrapper";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <section className="business-info-container">
        <div className="business-map-container">
          <MapWrapper />
        </div>
        <div className="business-info">
          <h1 className="business-info-title">Business Hours</h1>
          <ul className="business-info-hours">
            <li className="business-info-hours-item">
              Monday - Friday: 10AM - 5PM
            </li>
            <li className="business-info-hours-item">Saturday: 10AM - 2PM</li>
            <li className="business-info-hours-item">
              Other times available by appointments
            </li>
            <li className="business-info-hours-item">
              Address: 842 Victoria St. North, Unit 10, Kitchener On N2B 3C1
            </li>
            <li className="business-info-hours-item">Tel: 519-578-9123</li>
            <li className="business-info-hours-item">
              <a
                className="business-info-hours-email"
                href="mailto:info@kkcabinets.ca"
              >
                Email: info@kkcabinets.ca
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Contact;
