import SectionHero from "@/Components/ui/SectionHero";

interface ProgramHeroProps {
    badge: string;
    title: string;
    highlightText: string;
    titleSuffix?: string;
    description: string;
    backgroundImage: string;
}

export default function ProgramHero({
    badge,
    title,
    highlightText,
    titleSuffix,
    description,
    backgroundImage,
}: ProgramHeroProps) {
    return (
        <SectionHero
            badge={badge}
            title={title}
            highlightText={highlightText}
            titleSuffix={titleSuffix}
            description={description}
            backgroundImage={backgroundImage}
            headingId="program-hero-heading"
        />
    );
}
