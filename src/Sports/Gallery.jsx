import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./Gallery.css"; // Import the CSS
import image1 from "../assets/image1copy.jpg";
import image2 from "../assets/image1copy.jpg";
import image3 from "../assets/image3copy.jpg";
import image4 from "../assets/image4copy.jpg";


SwiperCore.use([EffectCoverflow, Pagination]);

const Gallery = () => {
  const images = [
    { src: image1, number: "01" },
    { src: image2, number: "02" },
    { src: image3, number: "03" },
    { src: image4, number: "04" },
    { src: image1, number: "05" },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-content"
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            >
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
