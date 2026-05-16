export type VisiMisiType = "visi" | "misi";

export interface VisiMisiItem {
    type: VisiMisiType;
    title: string;
    content: string;
    icon: string;
}

export interface VisiMisiData {
    items: VisiMisiItem[];
}
