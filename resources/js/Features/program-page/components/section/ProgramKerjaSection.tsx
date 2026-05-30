import { Icon } from "@iconify/react";

import SectionHeader from "@/Components/ui/SectionHeader";
import { programKerjaData } from "../../data/program.data";

export default function ProgramKerjaSection() {
    return (
        <section id="program-kerja" className="scroll-mt-28 bg-white py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-red-light/30">
                        <img
                            src={programKerjaData.icon}
                            alt=""
                            draggable={false}
                            className="h-10 w-10 object-contain"
                        />
                    </div>

                    <SectionHeader
                        title={programKerjaData.title}
                        highlight={programKerjaData.highlight}
                        suffix={programKerjaData.suffix}
                        description={programKerjaData.description}
                        className="mb-0"
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {programKerjaData.sswTypes.map((type) => {
                        const isDark = type.isDark;

                        return (
                            <article
                                key={type.title}
                                className={`rounded-xl p-6 shadow-md shadow-blue-dark/10 md:p-8 ${
                                    isDark
                                        ? "bg-blue-dark text-white"
                                        : "bg-white text-blue-dark"
                                }`}
                            >
                                <h3 className="text-xl font-bold leading-tight md:text-2xl">
                                    {type.title}
                                </h3>

                                <div className="mt-6 flex items-center gap-3">
                                    <Icon
                                        icon="mdi:clock-outline"
                                        className={`mt-0.5 shrink-0 text-2xl ${
                                            isDark
                                                ? "text-white"
                                                : "text-blue-dark"
                                        }`}
                                    />

                                    <div>
                                        <p
                                            className={`text-sm font-bold ${
                                                isDark
                                                    ? "text-white"
                                                    : "text-blue-dark"
                                            }`}
                                        >
                                            Durasi: {type.duration}
                                        </p>

                                        {type.durationDescription && (
                                            <p
                                                className={`mt-1 text-sm ${
                                                    isDark
                                                        ? "text-white/70"
                                                        : "text-gray-500"
                                                }`}
                                            >
                                                {type.durationDescription}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <ul className="mt-5 space-y-3">
                                    {type.items.map((item) => (
                                        <li
                                            key={item}
                                            className={`flex items-start gap-3 text-sm leading-relaxed ${
                                                isDark
                                                    ? "text-white/90"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            <Icon
                                                icon="heroicons:check-20-solid"
                                                className={`mt-0.5 shrink-0 text-base ${
                                                    isDark
                                                        ? "text-white"
                                                        : "text-blue-dark"
                                                }`}
                                            />

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
