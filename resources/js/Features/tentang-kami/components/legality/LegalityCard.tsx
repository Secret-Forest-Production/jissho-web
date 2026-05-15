import React from "react";

interface LegalityCardProps {
    title: string;
    desc: string;
    image: string; 
    align?: "left" | "right";
}

export default function LegalityCard({
    title,
    desc,
    image,
    align = "left",
}: LegalityCardProps) {
    const isRight = align === "right";

    return (
        <div
            className={`flex gap-4 items-start ${isRight ? "text-left" : "text-left"}`}
        >
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    draggable={false}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="space-y-1">
                <h4 className="font-bold text-blue-dark text-lg md:text-xl leading-tight">
                    {title}
                </h4>
                <p className="text-text-gray text-xs md:text-sm leading-relaxed max-w-[250px]">
                    {desc}
                </p>
            </div>
        </div>
    );
}
