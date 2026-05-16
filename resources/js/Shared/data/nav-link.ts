export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' }, 
    { label: 'Galeri', href: '/galeri' },
    // { label: 'Sejarah', href: '/sejarah' },
    { label: 'Berita', href: '/blog' },
    // { label: 'Kontak', href: '/kontak' },
];