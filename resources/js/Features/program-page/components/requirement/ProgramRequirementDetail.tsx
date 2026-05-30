import type { ProgramDetailRequirementData } from "../../types/program.type";

interface ProgramRequirementDetailProps {
    data: ProgramDetailRequirementData;
}

export default function ProgramRequirementDetail({
    data,
}: ProgramRequirementDetailProps) {
    return (
        <div id="detail-program" className="scroll-mt-28">
            <p className="mb-2 text-lg font-medium text-red-normal">
                {data.eyebrow}
            </p>

            <h3 className="text-2xl font-bold text-blue-dark">{data.title}</h3>

            <p className="mt-5 text-sm leading-relaxed text-gray-600 md:text-base">
                {data.description}
            </p>

            <div className="mt-6 space-y-8">
                {data.groups.map((group, index) => (
                    <div key={group.title}>
                        <h4 className="text-base font-bold leading-relaxed text-blue-dark">
                            {index + 1}. {group.title}
                        </h4>

                        {group.description && (
                            <p className="mt-1 text-sm leading-relaxed text-gray-600 md:text-base">
                                {group.description}
                            </p>
                        )}

                        <ul className="mt-1 list-disc space-y-1 pl-6 text-sm leading-relaxed text-gray-600 md:text-base">
                            {group.items.map((item) => (
                                <li key={item.text}>
                                    {item.text}

                                    {item.children && (
                                        <ul className="mt-1 list-disc space-y-1 pl-6">
                                            {item.children.map((child) => (
                                                <li key={child}>{child}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
