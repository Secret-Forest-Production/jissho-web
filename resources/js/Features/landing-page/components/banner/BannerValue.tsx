import { bannerData } from "../../data/banner/banner-link";

import BannerStatCard from "./BannerStatCard";
import type { BannerStatItem } from "./banner.type";

export default function BannerValue() {
    return (
        <div className="grid grid-cols-2 gap-10 border-t border-white/10 md:grid-cols-4 md:gap-6">
            {bannerData.stats.map((stat: BannerStatItem, index: number) => (
                <BannerStatCard key={stat.label} stat={stat} index={index} />
            ))}
        </div>
    );
}
