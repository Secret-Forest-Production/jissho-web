export interface LegalityItem {
    title: string;
    desc: string;
    image: string;
}

export interface LegalityData {
    image: string;
    items: LegalityItem[];
}