import { Icon } from "@iconify/react";

import type { TestimoniItem } from "./testimoni.type";

interface TestimoniCardProps {
    item: TestimoniItem;
}

export default function TestimoniCard({ item }: TestimoniCardProps) {
    return (
        <article className="relative m-1 bg-white p-6 shadow-md md:m-2 md:p-8">
            <Icon
                icon="lucide:quote"
                aria-hidden="true"
                className="text-[48px] text-red-normal opacity-20"
            />

            <figure className="flex items-center gap-6">
                <div className="mt-2 shrink-0">
                    <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-red-light-active">
                        <img
                            src={item.image}
                            alt={`Foto ${item.name}`}
                            loading="lazy"
                            draggable={false}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <figcaption className="flex flex-col gap-4">
                    <blockquote className="line-clamp-4 text-sm leading-relaxed text-text-gray md:text-base">
                        “{item.message}”
                    </blockquote>

                    <div>
                        <h3 className="text-lg font-bold text-blue-dark">
                            {item.name}
                        </h3>

                        <p className="text-sm text-red-normal md:text-base">
                            {item.role}
                        </p>
                    </div>
                </figcaption>
            </figure>
        </article>
    );
}
