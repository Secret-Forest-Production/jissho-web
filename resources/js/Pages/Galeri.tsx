import SEO from "@/Components/shared/SEO";
import GalleryContainers from "@/Features/gallery/containers/gallery-containers";
import { PageProps } from "@/types";

interface GaleriProps extends PageProps {
    galleries: any[];
}

export default function Galeri({ auth, galleries }: GaleriProps) {
    return (
        <>
            <SEO
                title="Galeri"
                description="Lihat dokumentasi kegiatan, suasana pembelajaran, pelatihan, dan aktivitas Yayasan Jissho dalam mempersiapkan peserta untuk belajar dan bekerja di Jepang."
            />

            <main className="pt-20">
                <GalleryContainers galleries={galleries} />
            </main>
        </>
    );
}