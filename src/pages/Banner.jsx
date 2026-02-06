import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './Banner.css';

// import banner1 from "../assets/images/banner-1.jpg";
// import banner2 from "../assets/images/banner-2.jpg";
// import banner3 from "../assets/images/banner-3.jpg";
import banner7 from "../assets/images/banner-7.png";
import banner8 from "../assets/images/banner-8.png";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <Swiper
        modules={[Scrollbar, Autoplay]}
        scrollbar={{ hide: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="banner-swiper"
      >
        <SwiperSlide><img src={banner7} alt="Summer Collection" /></SwiperSlide>
        <SwiperSlide><img src={banner8} alt="New Arrivals" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
