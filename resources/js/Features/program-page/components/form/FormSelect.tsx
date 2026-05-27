import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

interface FormSelectProps {
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    options: string[];
}

export default function FormSelect({
    label,
    name,
    placeholder = "Pilih salah satu",
    required = false,
    options,
}: FormSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (option: string) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    return (
        <div ref={selectRef} className="relative">
            <label
                htmlFor={name}
                className="mb-3 block text-sm font-semibold text-blue-dark"
            >
                {label}
                {required && <span className="text-red-normal">*</span>}
            </label>

            <input
                id={name}
                name={name}
                type="hidden"
                value={selectedValue}
                required={required}
            />

            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex h-14 w-full items-center justify-between rounded-2xl border bg-white px-5 text-left text-sm outline-none transition-all ${
                    isOpen
                        ? "border-red-normal ring-2 ring-red-normal/10"
                        : "border-slate-400/70"
                }`}
            >
                <span
                    className={
                        selectedValue ? "text-blue-dark" : "text-gray-400"
                    }
                >
                    {selectedValue || placeholder}
                </span>

                <Icon
                    icon="heroicons:chevron-down-20-solid"
                    className={`text-xl text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute left-0 top-[calc(100%+8px)] z-40 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-blue-dark/10">
                    {options.map((option) => {
                        const isSelected = selectedValue === option;

                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => handleSelect(option)}
                                className={`block w-full px-5 py-3 text-left text-sm transition-all ${
                                    isSelected
                                        ? "bg-red-normal text-white"
                                        : "text-gray-600 hover:bg-red-normal/10 hover:text-red-normal"
                                }`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
