export interface BannerButton {
    text: string;
    href: string;
}

export interface BannerData {
    title: string;
    description: string;
    buttons: {
        cta: BannerButton;
        program: BannerButton;
    };
}
