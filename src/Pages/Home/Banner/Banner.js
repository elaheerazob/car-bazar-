import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../Image/Slider/car11.jpg";
import slider2 from "../../../Image/Slider/car10.jpg";
import slider3 from "../../../Image/Slider/car9.jpg";
import slider4 from "../../../Image/Slider/car6.jpg";
import slider5 from "../../../Image/Slider/car8.jpg";
import slider6 from "../../../Image/Slider/car2.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider5}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider6}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
