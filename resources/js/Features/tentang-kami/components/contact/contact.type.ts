export interface ContactSocial {
    icon: string;
    href: string;
    color: string;
    label: string;
}

export interface ContactData {
    content: {
        quote: string;
        description: string;
    };
    socials: ContactSocial[];
}