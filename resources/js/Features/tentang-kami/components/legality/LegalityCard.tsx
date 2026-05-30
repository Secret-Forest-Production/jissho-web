import { useTranslation } from "react-i18next";
import type { LegalityItem } from "./legality.type";

interface LegalityCardProps {
    item: LegalityItem;
    translationKey: string;
}

export default function LegalityCard({ item, translationKey }: LegalityCardProps) {
    const { t } = useTranslation("common");

    return (
        <article className="flex items-start gap-4 text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center md:h-20 md:w-20">
                <img
                    src={item.image}
                    alt={t(`about_page.legality.items.${translationKey}.title`)}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="space-y-1">
                <h3 className="text-lg font-bold leading-tight text-blue-dark md:text-xl">
                    {t(`about_page.legality.items.${translationKey}.title`)}
                </h3>

                <p className="max-w-62.5 text-xs leading-relaxed text-text-gray md:text-sm">
                    {t(`about_page.legality.items.${translationKey}.desc`)}
                </p>
            </div>
        </article>
    );
}
