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
                icon: "lucide:folder-open",
            },
            {
                labelKey: "nav.programWork",
                href: "/program#program-kerja",
                icon: "lucide:briefcase",
            },
            {
                labelKey: "nav.programStudy",
                href: "/program#program-kuliah",
                icon: "lucide:graduation-cap",
            },
            {
                labelKey: "nav.industrySector",
                href: "/program#sektor-industri",
                icon: "lucide:factory",
            },
        ],
    },
    /* { labelKey: "nav.history", href: "/sejarah" }, */
    { labelKey: "nav.blog", href: "/blog" },
    /* { labelKey: "nav.contact", href: "/kontak" }, */
];
