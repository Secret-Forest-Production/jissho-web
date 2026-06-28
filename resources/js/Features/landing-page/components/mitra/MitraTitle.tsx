import { useTranslation } from "react-i18next";
import SectionHeader from "../../../../Components/ui/SectionHeader";
import { mitraData } from "../../data/mitra/mitra-link";

export default function MitraTitle() {
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("mitra.title")}
            highlight={t("mitra.highlight")}
            description={t("mitra.description")}
            className="mb-0"
        />
    );
}
