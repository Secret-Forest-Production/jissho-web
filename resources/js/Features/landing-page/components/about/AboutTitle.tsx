import SectionHeader from "../../shared/SectionHeader";
import { aboutData } from "../../data/about/about-link";

export default function AboutTitle() {
    return (
        <SectionHeader
            title={aboutData.title.main}
            highlight={aboutData.title.highlight}
            description={aboutData.description}
        />
    );
}
