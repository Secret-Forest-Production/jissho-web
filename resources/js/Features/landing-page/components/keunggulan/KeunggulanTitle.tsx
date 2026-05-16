import SectionHeader from "../../shared/SectionHeader";
import { keunggulanData } from "../../data/keunggulan/keunggulan-link";

export default function KeunggulanTitle() {
    return (
        <SectionHeader
            title={keunggulanData.title.main}
            highlight={keunggulanData.title.highlight}
            description={keunggulanData.description}
        />
    );
}
