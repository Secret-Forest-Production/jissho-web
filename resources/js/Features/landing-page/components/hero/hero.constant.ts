import type { SwiperOptions } from "swiper/types";

export const HERO_SWIPER_CONFIG: SwiperOptions = {
    slidesPerView: 1.15,
    centeredSlides: true,
    spaceBetween: 16,
    speed: 1200,
    grabCursor: true,
    touchRatio: 1,
    resistanceRatio: 0.85,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        waitForTransition: true,
    },
    pagination: {
        clickable: true,
    },
};
