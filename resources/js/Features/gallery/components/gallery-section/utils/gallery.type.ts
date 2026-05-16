export type GalleryCategory =
    | "Semua Foto"
    | "Kelas Bahasa"
    | "Budaya Jepang"
    | "Persiapan Kerja"
    | "Acara Yayasan";

export interface GalleryPhoto {
    id: number;
    category: Exclude<GalleryCategory, "Semua Foto">;
    title: string;
    image: string;
}

export interface GalleryData {
    header: {
        title: string;
        description: string;
        showLine?: boolean;
    };
    categories: GalleryCategory[];
    photos: GalleryPhoto[];
}
