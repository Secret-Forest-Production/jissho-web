import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonId from "@/Shared/locales/id/common.json";
import commonEn from "@/Shared/locales/en/common.json";
import commonJa from "@/Shared/locales/ja/common.json";

const savedLanguage = localStorage.getItem("language") || "id";

i18n.use(initReactI18next).init({
    resources: {
        id: {
            common: commonId,
        },
        en: {
            common: commonEn,
        },
        ja: {
            common: commonJa,
        },
    },
    lng: savedLanguage,
    fallbackLng: "id",
    defaultNS: "common",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;