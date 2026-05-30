import { useTranslation } from "react-i18next";
import SectionHeader from "../../../../Components/ui/SectionHeader";
import { keunggulanData } from "../../data/keunggulan/keunggulan-link";

export default function KeunggulanTitle() {
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t(keunggulanData.title.main)}
            highlight={t(keunggulanData.title.highlight)}
            description={t(keunggulanData.description)}
        />
    );
}
