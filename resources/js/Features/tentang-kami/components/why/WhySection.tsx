import WhyCard from "./WhyCard";
import WhyHeader from "./WhyTitle";

import { whyData } from "../../data/why/why-link";
import type { WhyData, WhyItem } from "./why.type";

export default function WhySection() {
    const { list } = whyData as WhyData;

    const whyKeys = ["curriculum", "teachers", "career", "proof"];

    return (
        <section
            id="mengapa-jissho"
            aria-labelledby="why-heading"
            className="bg-blue-gray py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <WhyHeader />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {list.map((item: WhyItem, index: number) => (
                        <WhyCard
                            key={item.title}
                            item={item}
                            index={index}
                            translationKey={whyKeys[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
