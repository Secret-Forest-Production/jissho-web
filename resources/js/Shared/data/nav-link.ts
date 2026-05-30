import IconMagang from "@/Shared/assets/icons/program-magang.webp";
import IconKerja from "@/Shared/assets/icons/program-kerja.webp";
import IconKuliah from "@/Shared/assets/icons/program-kuliah.webp";
import IconIndustri from "@/Shared/assets/icons/sektor-industri.webp";

export interface NavChildLink {
    labelKey: string;
    href: string;
    icon?: string;
}

export interface NavLink {
    labelKey: string;
    href: string;
    children?: NavChildLink[];
}

export const navLinks: NavLink[] = [
    { labelKey: "nav.home", href: "/" },
    { labelKey: "nav.about", href: "/tentang-kami" },
    {
        labelKey: "nav.program",
        href: "/program",
        children: [
            {
                labelKey: "nav.programInternship",
                href: "/program#program-magang",
                icon: IconMagang,
            },
            {
                labelKey: "nav.programWork",
                href: "/program#program-kerja",
                icon: IconKerja,
            },
            {
                labelKey: "nav.programStudy",
                href: "/program#program-kuliah",
                icon: IconKuliah,
            },
            {
                labelKey: "nav.industrySector",
                href: "/program#sektor-industri",
                icon: IconIndustri,
            },
        ],
    },
    { labelKey: "nav.history", href: "/sejarah" },
    { labelKey: "nav.blog", href: "/blog" },
    { labelKey: "nav.contact", href: "/kontak" },
];
