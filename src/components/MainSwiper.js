import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

export default function MainSwiper() {
    return (
        <>
            <Swiper
                className="mySwiper"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <img src="/images/banner.png" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banner1.png" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banner2.png" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banner3.png" alt="banner" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
