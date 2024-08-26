"use client"
import React, { useRef } from 'react'
import TestiominalCard from './testiominal.card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Testiominals = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className="w-full bg-[#1A1A1A] min-h-[500px] flex flex-col items-center xl:py-[132px] py-[40px]">
            <div className="w-11/12">
                <div className="flex justify-between">
                    <p className="text-[#FFFFFF7A] font-syn mb-[24px]">About me</p>
                    <div className="custom-navigation flex flex-row gap-[10px]">
                        <button ref={prevRef} className="swiper-button-prev-custom"></button>
                        <button ref={nextRef} className="swiper-button-next-custom"></button>
                    </div>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    modules={[Navigation]}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        // Mobil telefonlar uchun
                        320: {
                            slidesPerView: 1,
                        },
                        // Tabletlar uchun
                        640: {
                            slidesPerView: 2,
                        },
                        // Katta ekranlar uchun
                        1024: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide><TestiominalCard /></SwiperSlide>
                    <SwiperSlide><TestiominalCard /></SwiperSlide>
                    <SwiperSlide><TestiominalCard /></SwiperSlide>
                    <SwiperSlide><TestiominalCard /></SwiperSlide>
                    <SwiperSlide><TestiominalCard /></SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default Testiominals