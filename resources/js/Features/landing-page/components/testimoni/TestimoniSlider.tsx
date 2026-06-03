import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimoniData } from "../../data/testimoni/testimoni-link";
import TestimoniCard from "./TestimoniCard";
import { TESTIMONI_SWIPER_CONFIG } from "./testimoni.constant";
import type { TestimoniItem } from "./testimoni.type";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimoniSlider() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="relative px-6 md:px-16 lg:px-24">
            <button
                ref={prevRef}
                type="button"
                aria-label="Testimoni sebelumnya"
                className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-light md:left-3"
            >
                <ChevronLeft className="text-red-normal w-4 h-4" />
            </button>

            <button
                ref={nextRef}
                type="button"
                aria-label="Testimoni berikutnya"
                className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-light md:right-3"
            >
                <ChevronRight className="text-red-normal w-4 h-4" />
            </button>

            <Swiper
                modules={[Navigation, Pagination]}
                {...TESTIMONI_SWIPER_CONFIG}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                pagination={{
                    clickable: true,
                    el: ".testimoni-pagination",
                }}
                onBeforeInit={(swiper: SwiperType) => {
                    if (
                        typeof swiper.params.navigation !== "boolean" &&
                        swiper.params.navigation
                    ) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                className="pb-16"
            >
                {testimoniData.list.map((item: TestimoniItem) => (
                    <SwiperSlide key={item.name} className="h-auto">
                        <TestimoniCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="testimoni-pagination custom-pagination mt-5 flex justify-center gap-1" />
        </div>
    );
}
