import { MessageCircleOff } from "lucide-react";

export default function TestimoniEmpty() {
    return (
        <div className="mx-auto flex max-w-lg flex-col items-center rounded-2xl bg-white px-8 py-8 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-light">
                <MessageCircleOff className="h-8 w-8 text-red-normal" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-blue-dark">
                Belum Ada Testimoni
            </h3>

            <p className="mt-3 text-sm leading-7 text-grey-500">
                Saat ini belum ada alumni yang membagikan pengalaman mereka.
            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-red-normal/20" />
        </div>
    );
}
