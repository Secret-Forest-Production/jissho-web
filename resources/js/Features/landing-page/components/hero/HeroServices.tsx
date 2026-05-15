import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { heroServicesData } from "../../data/hero/hero-link";

import HeroServiceCard from "./HeroServiceCard";
import { HERO_SWIPER_CONFIG } from "./hero.constant";
import type { HeroServiceItem } from "./hero.type";

export default function HeroServices() {
    const shouldLoop = heroServicesData.length > 3;

    const renderCards = () =>
        heroServicesData.map((item: HeroServiceItem, index: number) => (
            <HeroServiceCard
                key={`${item.title}-${index}`}
                item={item}
                index={index}
            />
        ));

    return (
        <section aria-label="Program layanan Yayasan Jissho" className="w-full">
            {/* Mobile */}
            <div className="overflow-hidden bg-white py-4 shadow-md md:hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={shouldLoop}
                    loopAdditionalSlides={3}
                    className="hero-services-swiper px-4"
                    {...HERO_SWIPER_CONFIG}
                >
                    {heroServicesData.map(
                        (item: HeroServiceItem, index: number) => (
                            <SwiperSlide key={`${item.title}-${index}`}>
                                <HeroServiceCard item={item} index={index} />
                            </SwiperSlide>
                        ),
                    )}
                </Swiper>
            </div>

            {/* Desktop */}
            <div className="hidden gap-6 overflow-hidden bg-white p-6 shadow-md md:grid md:grid-cols-3 lg:gap-8 lg:p-8">
                {renderCards()}
            </div>
        </section>
    );
}
