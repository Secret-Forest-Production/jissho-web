import SectionHeader from "../../../../Components/ui/SectionHeader";
import { programData } from "../../data/program/program-link";

export default function ProgramTitle() {
    return (
        <SectionHeader
            title={programData.title.main}
            highlight={programData.title.highlight}
            description={programData.description}
        />
    );
}
