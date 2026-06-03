import SEO from "@/Components/shared/SEO";
import TentangContainers from "@/Features/tentang-kami/containers/tentang-containers";
import { PageProps } from "@/types";

export default function TentangKami({ auth }: PageProps) {
    return (
        <>
            <SEO
                title="Tentang Kami"
                description="Kenali Yayasan Jissho sebagai lembaga pelatihan bahasa Jepang, persiapan budaya kerja, dan pendampingan untuk belajar serta bekerja di Jepang."
            />

            <main className="pt-20">
                <TentangContainers />
            </main>
        </>
    );
}