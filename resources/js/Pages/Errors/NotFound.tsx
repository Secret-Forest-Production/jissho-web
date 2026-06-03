import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

import SEO from "@/Components/shared/SEO";

export default function NotFound() {
    return (
        <>
            <SEO
                title="Halaman Tidak Ditemukan"
                description="Halaman yang Anda cari tidak tersedia atau sudah dipindahkan."
            />

            <main className="flex min-h-screen items-center justify-center bg-white px-4 py-20">
                <section className="mx-auto max-w-2xl text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-normal">
                        404 Error
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-blue-dark md:text-5xl">
                        Halaman Tidak Ditemukan
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-text-gray md:text-lg">
                        Maaf, halaman yang Anda cari tidak tersedia atau sudah
                        dipindahkan. Silakan kembali ke beranda atau hubungi
                        kami untuk informasi lebih lanjut.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-normal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-normal-hover"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Kembali
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
