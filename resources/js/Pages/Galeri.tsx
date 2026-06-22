import SEO from "@/Components/shared/SEO";
import GalleryContainers from "@/Features/gallery/containers/gallery-containers";
import { PageProps } from "@/types";

export default function Galeri({ auth }: PageProps) {
    return (
        <>
            <SEO
                title="Galeri"
                description="Lihat dokumentasi kegiatan, suasana pembelajaran, pelatihan, dan aktivitas Yayasan Jissho dalam mempersiapkan peserta untuk belajar dan bekerja di Jepang."
            />

            <main className="pt-20">
                <GalleryContainers />
            </main>
        </>
    );
}