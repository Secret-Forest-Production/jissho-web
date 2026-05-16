import React from 'react';
import { Head } from '@inertiajs/react';
import defaultLogo from '@/Shared/assets/logo.webp';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Yayasan Jissho - Lembaga Pelatihan Kerja ke Jepang terpercaya. Wujudkan impian berkarir di Jepang bersama kami.",
  image, 
  url = "https://yayasanjissho.com" //jangan lupa ganti url nya sesuai dengan url website yang sebenarnya ya ges yak
}) => {
  const fullTitle = `${title} | Yayasan Jissho`;
  
  const metaImage = image || defaultLogo;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={metaImage} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;