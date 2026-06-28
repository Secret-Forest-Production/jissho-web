import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import TestimoniCard from "./TestimoniCard";
import { TESTIMONI_SWIPER_CONFIG } from "./testimoni.constant";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimoniSliderProps {
    testimonials: any[];
}

export default function TestimoniSlider({
    testimonials = [],
}: TestimoniSliderProps) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="relative px-6 md:px-16 lg:px-24">
            {testimonials.length > 1 && (
                <>
                    <button
                        type="button"
                        aria-label="Testimoni sebelumnya"
                        onClick={() => swiper?.slidePrev()}
                        className="absolute left-1 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-white shadow-md transition active:scale-95 hover:bg-red-light md:left-3"
                    >
                        <ChevronLeft className="h-5 w-5 text-red-normal" />
                    </button>

                    <button
                        type="button"
                        aria-label="Testimoni berikutnya"
                        onClick={() => swiper?.slideNext()}
                        className="absolute right-1 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-white shadow-md transition active:scale-95 hover:bg-red-light md:right-3"
                    >
                        <ChevronRight className="h-5 w-5 text-red-normal" />
                    </button>
                </>
            )}

            <Swiper
                modules={[Pagination]}
                {...TESTIMONI_SWIPER_CONFIG}
                touchStartPreventDefault={false}
                touchMoveStopPropagation={false}
                pagination={{
                    clickable: true,
                    el: ".testimoni-pagination",
                }}
                onSwiper={setSwiper}
                className="cursor-grab active:cursor-grabbing pb-16"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id} className="flex h-auto">
                        <TestimoniCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {testimonials.length > 1 && (
                <div className="testimoni-pagination custom-pagination mt-5 flex justify-center gap-1" />
            )}
        </div>
    );
}
