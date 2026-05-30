import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import SectionHeader from "@/Components/ui/SectionHeader";
import { programKuliahData } from "../../data/program.data";

export default function ProgramKuliahSection() {
    const { t } = useTranslation("common");

    const studyPrograms = [
        { key: "s1", ...programKuliahData.studyPrograms[0] },
        { key: "s2", ...programKuliahData.studyPrograms[1] },
        { key: "language", ...programKuliahData.studyPrograms[2] },
    ];

    const scholarshipKeys = ["mext", "jasso", "university"];

    return (
        <section id="program-kuliah" className="scroll-mt-28 bg-white py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                        <img
                            src={programKuliahData.icon}
                            alt=""
                            draggable={false}
                            className="h-10 w-10 object-contain"
                        />
                    </div>

                    <SectionHeader
                        title={t("program_page.kuliah.title")}
                        highlight={t("program_page.kuliah.highlight")}
                        suffix={t("program_page.kuliah.suffix")}
                        description={t("program_page.kuliah.description")}
                        className="mb-0"
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {studyPrograms.map((program) => (
                        <article
                            key={program.key}
                            className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="p-4 pb-0">
                                <img
                                    src={program.image}
                                    alt={t(`program_page.kuliah.${program.key}.title`)}
                                    draggable={false}
                                    className="h-44 w-full rounded-xl object-cover"
                                />
                            </div>

                            <div className="p-5">
                                <div className="mb-5 flex items-start gap-3">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-normal/10 text-red-normal">
                                        <Icon
                                            icon="mdi:academic-cap-outline"
                                            className="text-3xl"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-bold leading-snug text-blue-dark">
                                            {t(`program_page.kuliah.${program.key}.title`)}
                                        </h3>

                                        <p className="mt-1 text-sm font-semibold text-red-normal">
                                            {t(`program_page.kuliah.${program.key}.duration`)}
                                        </p>
                                    </div>
                                </div>

                                <h4 className="text-sm font-bold text-blue-dark">
                                    {t("program_page.magang.requirement.eyebrow")}:
                                </h4>

                                <ul className="mt-3 space-y-2">
                                    {t("program_page.kuliah.requirement_common").split(", ").map((requirement) => (
                                        <li
                                            key={requirement}
                                            className="flex items-center gap-2 text-sm leading-relaxed text-gray-600"
                                        >
                                            <Icon
                                                icon="lucide:circle-check-big"
                                                className="mt-0.5 shrink-0 text-red-normal"
                                            />

                                            <span>{requirement}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5 rounded-xl bg-gray-100 p-4 text-sm leading-relaxed text-gray-600">
                                    <span className="font-bold text-blue-dark">
                                        {t("program_page.magang.benefit.eyebrow")}:
                                    </span>{" "}
                                    {t(`program_page.kuliah.${program.key}.benefit`)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10">
                    <span className="inline-flex rounded-md bg-red-50 px-3 py-2 text-base font-semibold text-red-normal">
                        {t("program_page.kuliah.scholarships.title")}
                    </span>

                    <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <div>
                            <h3 className="text-2xl font-bold leading-tight text-blue-dark md:text-3xl">
                                {t("program_page.kuliah.title")}{" "}
                                <span className="text-red-normal">{t("program_page.kuliah.highlight")}</span>{" "}
                                {t("program_page.kuliah.suffix")}
                            </h3>

                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
                                {t("program_page.kuliah.description")}
                            </p>

                            <div className="mt-5 space-y-3">
                                {scholarshipKeys.map(
                                    (sKey) => (
                                        <button
                                            key={sKey}
                                            type="button"
                                            className="flex w-full items-center justify-between gap-4 bg-gray-100 px-4 py-3 text-left transition-all hover:bg-gray-200"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-500">
                                                    <Icon
                                                        icon="mdi:academic-cap-outline"
                                                        className="text-xl"
                                                    />
                                                </span>

                                                <div>
                                                    <h4 className="text-sm font-bold text-blue-dark">
                                                        {t(`program_page.kuliah.scholarships.${sKey}.title`)}
                                                    </h4>

                                                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                                                        {t(`program_page.kuliah.scholarships.${sKey}.desc`)}
                                                    </p>
                                                </div>
                                            </div>

                                            <Icon
                                                icon="heroicons:chevron-right-20-solid"
                                                className="shrink-0 text-xl text-blue-dark"
                                            />
                                        </button>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl">
                            <div className="relative z-10 bg-red-normal px-4 py-3 text-center sm:px-5 sm:py-3.5 md:px-6 md:py-5">
                                <h3 className="text-base font-bold text-white sm:text-lg md:text-2xl">
                                    {t("program_page.kuliah.assistances.title")}
                                </h3>

                                <span className="absolute -bottom-3 left-0 h-3 w-6 bg-red-dark [clip-path:polygon(0_0,100%_0,100%_100%)] sm:-bottom-4 sm:h-4 sm:w-8 md:-bottom-6 md:h-6 md:w-10" />
                                <span className="absolute -bottom-3 right-0 h-3 w-6 bg-red-dark [clip-path:polygon(0_0,100%_0,0_100%)] sm:-bottom-4 sm:h-4 sm:w-8 md:-bottom-6 md:h-6 md:w-10" />
                            </div>

                            <div className="mx-auto w-[90%] bg-gray-100 px-5 py-7 sm:px-6 sm:py-8 md:w-[85%] xl:md:w-[80%] md:px-10 md:py-12">
                                <ul className="space-y-4">
                                    {[1, 2, 3, 4, 5].map(
                                        (idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-sm font-medium leading-relaxed text-slate-600 md:items-center"
                                            >
                                                <Icon
                                                    icon="lucide:circle-check-big"
                                                    className="mt-0.5 shrink-0 text-xl text-slate-500 sm:text-2xl md:mt-0"
                                                />

                                                <span>{t(`program_page.kuliah.assistances.i${idx}`)}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
