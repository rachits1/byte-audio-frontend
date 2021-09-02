import React from 'react';
import './HeroSection.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])


function HeroSection() {
    return (
    <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{clickable:true}}
        scrollbar={{draggable:true}}
        autoplay = {{delay: 4000}}
        className="hero-img-container"
    >
        <SwiperSlide>
            <img src="images/img2.jpg" alt="img2"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/img6.jpg" alt="img2"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="images/img5.jpg" alt="img2"/>
        </SwiperSlide>
    </Swiper>
    )
}

export default HeroSection
