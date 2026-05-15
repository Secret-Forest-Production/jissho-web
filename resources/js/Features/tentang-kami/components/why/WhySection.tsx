import React from "react";
import WhyHeader from "./WhyTitle";
import WhyCard from "./WhyCard";
import { whyData } from "../../data/why/why-link";

export default function WhySection() {
    return (
        <section className="py-24 bg-blue-gray">
            {" "}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <WhyHeader />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {whyData.list.map((item, index) => (
                        <WhyCard
                            key={index}
                            index={index}
                            title={item.title}
                            desc={item.desc}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
