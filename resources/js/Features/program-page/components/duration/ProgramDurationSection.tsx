import ProgramTimeline from "../timeline/ProgramTimeline";

import type { ProgramDurationData } from "../../types/program.type";

interface ProgramDurationSectionProps {
    data: ProgramDurationData;
}

export default function ProgramDurationSection({
    data,
}: ProgramDurationSectionProps) {
    return (
        <div id="durasi-program" className="mt-16 scroll-mt-28">
            <p className="mb-2 text-lg font-medium text-red-normal">
                {data.eyebrow}
            </p>

            <h3 className="text-2xl font-bold text-blue-dark">{data.title}</h3>

            <p className="mt-5 text-sm leading-relaxed text-gray-600 md:text-base">
                {data.description}
            </p>

            <ProgramTimeline timelines={data.timelines} />
        </div>
    );
}
