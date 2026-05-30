interface FormInputProps {
    label: string;
    name: string;
    type?: "text" | "number" | "email" | "tel";
    placeholder?: string;
    required?: boolean;
}

export default function FormInput({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
}: FormInputProps) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-blue-dark"
            >
                {label}
                {required && <span className="text-red-normal">*</span>}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-2xl border border-gray-300 px-5 py-4.5 mt-0.5 text-sm text-blue-dark outline-none transition-all placeholder:text-gray-400 focus:border-red-normal focus:ring-2 focus:ring-red-normal/10"
            />
        </div>
    );
}
