import React from 'react';
// import { Carousel } from 'react-bootstrap';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tempImage from '../assets/images/carousel.png';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
//  return (<div/>)
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tempImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tempImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tempImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

// const MyCarousel = () => {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="image1.jpg"
//           alt="Slide 1"
//         />
//         <Carousel.Caption>
//           <h3>Slide 1 Heading</h3>
//           <p>Slide 1 description</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="image2.jpg"
//           alt="Slide 2"
//         />
//         <Carousel.Caption>
//           <h3>Slide 2 Heading</h3>
//           <p>Slide 2 description</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="image3.jpg"
//           alt="Slide 3"
//         />
//         <Carousel.Caption>
//           <h3>Slide 3 Heading</h3>
//           <p>Slide 3 description</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default MyCarousel;
