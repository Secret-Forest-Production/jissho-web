interface FormTextareaProps {
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    helperText?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextarea({
    label,
    name,
    placeholder,
    required = false,
    helperText,
    value,
    onChange,
}: FormTextareaProps) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-3 block text-sm font-semibold text-blue-dark"
            >
                {label}
                {required && <span>*</span>}
            </label>

            <textarea
                id={name}
                name={name}
                rows={5}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="min-h-36 w-full resize-none rounded-2xl border border-slate-400/70 bg-white px-5 py-4 text-sm text-blue-dark outline-none transition-all placeholder:text-gray-400 focus:border-red-normal focus:ring-2 focus:ring-red-normal/10"
            />

            {helperText && (
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {helperText}
                </p>
            )}
        </div>
    );
}
