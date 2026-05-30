import { useTranslation } from "react-i18next";
import SectionHeader from "../../../../Components/ui/SectionHeader";
import { aboutData } from "../../data/about/about-link";

export default function AboutTitle() {
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t(aboutData.title.main)}
            highlight={t(aboutData.title.highlight)}
            description={t(aboutData.description)}
        />
    );
}
