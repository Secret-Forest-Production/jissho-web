import { useTranslation } from "react-i18next";

export default function ProgramRequirementDetail() {
    const { t } = useTranslation("common");

    return (
        <div id="detail-program" className="scroll-mt-28">
            <p className="mb-2 text-lg font-medium text-red-normal">
                {t("program_page.magang.requirement.eyebrow")}
            </p>

            <h3 className="text-2xl font-bold text-blue-dark">
                {t("program_page.magang.requirement.title")}
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-gray-600 md:text-base">
                {t("program_page.magang.requirement.description")}
            </p>

            <div className="mt-6 space-y-8">
                {/* Group 1 */}
                <div>
                    <h4 className="text-base font-bold leading-relaxed text-blue-dark">
                        1. {t("program_page.magang.requirement.g1.title")}
                    </h4>

                    <ul className="mt-1 list-disc space-y-1 pl-6 text-sm leading-relaxed text-gray-600 md:text-base">
                        <li>{t("program_page.magang.requirement.g1.i1")}</li>
                        <li>{t("program_page.magang.requirement.g1.i2")}</li>
                        <li>
                            {t("program_page.magang.requirement.g1.i3")}
                            <ul className="mt-1 list-disc space-y-1 pl-6">
                                <li>{t("program_page.magang.requirement.g1.i3_c1")}</li>
                                <li>{t("program_page.magang.requirement.g1.i3_c2")}</li>
                            </ul>
                        </li>
                        <li>{t("program_page.magang.requirement.g1.i4")}</li>
                        <li>{t("program_page.magang.requirement.g1.i5")}</li>
                    </ul>
                </div>

                {/* Group 2 */}
                <div>
                    <h4 className="text-base font-bold leading-relaxed text-blue-dark">
                        2. {t("program_page.magang.requirement.g2.title")}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600 md:text-base">
                        {t("program_page.magang.requirement.g2.description")}
                    </p>

                    <ul className="mt-1 list-disc space-y-1 pl-6 text-sm leading-relaxed text-gray-600 md:text-base">
                        <li>{t("program_page.magang.requirement.g2.i1")}</li>
                        <li>{t("program_page.magang.requirement.g2.i2")}</li>
                        <li>{t("program_page.magang.requirement.g2.i3")}</li>
                        <li>{t("program_page.magang.requirement.g2.i4")}</li>
                        <li>{t("program_page.magang.requirement.g2.i5")}</li>
                        <li>{t("program_page.magang.requirement.g2.i6")}</li>
                    </ul>
                </div>

                {/* Group 3 */}
                <div>
                    <h4 className="text-base font-bold leading-relaxed text-blue-dark">
                        3. {t("program_page.magang.requirement.g3.title")}
                    </h4>

                    <ul className="mt-1 list-disc space-y-1 pl-6 text-sm leading-relaxed text-gray-600 md:text-base">
                        <li>{t("program_page.magang.requirement.g3.i1")}</li>
                        <li>{t("program_page.magang.requirement.g3.i2")}</li>
                        <li>{t("program_page.magang.requirement.g3.i3")}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
