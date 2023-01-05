import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaCheckCircle } from "react-icons/fa";
import firstPhoto from "../images/About Carousel/1.jpg";
import secondPhoto from "../images/About Carousel/2.jpg";
import thirdPhoto from "../images/About Carousel/3.jpg";
import fourthPhoto from "../images/About Carousel/4.jpg";
import fifthPhoto from "../images/About Carousel/5.jpg";
import designer from "../images/designer.jpg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <Carousel interval={3000} className="carousel">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={firstPhoto}
            alt="First slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption carousel-caption-about">
            <h3 className="carousel-caption-title carousel-caption-title-about">
              Custom Shop Because Local Matters
            </h3>
            <p className="carousel-caption-text carousel-caption-text-about">
              Our custom shop has a group of skilled craftspeople hand crafting
              the cabinetry for your home. With our own CNC machine and spray
              booth we are able to control our quality and lead times which
              benefits our clients. We also source our material locally wherever
              possible investing into our community where we live, work and
              play. We love being part of our community and seeing your dreams
              come true!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={secondPhoto}
            alt="Second slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption carousel-caption-about">
            <h3 className="carousel-caption-title carousel-caption-title-about">
              Custom Shop Because Local Matters
            </h3>
            <p className="carousel-caption-text carousel-caption-text-about">
              Our custom shop has a group of skilled craftspeople hand crafting
              the cabinetry for your home. With our own CNC machine and spray
              booth we are able to control our quality and lead times which
              benefits our clients. We also source our material locally wherever
              possible investing into our community where we live, work and
              play. We love being part of our community and seeing your dreams
              come true!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={thirdPhoto}
            alt="Third slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption carousel-caption-about">
            <h3 className="carousel-caption-title carousel-caption-title-about">
              Custom Shop Because Local Matters
            </h3>
            <p className="carousel-caption-text carousel-caption-text-about">
              Our custom shop has a group of skilled craftspeople hand crafting
              the cabinetry for your home. With our own CNC machine and spray
              booth we are able to control our quality and lead times which
              benefits our clients. We also source our material locally wherever
              possible investing into our community where we live, work and
              play. We love being part of our community and seeing your dreams
              come true!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={fourthPhoto}
            alt="Fourth slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption carousel-caption-about">
            <h3 className="carousel-caption-title carousel-caption-title-about">
              Custom Shop Because Local Matters
            </h3>
            <p className="carousel-caption-text carousel-caption-text-about">
              Our custom shop has a group of skilled craftspeople hand crafting
              the cabinetry for your home. With our own CNC machine and spray
              booth we are able to control our quality and lead times which
              benefits our clients. We also source our material locally wherever
              possible investing into our community where we live, work and
              play. We love being part of our community and seeing your dreams
              come true!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={fifthPhoto}
            alt="Fifth slide"
          />
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-caption carousel-caption-about">
            <h3 className="carousel-caption-title carousel-caption-title-about">
              Custom Shop Because Local Matters
            </h3>
            <p className="carousel-caption-text carousel-caption-text-about">
              Our custom shop has a group of skilled craftspeople hand crafting
              the cabinetry for your home. With our own CNC machine and spray
              booth we are able to control our quality and lead times which
              benefits our clients. We also source our material locally wherever
              possible investing into our community where we live, work and
              play. We love being part of our community and seeing your dreams
              come true!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="whyus">
        <h1 className="whyus-h1">Why Us?</h1>
        <div className="whyus-reasons">
          <div className="whyus-reason">
            <FaCheckCircle className="whyus-reason-icon" />
            <p className="whyus-reason-p">
              You get to meet with one of our designers and tell us what you
              really want.
            </p>
          </div>
          <div className="whyus-reason">
            <FaCheckCircle className="whyus-reason-icon" />
            <p className="whyus-reason-p">
              Measurements, manufacturing, installation. The same technician
              follows up with you throughout the process to avoid confusion.
            </p>
          </div>
          <div className="whyus-reason">
            <FaCheckCircle className="whyus-reason-icon" />
            <p className="whyus-reason-p">
              We make our own doors and have our own spray booth, we control
              much of the process for our clients to have flexible delivery
              dates.
            </p>
          </div>
          <div className="whyus-reason">
            <FaCheckCircle className="whyus-reason-icon" />
            <p className="whyus-reason-p">
              Every purchase helps contribute to the Canadian economy, employ
              local people, and support local businesses.
            </p>
          </div>
        </div>
      </section>
      <section className="designer">
        <h1 className="designer-title">Meet Our Lead Designer</h1>
        <div className="designer-row">
          <div className="designer-image-container">
            <img className="designer-image" src={designer} alt="designer"></img>
          </div>
        </div>
        <p className="designer-text">
          Zenia Horton has been designing award-winning kitchens, baths, and
          custom built ins for residential and commercial clients throughout
          Ontario for the past 20 years. Zenia is a real designer- an
          artist..which is really just a nice way of saying she's kind of
          quirky! Working with Zen is entertaining, enlightening and engaging.
          Her passion and artistry is captured in every design and exceeding
          your expectations is her mission. Her goal as your designer is to
          maximize the functionality, beauty and enjoyment of your space; she
          has a reputation for thinking outside-the-box and consistently
          delivers best in class solutions and "wow-factor" design. "Being able
          to work alongside the skilled craftsmen and installers at K&K to help
          deliver your vision has been a dream come true." So isn't it about
          time that you brought balance, simplicity and some "zen" into your
          space?
        </p>
      </section>
    </div>
  );
}

export default About;
