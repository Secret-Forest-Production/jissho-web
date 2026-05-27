import SectionHero from "@/Components/ui/SectionHero";
import { blogHeroData } from "../../data/blog";

export default function BlogHero() {
    return (
        <SectionHero
            badge={blogHeroData.badge}
            title={blogHeroData.title}
            highlightText={blogHeroData.highlight}
            titleSuffix={blogHeroData.titleSuffix}
            description={blogHeroData.description}
            backgroundImage={blogHeroData.backgroundImage}
            headingId="blog-hero-heading"
        />
    );
}
