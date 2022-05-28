import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/Banner/car1.jpg'
import banner2 from '../../../images/Banner/car2.jpg'
import banner3 from '../../../images/Banner/car3.jpg'

const Slider = () => {
  return (
   
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={banner1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
};

export default Slider;
