import { useTranslation } from "react-i18next";
import SectionHeader from "../../../../Components/ui/SectionHeader";
import { galeriData } from "../../data/galeri/galeri-link";

export default function GaleriTitle() {
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t(galeriData.title.main)}
            highlight={t(galeriData.title.highlight)}
            description={t(galeriData.description)}
        />
    );
}
