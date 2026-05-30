import { Icon } from "@iconify/react";

interface FileUploadFieldProps {
    label: string;
    name: string;
    helperText?: string;
}

export default function FileUploadField({
    label,
    name,
    helperText = "Maksimal 500MB ukuran file",
}: FileUploadFieldProps) {
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
                className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-400/70 bg-gray-50 px-4 py-8 text-center transition-all hover:border-red-normal hover:bg-red-normal/5"
            >
                <span className="mb-4 inline-flex items-center gap-2 rounded-lg border border-slate-400/70 bg-white px-3 py-1.5 text-sm font-medium text-blue-dark">
                    <Icon icon="lucide:upload" className="text-base" />
                    Upload
                </span>

                <span className="text-base font-medium text-blue-dark">
                    Pilih sebuah file drag atau drop disini
                </span>

                <span className="mt-2 text-sm text-gray-500">{helperText}</span>

                <input id={name} name={name} type="file" className="hidden" />
            </label>
        </div>
    );
}
