import { aboutData } from "../../data/about/about-link";

import AboutValueItem from "./AboutValueItem";
import type { AboutValueItem as AboutValueItemType } from "./about.type";

export default function AboutValue() {
    return (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {aboutData.values.map((item: AboutValueItemType, index: number) => (
                <AboutValueItem key={item.title} item={item} index={index} />
            ))}
        </div>
    );
}
