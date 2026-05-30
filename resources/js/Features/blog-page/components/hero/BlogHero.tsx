import { useTranslation } from "react-i18next";

import SectionHero from "@/Components/ui/SectionHero";
import { blogHeroData } from "../../data/blog";

export default function BlogHero() {
    const { t } = useTranslation("common");

    return (
        <SectionHero
            badge={t(blogHeroData.badgeKey)}
            title={t(blogHeroData.titleKey)}
            highlightText={t(blogHeroData.highlightKey)}
            titleSuffix={t(blogHeroData.titleSuffixKey)}
            description={t(blogHeroData.descriptionKey)}
            backgroundImage={blogHeroData.backgroundImage}
            headingId="blog-hero-heading"
        />
    );
}
