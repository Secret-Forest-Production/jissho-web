export interface CompleteProfileContent {
    quote: string;
    paragraphs: string[];
    image: string;
}

export interface CompleteProfileHeader {
    title: string;
    highlight: string;
    showLine?: boolean;
}

export interface CompleteProfileData {
    header: CompleteProfileHeader;
    content: CompleteProfileContent;
}
