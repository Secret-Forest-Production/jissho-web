import type {
    RegisterFileField,
    RegisterHeroData,
    RegisterPersonalField,
    RegisterSelectField,
} from "../types/register.type";

export const registerHeroData: RegisterHeroData = {
    badge: "Daftar Sekarang",
    title: "Raih Karier Global",
    highlightText: "dan Masa Depan",
    titleSuffix: "Gemilang di Jepang",
    description:
        "Pelatihan bahasa intensif, penyaluran kerja resmi, dan pendampingan penuh hingga keberangkatan. Mulai perjalanan sukses Anda di Negeri Sakura sekarang!",
    backgroundImage:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80",
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
