import { useTranslation } from "react-i18next";

import type { OfficeLocation } from "./location.type";
import { Mail, MapPinIcon, Phone } from "lucide-react";

interface LocationCardProps {
    office: OfficeLocation;
    translationKey: string;
}

export default function LocationCard({
    office,
    translationKey,
}: LocationCardProps) {
    const { t } = useTranslation("common");

    return (
        <article className="flex h-full flex-col rounded-[20px] border border-gray-50 bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-4 border-b-2 border-red-normal pb-6">
                <img
                    src={office.flag}
                    alt={t(
                        `about_page.location.offices.${translationKey}.country`,
                    )}
                    loading="lazy"
                    draggable={false}
                    className="h-auto w-12"
                />

                <div>
                    <h3 className="text-2xl font-bold text-blue-dark">
                        {t(
                            `about_page.location.offices.${translationKey}.country`,
                        )}
                    </h3>

                    <p className="text-xs font-bold uppercase tracking-widest text-red-normal">
                        {office.name}
                    </p>
                </div>
            </div>

            <address className="grow space-y-6 not-italic">
                <div className="flex gap-4">
                    <MapPinIcon
                        aria-hidden="true"
                        className="shrink-0 mt-1.5 lg:mt-1 2-5 h-5 lg:w-6 lg:h-6 text-red-normal"
                    />

                    <div>
                        <h4 className="text-lg font-semibold text-blue-dark">
                            Alamat
                        </h4>

                        <p className="mt-1 text-base leading-relaxed text-text-gray">
                            {office.address}
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Phone
                        aria-hidden="true"
                        className="shrink-0 mt-1.5 lg:mt-1 2-5 h-5 lg:w-6 lg:h-6 text-red-normal"
                    />

                    <div>
                        <h4 className="text-lg font-semibold text-blue-dark">
                            Telepon
                        </h4>

                        <a
                            href={`tel:${office.phone.replace(/\s+/g, "")}`}
                            className="mt-1 block text-base text-text-gray transition hover:text-red-normal"
                        >
                            {office.phone}
                        </a>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Mail
                        aria-hidden="true"
                        className="shrink-0 mt-1.5 lg:mt-1 2-5 h-5 lg:w-6 lg:h-6 text-red-normal"
                    />

                    <div>
                        <h4 className="text-lg font-semibold text-blue-dark">
                            Email
                        </h4>

                        <a
                            href={`mailto:${office.email}`}
                            className="mt-1 block text-base text-text-gray transition hover:text-red-normal"
                        >
                            {office.email}
                        </a>
                    </div>
                </div>
            </address>

            <div className="mt-8 rounded-[10px] bg-red-light p-5">
                <h4 className="mb-1 text-base font-bold uppercase tracking-wider text-blue-dark">
                    {translationKey === "japan"
                        ? "Kantor Representatif Jepang"
                        : "Kantor Pusat Indonesia"}
                </h4>

                <p className="text-sm leading-relaxed text-text-gray">
                    {t(`about_page.location.offices.${translationKey}.note`)}
                </p>
            </div>
        </article>
    );
}
