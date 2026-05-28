export interface RegisterOption {
    label: string;
    value: string;
}

export interface RegisterFileField {
    name: string;
    label: string;
    helperText?: string;
}

export interface RegisterHeroData {
    badge: string;
    title: string;
    highlightText: string;
    titleSuffix?: string;
    description: string;
    backgroundImage: string;
}

export interface RegisterPersonalField {
    name: string;
    label: string;
    type: "text" | "number" | "email" | "tel";
    placeholder: string;
    required?: boolean;
    className?: string;
}

export interface RegisterSelectField {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
    options: RegisterOption[];
}
