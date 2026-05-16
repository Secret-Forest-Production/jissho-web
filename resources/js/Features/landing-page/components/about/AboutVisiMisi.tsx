import { aboutData } from "../../data/about/about-link";

import AboutCard from "./AboutCard";
import type { AboutVisiMisiItem } from "./about.type";

export default function AboutVisiMisi() {
    return (
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {aboutData.visiMisi.map(
                (item: AboutVisiMisiItem, index: number) => (
                    <AboutCard key={item.title} item={item} index={index} />
                ),
            )}
        </div>
    );
}
