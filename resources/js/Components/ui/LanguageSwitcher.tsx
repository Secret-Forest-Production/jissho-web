import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const languages = [
    {
        code: "id",
        label: "ID",
        nameKey: "language.id",
    },
    {
        code: "en",
        label: "EN",
        nameKey: "language.en",
    },
    {
        code: "ja",
        label: "JP",
        nameKey: "language.ja",
    },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const switcherRef = useRef<HTMLDivElement>(null);

    const { t, i18n } = useTranslation("common");

    const currentLanguage =
        languages.find((language) => language.code === i18n.language) ??
        languages[0];

    const handleChangeLanguage = (languageCode: string) => {
        if (i18n.language !== languageCode) {
            i18n.changeLanguage(languageCode);
            localStorage.setItem("language", languageCode);
        }

        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                switcherRef.current &&
                !switcherRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div ref={switcherRef} className="relative inline-flex">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Change language"
                aria-expanded={isOpen}
                className={`flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-semibold transition-all ${
                    isOpen
                        ? "border-red-normal text-red-normal"
                        : "border-gray-300 text-blue-dark/80 hover:text-red-normal"
                }`}
            >
                <Icon icon="heroicons:language-20-solid" className="text-lg" />

                <span>{currentLanguage.label}</span>

                <Icon
                    icon="heroicons:chevron-down-20-solid"
                    className={`text-base transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            <div
                className={`absolute right-0 top-full z-50 min-w-44 pt-2 transition-all duration-300 ${
                    isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-2 opacity-0"
                }`}
            >
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 shadow-xl shadow-blue-dark/10">
                    {languages.map((language) => {
                        const isActive = i18n.language === language.code;

                        return (
                            <button
                                key={language.code}
                                type="button"
                                onClick={() =>
                                    handleChangeLanguage(language.code)
                                }
                                className={`flex w-full items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all ${
                                    isActive
                                        ? "bg-red-light/40 text-red-normal"
                                        : "text-blue-dark/80 hover:bg-gray-50 hover:text-red-normal"
                                }`}
                            >
                                <span>{t(language.nameKey)}</span>

                                <span
                                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                                        isActive
                                            ? "bg-red-normal text-white"
                                            : "bg-gray-100 text-gray-500"
                                    }`}
                                >
                                    {language.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
