import { useTranslation } from "react-i18next";
import { QuoteIcon } from "lucide-react";
import defaultTesti from "@/Shared/assets-optimized/home/testimoni/testi.webp";

interface TestimoniCardProps {
    item: any;
}

export default function TestimoniCard({ item }: TestimoniCardProps) {
    const { t, i18n } = useTranslation("common");
    const lang = i18n.language as 'id' | 'en' | 'ja';

    const getLocalizedText = (field: any) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['id'] || '';
    };

    const imageUrl = item.image ? `/storage/${item.image}` : defaultTesti;

    return (
        <article className="relative m-1 bg-white p-6 shadow-md md:m-2 md:p-8">
            <QuoteIcon
                aria-hidden="true"
                className="h-6 w-6 text-red-normal opacity-20"
            />

            <figure className="flex items-center gap-6">
                <div className="mt-2 shrink-0">
                    <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-red-light-active">
                        <img
                            src={imageUrl}
                            alt={t("testimoni.aria_photo", {
                                name: item.name,
                            })}
                            loading="lazy"
                            draggable={false}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <figcaption className="flex flex-col gap-4">
                    <blockquote className="line-clamp-4 text-sm leading-relaxed text-text-gray md:text-base">
                        “{getLocalizedText(item.message)}”
                    </blockquote>

                    <div>
                        <h3 className="text-lg font-bold text-blue-dark">
                            {item.name}
                        </h3>

                        <p className="text-sm text-red-normal md:text-base">
                            {getLocalizedText(item.role)}
                        </p>
                    </div>
                </figcaption>
            </figure>
        </article>
    );
}
