import React from "react";
import { Icon } from "@iconify/react";
import Button from "@/Components/ui/Button";

export default function ContactForm() {
    const inputStyle =
        "w-full pl-11 pr-4 py-3 text-md bg-gray-50 rounded-[20px] border-none outline-none focus:outline-none focus:ring-2 focus:ring-red-normal text-sm transition-all duration-200";
    const labelStyle = "text-base font-semibold text-blue-dark block mb-1";
    const iconStyle =
        "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-red-normal text-xl";

    return (
        <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-lg">
            <h3 className="text-xl font-bold text-blue-dark mb-8">
                Formulir Kontak
            </h3>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nama Lengkap */}
                    <div>
                        <label className={labelStyle}>Nama Lengkap</label>
                        <div className="relative group">
                            <Icon icon="tabler:user" className={iconStyle} />
                            <input
                                type="text"
                                placeholder="Adinda Wirasti"
                                className={inputStyle}
                            />
                        </div>
                    </div>

                    {/* No HP */}
                    <div>
                        <label className={labelStyle}>No HP</label>
                        <div className="relative group">
                            <Icon
                                icon="mynaui:telephone"
                                className={iconStyle}
                            />
                            <input
                                type="text"
                                placeholder="+62 -"
                                className={inputStyle}
                            />
                        </div>
                    </div>
                </div>

                {/* Program */}
                <div>
                    <label className={labelStyle}>Program diminati</label>
                    <div className="relative group">
                        <Icon icon="mdi:pencil-outline" className={iconStyle} />
                        <input
                            type="text"
                            placeholder="Pilih Program"
                            className={inputStyle}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <Button variant="outlinered" size="md">
                        Konsultasi Gratis
                    </Button>

                    <Button type="submit" variant="primary" size="md">
                        Daftar Sekarang
                    </Button>
                </div>
            </form>
        </div>
    );
}
