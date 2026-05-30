import type {
    RegisterFileField,
    RegisterHeroData,
    RegisterPersonalField,
    RegisterSelectField,
} from "../types/register.type";

import { heroImages } from "@/Shared/data/hero-images";

export const registerHeroData: RegisterHeroData = {
    badgeKey: "hero.register.badge",
    titleKey: "hero.register.title",
    highlightKey: "hero.register.highlight",
    titleSuffixKey: "hero.register.titleSuffix",
    descriptionKey: "hero.register.description",
    backgroundImage: heroImages.register,
};

export const registerPersonalFields: RegisterPersonalField[] = [
    {
        name: "fullName",
        label: "Nama Lengkap",
        type: "text",
        placeholder: "Masukkan nama lengkap",
        required: true,
        className: "md:col-span-2",
    },
    {
        name: "age",
        label: "Usia",
        type: "number",
        placeholder: "Contoh: 25",
        required: true,
    },
    {
        name: "origin",
        label: "Asal (Kota/Kabupaten)",
        type: "text",
        placeholder: "Contoh: Medan, Sumatera Utara",
        required: true,
        className: "md:col-span-2",
    },
];

export const registerGenderField: RegisterSelectField = {
    name: "gender",
    label: "Jenis Kelamin",
    placeholder: "Pilih Jenis Kelamin Anda",
    required: true,
    options: [
        {
            label: "Laki-laki",
            value: "laki-laki",
        },
        {
            label: "Perempuan",
            value: "perempuan",
        },
    ],
};

export const registerFileFields: RegisterFileField[] = [
    {
        name: "jftCertificate",
        label: "Sertifikat JFT (Japan Foundation Test)",
    },
    {
        name: "senmonkyuCertificate",
        label: "Sertifikat Senmonkyu (専門級) yang Dimiliki",
    },
    {
        name: "skillTestCertificate",
        label: "Sertifikat Skill Test / SSW yang Dimiliki",
    },
];
