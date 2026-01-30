import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
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
        modules={[Scrollbar]}
        scrollbar={{ hide: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="banner-swiper"
      >
        <SwiperSlide><img src={banner7} alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img src={banner8} alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img src={banner7} alt="Banner 3" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
