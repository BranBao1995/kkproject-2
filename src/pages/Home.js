import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import firstPhoto from "../images/Home Carousel/1.jpg";
import secondPhoto from "../images/Home Carousel/2.jpg";
import thirdPhoto from "../images/Home Carousel/3.jpg";
import fourthPhoto from "../images/Home Carousel/4.jpg";
import fifthPhoto from "../images/Home Carousel/5.jpg";
import countertop from "../images/countertop.jpg";
import cabinet from "../images/cabinet.jpg";
import value_logo from "../images/intro_logo.jpg";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <Carousel interval={3000} className="carousel">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={firstPhoto}
            alt="First slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-caption-title">
              Welcome to K&K Cabinets & Countertops
            </h3>
            <p className="carousel-caption-text">
              Top quality cabinets & countertops for your beloved homes.
              Appreciated by thousands of customers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={secondPhoto}
            alt="First slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-caption-title">
              Welcome to K&K Cabinets & Countertops
            </h3>
            <p className="carousel-caption-text">
              Top quality cabinets & countertops for your beloved homes.
              Appreciated by thousands of customers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={thirdPhoto}
            alt="First slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-caption-title">
              Welcome to K&K Cabinets & Countertops
            </h3>
            <p className="carousel-caption-text">
              Top quality cabinets & countertops for your beloved homes.
              Appreciated by thousands of customers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={fourthPhoto}
            alt="First slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-caption-title">
              Welcome to K&K Cabinets & Countertops
            </h3>
            <p className="carousel-caption-text">
              Top quality cabinets & countertops for your beloved homes.
              Appreciated by thousands of customers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={fifthPhoto}
            alt="First slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-caption-title">
              Welcome to K&K Cabinets & Countertops
            </h3>
            <p className="carousel-caption-text">
              Top quality cabinets & countertops for your beloved homes.
              Appreciated by thousands of customers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="home-mid">
        <div className="mid-row">
          <p className="mid-row-text">
            K&K is a full custom cabinet design studio and shop located in
            Kitchener Waterloo, Ontario. Whether you are renovating, building or
            looking to add some new built in cabinetry or vanities to your
            space, K&K is your answer to making custom affordable.
          </p>
          <div className="mid-row-image-container">
            <img
              className="mid-row-image"
              src={countertop}
              alt="countertop"
            ></img>
            <div className="mid-row-image-hover">
              <Link
                className="mid-row-link"
                to="/kkproject-2/countertops"
                onClick={() => props.onSetActiveLink("countertops")}
              >
                Countertops
              </Link>
            </div>
          </div>
        </div>
        <div className="mid-row">
          <div className="mid-row-logo-container">
            <img
              className="mid-row-logo"
              src={value_logo}
              alt="value logo"
            ></img>
          </div>

          <div className="mid-row-image-container">
            <img className="mid-row-image" src={cabinet} alt="cabinet"></img>
            <div className="mid-row-image-hover">
              <Link
                className="mid-row-link"
                to="/kkproject-2/gallery"
                onClick={() => props.onSetActiveLink("gallery")}
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
