import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Images = () => {
    const images = [
        { src: "/images/noffer1.webp", alt: "Offer 1" },
        { src: "/images/noffer2.webp", alt: "Offer 2" },
        { src: "/images/noffer3.webp", alt: "Offer 3" },
        { src: "/images/noffer4.webp", alt: "Offer 4" },
        { src: "/images/noffer5.webp", alt: "Offer 5" }

      ];
    
      // Settings for react-slick
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <div style={{ width: '1355px', margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} style={{ width: '100%', height: '400px', objectFit: 'cover' }}  />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Images