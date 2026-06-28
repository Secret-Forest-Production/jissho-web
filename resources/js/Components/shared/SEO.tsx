import React from "react";
import { Head, usePage } from "@inertiajs/react";

import defaultLogo from "@/Shared/assets-optimized/logo.webp";

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    structuredData?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "Yayasan Jissho - Lembaga Pelatihan Kerja ke Jepang terpercaya. Wujudkan impian berkarir di Jepang bersama kami.",
    image,
    url,
    structuredData,
}) => {
    const { url: currentUrl, props } = usePage();
    const { socialLinks } = props as any;

    const appUrl = import.meta.env.VITE_APP_URL || window.location.origin;

    const cleanCurrentUrl = currentUrl.split("?")[0];
    const canonicalUrl = url || `${appUrl}${cleanCurrentUrl}`;

    const toAbsoluteUrl = (path: string) => {
        if (path.startsWith("http")) return path;

        return `${appUrl}${path.startsWith("/") ? path : `/${path}`}`;
    };

    const fullTitle = `${title} | Yayasan Jissho`;
    const metaImage = toAbsoluteUrl(image || defaultLogo);

    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Yayasan Jissho",
        url: appUrl,
        logo: toAbsoluteUrl(defaultLogo),
        description:
            "Yayasan Jissho menyediakan kursus bahasa Jepang, pelatihan budaya kerja, dan persiapan belajar serta bekerja di Jepang untuk pelajar dan pencari kerja Indonesia.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Pendidikan No. 123",
            addressLocality: "Jakarta Selatan",
            addressRegion: "DKI Jakarta",
            postalCode: "12345",
            addressCountry: "ID",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62 21 1234 5678",
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: ["Indonesian", "Japanese"],
        },
        sameAs: [
            socialLinks?.instagram?.url || "https://instagram.com/yayasanjissho",
            socialLinks?.facebook?.url || "https://facebook.com/yayasanjissho",
            socialLinks?.youtube?.url || "https://youtube.com/@yayasanjissho",
        ],
    };

    const jsonLd = structuredData || defaultStructuredData;

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={metaImage} />

            <link rel="canonical" href={canonicalUrl} />

            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Head>
    );
};

export default SEO;