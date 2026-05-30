import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface FileUploadFieldProps {
    label: string;
    name: string;
    helperText?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUploadField({
    label,
    name,
    helperText,
    onChange,
}: FileUploadFieldProps) {
    const { t } = useTranslation("common");
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : null);
        
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div>
            <label
                htmlFor={name}
                className="mb-3 block text-sm font-semibold text-blue-dark"
            >
                {label}
            </label>

            <label
                htmlFor={name}
                className={`flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-4 py-8 text-center transition-all ${
                    fileName 
                    ? "border-red-normal bg-red-normal/5" 
                    : "border-slate-400/70 bg-gray-50 hover:border-red-normal hover:bg-red-normal/5"
                }`}
            >
                <span className={`mb-4 inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5 text-sm font-medium ${fileName ? 'border-red-normal text-red-normal' : 'border-slate-400/70 text-blue-dark'}`}>
                    <Icon icon={fileName ? "lucide:check-circle-2" : "lucide:upload"} className="text-base" />
                    {fileName ? "File Terpilih" : t("register_page.form.upload_btn")}
                </span>

                <span className={`text-base font-medium ${fileName ? 'text-red-normal' : 'text-blue-dark'}`}>
                    {fileName || t("register_page.form.upload_hint")}
                </span>

                {!fileName && (
                    <span className="mt-2 text-sm text-gray-500">
                        {helperText || t("register_page.form.upload_max_size")}
                    </span>
                )}

                <input 
                    id={name} 
                    name={name} 
                    type="file" 
                    onChange={handleFileChange}
                    className="hidden" 
                />
            </label>
        </div>
    );
}
