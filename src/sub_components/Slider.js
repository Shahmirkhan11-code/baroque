import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import About from '../page_components/About';

function Slider() {
  const navigate = useNavigate(); // This hook is used for client-side navigation

  const handleItemClick = (path) => {
    navigate(path); // Navigate to a specific route without reloading the page
  };

  return (
    <Carousel className='mb-5'>
      <Carousel.Item onClick={() => handleItemClick('/Unstitch')}>
        <img 
          className="d-block w-100"
          src="https://www.powersutra.co/cdn/shop/articles/dresses_for_straight_body_shape.jpg?v=1723966087&width=1920"
          alt="First slide"
          style={{ cursor: 'pointer' }} 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item onClick={() => handleItemClick('/Unstitch')}>
        <img 
          className="d-block w-100"
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/w/e/web-banner_1_.jpg"
          alt="Second slide"
          style={{ cursor: 'pointer' }} 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item onClick={() => handleItemClick('/Unstitch')}>
        <img 
          className="d-block w-100"
          src="https://baroque.pk/cdn/shop/files/website_banner_86b73f0b-d424-41c4-91d9-ca96af3cef62.jpg?v=1727074952&width=1600"
          alt="Third slide"
          style={{ cursor: 'pointer' }} 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
