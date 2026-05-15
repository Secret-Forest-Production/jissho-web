import VisiMisiCard from "./VisiMisiCard";
import VisiMisiTitle from "./VisiMisiTitle";

import { visiMisiData } from "../../data/visi/visi-misi-link";
import type { VisiMisiData, VisiMisiItem } from "./visi-misi.type";

export default function VisiMisiSection() {
    const { items } = visiMisiData as VisiMisiData;

    return (
        <section
            id="visi-misi"
            aria-labelledby="visi-misi-heading"
            className="bg-blue-gray py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <VisiMisiTitle />

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {items.map((item: VisiMisiItem, index: number) => (
                        <VisiMisiCard
                            key={item.title}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
