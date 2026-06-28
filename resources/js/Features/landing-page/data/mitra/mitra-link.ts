import JapanInterstudyCenterIndonesia from "@/Shared/assets/home/mitra/japan-interstudy-center-indonesia.webp";
import LVILEngineeringConsultantsCoLtd from "@/Shared/assets/home/mitra/lvil-engineering-consultants-co-ltd.webp";
import SankyoFujikiGroup from "@/Shared/assets/home/mitra/sankyo-fujiki-group.webp";
import SynergyGlobalHousing from "@/Shared/assets/home/mitra/synergy-global-housing.webp";
import SyonanJapaneseAcademyHamamatsuCampus from "@/Shared/assets/home/mitra/syonan-japanese-academy-hamamatsu-campus.webp";

export const mitraData = {
    title: {
        main: "Mitra",
        highlight: "Kami",
    },

    description: "Mitra yang bekerja sama dengan kami",

    rows: [
        {
            titles: ["Friendly Cooperative", "BMA Cooperative"],

            logos: [
                {
                    name: "Japan Interstudy Center Indonesia",
                    src: JapanInterstudyCenterIndonesia,
                    width: "w-44",
                },
                {
                    name: "LVIL Engineering Consultants Co., Ltd.",
                    src: LVILEngineeringConsultantsCoLtd,
                    width: "w-72",
                },
                {
                    name: "Sankyo Fujiki Group",
                    src: SankyoFujikiGroup,
                    width: "w-52",
                },
            ],
        },

        {
            titles: ["Ren Cooperative", "Business Communication CO., LTD"],

            logos: [
                {
                    name: "Synergy Global Housing",
                    src: SynergyGlobalHousing,
                    width: "w-56",
                },
                {
                    name: "Syonan Japanese Academy Hamamatsu Campus",
                    src: SyonanJapaneseAcademyHamamatsuCampus,
                    width: "w-64",
                },
            ],
        },
    ],
};
