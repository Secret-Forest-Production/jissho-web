import { Link } from "@inertiajs/react";

export default function BlogDetailCta() {
    return (
        <section className="my-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-blue-dark p-8 shadow-lg md:flex-row">
            <div className="max-w-xl text-center text-white md:text-left">
                <h2 className="mb-2 text-2xl font-bold text-red-light">Tertarik Bergabung?</h2>
                <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                    Dapatkan konsultasi gratis mengenai peluang karier Anda di
                    Jepang bersama tim ahli Yayasan Jissho.
                </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-auto">
                <Link
                    href="/kontak"
                    className="bg-red-normal rounded-lg px-6 py-3 text-center font-bold text-white shadow-sm transition-colors hover:bg-red-normal-hover"
                >
                    Hubungi Kami
                </Link>
                <Link
                    href="/program"
                    className="border border-white rounded-lg bg-transparent px-6 py-3 text-center font-bold text-white transition-colors hover:bg-white hover:text-blue-dark"
                >
                    Lihat Program
                </Link>
            </div>
        </section>
    );
}
