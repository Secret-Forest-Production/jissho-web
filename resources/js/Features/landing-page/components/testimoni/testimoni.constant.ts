import type { SwiperOptions } from "swiper/types";

export const TESTIMONI_SWIPER_CONFIG: SwiperOptions = {
    spaceBetween: 24,
    slidesPerView: 1,
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
    },
};