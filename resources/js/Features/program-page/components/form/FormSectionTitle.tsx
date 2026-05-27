import { Icon } from "@iconify/react";

interface FormSectionTitleProps {
    icon: string;
    title: string;
}

export default function FormSectionTitle({
    icon,
    title,
}: FormSectionTitleProps) {
    return (
        <div className="mb-8 flex items-center gap-3">
            <div className="h-8 border-l-4 border-red-normal" />

            <Icon icon={icon} className="text-2xl text-red-normal" />

            <h2 className="text-xl font-bold text-blue-dark">{title}</h2>
        </div>
    );
}
