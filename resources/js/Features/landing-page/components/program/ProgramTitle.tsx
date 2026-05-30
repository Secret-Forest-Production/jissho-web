import { useTranslation } from "react-i18next";
import SectionHeader from "../../../../Components/ui/SectionHeader";
import { programData } from "../../data/program/program-link";

export default function ProgramTitle() {
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t(programData.title.main)}
            highlight={t(programData.title.highlight)}
            description={t(programData.description)}
        />
    );
}
