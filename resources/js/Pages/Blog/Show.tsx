import { Head } from "@inertiajs/react";

import BlogDetailContainer from "@/Features/blog-page/containers/blog-detail-container";

interface ShowProps {
    slug: string;
}

export default function Show({ slug }: ShowProps) {
    return (
        <>
            <Head title="Detail Artikel - Yayasan Jissho" />
            <BlogDetailContainer slug={slug} />
        </>
    );
}
