import SEO from "@/Components/shared/SEO";
import BlogContainer from "@/Features/blog-page/containers/blog-container";

export default function Index() {
    return (
        <>
            <SEO
                title="Berita & Wawasan Terbaru"
                description="Baca artikel dan informasi terbaru seputar belajar bahasa Jepang, persiapan JLPT, budaya kerja Jepang, dan peluang bekerja di Jepang."
            />

            <BlogContainer />
        </>
    );
}