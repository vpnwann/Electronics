// components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => (
  <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
    {images.map((image, index) => (
      <div key={index}>
        <img src={image.src} className=' ' alt={image.alt} />
      </div>
    ))}
  </Carousel>
);

export default ImageCarousel;
