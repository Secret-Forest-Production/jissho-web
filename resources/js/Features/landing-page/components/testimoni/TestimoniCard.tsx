import { Icon } from "@iconify/react";

interface TestimoniCardProps {
    item: any;
}

export default function TestimoniCard({ item }: TestimoniCardProps) {
    return (
        <div className="relative bg-white p-6 md:p-8 shadow-md m-1 md:m-2">
            <Icon
                icon="lucide:quote"
                className="text-red-normal text-[48px] opacity-20"
            />

            {/* Content */}
            <div className="flex items-center gap-6">
                <div className="shrink-0 mt-2">
                    <div className="w-16 h-16 rounded-full border-4 border-red-light-active">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-text-gray text-sm md:text-base leading-relaxed line-clamp-4">
                        "{item.message}"
                    </p>

                    <div>
                        <h4 className="text-blue-dark text-lg font-bold">
                            {item.name}
                        </h4>
                        <p className="text-red-normal text-sm md:text-base">
                            {item.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
