export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' }, 
    { label: 'Program', href: '/program' },
    { label: 'Sejarah', href: '/sejarah' },
    { label: 'Berita', href: '/berita' },
    { label: 'Kontak', href: '/kontak' },
];