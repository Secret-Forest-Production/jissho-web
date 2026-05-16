import ProgramCard from "./ProgramCard";
import ProgramTitle from "./ProgramTitle";

import { programData } from "../../data/program/program-link";
import type { ProgramItem } from "./program.type";

export default function ProgramSection() {
    return (
        <section
            id="program"
            aria-labelledby="program-heading"
            className="bg-gray-50/50 py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ProgramTitle />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {programData.list.map(
                        (item: ProgramItem, index: number) => (
                            <ProgramCard
                                key={item.title}
                                item={item}
                                index={index}
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
