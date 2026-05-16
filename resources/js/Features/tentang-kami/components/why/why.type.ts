export interface WhyItem {
    title: string;
    desc: string;
    image: string;
}

export interface WhyHeader {
    title: string;
    highlight: string;
    showLine?: boolean;
}

export interface WhyData {
    header: WhyHeader;
    list: WhyItem[];
}
