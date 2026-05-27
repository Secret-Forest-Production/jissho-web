import IconMagang from "@/Shared/assets/icons/program-magang.webp";
import IconKerja from "@/Shared/assets/icons/program-kerja.webp";
import IconKuliah from "@/Shared/assets/icons/program-kuliah.webp";
import IconIndustri from "@/Shared/assets/icons/sektor-industri.webp";

export interface NavChildLink {
    label: string;
    href: string;
    icon?: string;
}

export interface NavLink {
    label: string;
    href: string;
    children?: NavChildLink[];
}

export const navLinks: NavLink[] = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    {
        label: "Program",
        href: "/program",
        children: [
            {
                label: "Program Magang",
                href: "/program#program-magang",
                icon: IconMagang,
            },
            {
                label: "Program Kerja",
                href: "/program#program-kerja",
                icon: IconKerja,
            },
            {
                label: "Program Kuliah",
                href: "/program#program-kuliah",
                icon: IconKuliah,
            },
            {
                label: "Sektor Industri",
                href: "/program#sektor-industri",
                icon: IconIndustri,
            },
        ],
    },
    { label: "Sejarah", href: "/sejarah" },
    { label: "Berita", href: "/blog" },
    { label: "Kontak", href: "/kontak" },
];
