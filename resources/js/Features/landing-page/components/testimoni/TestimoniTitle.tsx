import SectionHeader from "../../shared/SectionHeader";
import { testimoniData } from "../../data/testimoni/testimoni-link";

export default function TestimoniTitle() {
    return (
        <SectionHeader
            title={testimoniData.title.main}
            highlight={testimoniData.title.highlight}
            description={testimoniData.description}
        />
    );
}
