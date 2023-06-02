import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image1.jpg"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Slide 1 Heading</h3>
          <p>Slide 1 description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image2.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Slide 2 Heading</h3>
          <p>Slide 2 description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image3.jpg"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Slide 3 Heading</h3>
          <p>Slide 3 description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
