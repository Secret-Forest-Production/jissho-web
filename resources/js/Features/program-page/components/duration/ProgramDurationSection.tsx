import ProgramTimeline from "../timeline/ProgramTimeline";
import { useTranslation } from "react-i18next";
import { programMagangData } from "../../data/program.data";

export default function ProgramDurationSection() {
    const { t } = useTranslation("common");

    const timelines = programMagangData.duration.timelines.map((item, index) => ({
        ...item,
        title: t(`program_page.magang.duration.t${index + 1}.title`),
        duration: t(`program_page.magang.duration.t${index + 1}.duration`),
        description: t(`program_page.magang.duration.t${index + 1}.desc`),
    }));

    return (
        <div id="durasi-program" className="mt-16 scroll-mt-28">
            <p className="mb-2 text-lg font-medium text-red-normal">
                {t("program_page.magang.duration.eyebrow")}
            </p>

            <h3 className="text-2xl font-bold text-blue-dark">
                {t("program_page.magang.duration.title")}
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-gray-600 md:text-base">
                {t("program_page.magang.duration.description")}
            </p>

            <ProgramTimeline timelines={timelines} />
        </div>
    );
}
