import { Search } from "lucide-react";


interface SearchWidgetProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchWidget({ value, onChange }: SearchWidgetProps) {
    return (
        <section className="border border-grey-border bg-white p-6 rounded-lg">
            <div className="mb-4 flex items-center gap-2">
                <Search className="h-4 w-4 text-red-700" />
                <h2 className="text-lg font-bold text-gray-900">
                    Cari Artikel
                </h2>
            </div>

            <div className="relative">
                <Search
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="search"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder="Masukkan kata kunci..."
                    aria-label="Cari artikel"
                    className="w-full border rounded-sm border-grey-border py-2 pl-10 pr-4 text-sm transition-colors focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700"
                />
            </div>
        </section>
    );
}
