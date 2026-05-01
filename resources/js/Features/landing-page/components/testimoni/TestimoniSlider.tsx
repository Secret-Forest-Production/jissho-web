import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimoniCard from "./TestimoniCard";
import { testimoniData } from "../../data/testimoni/testimoni-link";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimoniSlider() {
    return (
        <div className="relative px-6 md:px-16 lg:px-24">
            <div className="swiper-button-prev-custom absolute left-1 md:left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <Icon icon="lucide:chevron-left" className="text-red-normal" />
            </div>

            <div className="swiper-button-next-custom absolute right-1 md:right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <Icon icon="lucide:chevron-right" className="text-red-normal" />
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                breakpoints={{
                    1024: { slidesPerView: 2 },
                }}
                className="pb-16"
            >
                {testimoniData.list.map((item, index) => (
                    <SwiperSlide key={index} className="h-auto">
                        <TestimoniCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-pagination flex justify-center mt-5 gap-1" />
        </div>
    );
}
