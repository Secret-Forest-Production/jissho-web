import React from "react";
import VisiMisiTitle from "./VisiMisiTitle";
import VisiMisiCard from "./VisiMisiCard";
import { visiMisiData } from "../../data/visi/visi-misi-link";

export default function VisiMisiSection() {
    return (
        <section className="py-24 bg-blue-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <VisiMisiTitle />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {visiMisiData.items.map((item, index) => (
                        <VisiMisiCard
                            key={index}
                            type={item.type as "visi" | "misi"}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
