import React from "react";

export default function CtaWidget() {
    return (
        <div className="bg-red-normal p-6 text-center text-white flex flex-col items-center justify-center rounded-lg">
            <h3 className="font-bold text-lg mb-2">Siap Memulai Karir Anda?</h3>
            <p className="text-sm mb-6 text-red-100">
                Daftar sekarang untuk konsultasi gratis dengan konsultan karir
                kami.
            </p>
            <button className="bg-white text-red-normal rounded-sm font-bold py-2 px-6 w-full hover:bg-gray-50 transition-colors shadow-sm">
                Daftar Sekarang
            </button>
        </div>
    );
}
