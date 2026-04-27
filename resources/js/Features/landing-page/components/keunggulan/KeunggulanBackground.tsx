import React from "react";
import KeunggulanBgImg from "@/Shared/assets/home/keunggulan-background.webp";

export default function KeunggulanBackground() {
    return (
        <div className="absolute top-70 right-0 w-full lg:w-[85%] h-125 lg:h-150 -z-10 overflow-hidden">
            <img
                src={KeunggulanBgImg}
                alt="Keunggulan Jissho Background"
                draggable={false}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-normal/10 mix-blend-multiply" />
        </div>
    );
}
