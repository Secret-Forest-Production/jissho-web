import React from "react";
import { Icon } from "@iconify/react";

interface LocationCardProps {
    country: string;
    name: string;
    flag: string;
    address: string;
    phone: string;
    email: string;
    note: string;
}

export default function LocationCard({
    country,
    name,
    flag,
    address,
    phone,
    email,
    note,
}: LocationCardProps) {
    return (
        <div className="bg-white p-8 rounded-[20px] shadow-lg border border-gray-50 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 border-b-2 border-red-normal pb-6">
                <img
                    src={flag}
                    alt={country}
                    draggable={false}
                    className="w-12 h-auto "
                />
                <div>
                    <h3 className="text-2xl font-bold text-blue-dark">
                        {country}
                    </h3>
                    <p className="text-red-normal text-xs font-bold tracking-widest uppercase">
                        {name}
                    </p>
                </div>
            </div>

            <div className="space-y-6 grow">
                <div className="flex gap-4">
                    <Icon
                        icon="boxicons:location"
                        className="text-red-normal text-2xl lg:text-3xl shrink-0"
                    />
                    <div>
                        <h4 className="font-semibold text-blue-dark text-lg">
                            Alamat
                        </h4>
                        <p className="text-base text-text-gray leading-relaxed mt-1">
                            {address}
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Icon
                        icon="mynaui:telephone"
                        className="text-red-normal text-2xl lg:text-3xl shrink-0"
                    />
                    <div>
                        <h4 className="font-semibold text-blue-dark text-lg">
                            Telepon
                        </h4>
                        <p className="text-base text-text-gray mt-1">
                            {phone}
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Icon
                        icon="ic:outline-email"
                        className="text-red-normal text-2xl lg:text-3xl shrink-0"
                    />
                    <div>
                        <h4 className="font-semibold text-blue-dark text-lg">
                            Email
                        </h4>
                        <p className="text-base text-text-gray mt-1">
                            {email}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-5 bg-red-light rounded-[10px] ">
                <h5 className="text-md font-bold text-blue-dark uppercase tracking-wider mb-1">
                    Kantor Representatif Jepang
                </h5>
                <p className="text-sm leading-relaxed text-text-gray">
                    {note}
                </p>
            </div>
        </div>
    );
}
