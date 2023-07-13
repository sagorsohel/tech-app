
'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css/bundle";
import mainSlider from "@/data/mainSlider";
import SingleSlider from "../SingleSlider/SingleSlider";

const HeroSection = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        className="main-slider"
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        loop
        autoplay
        slidesPerView={1}
        navigation
      >
        {
            mainSlider.map((slider)=>
            <SwiperSlide key={slider.id}><SingleSlider slider={slider} /></SwiperSlide>
            )
        }
        
        
       
      </Swiper>
    </div>
  );
};

export default HeroSection;
