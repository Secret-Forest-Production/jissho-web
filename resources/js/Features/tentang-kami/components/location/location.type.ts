export interface OfficeLocation {
    country: string;
    name: string;
    flag: string;
    address: string;
    phone: string;
    email: string;
    note: string;
    mapUrl: string;
}

export interface LocationData {
    offices: OfficeLocation[];
}
