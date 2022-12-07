import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstPhoto from "../images/Home Carousel/1.jpg";
import secondPhoto from "../images/Home Carousel/2.jpg";
import thirdPhoto from "../images/Home Carousel/3.jpg";
import fourthPhoto from "../images/Home Carousel/4.jpg";
import fifthPhoto from "../images/Home Carousel/5.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Carousel interval={null} className="carousel">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={firstPhoto}
            alt="First slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-caption-title">First slide label</h3>
            <p className="carousel-caption-text">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
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
            <h3 className="carousel-caption-title">First slide label</h3>
            <p className="carousel-caption-text">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
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
            <h3 className="carousel-caption-title">First slide label</h3>
            <p className="carousel-caption-text">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
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
            <h3 className="carousel-caption-title">First slide label</h3>
            <p className="carousel-caption-text">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
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
            <h3 className="carousel-caption-title">First slide label</h3>
            <p className="carousel-caption-text">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
