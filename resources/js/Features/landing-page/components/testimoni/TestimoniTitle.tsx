import { useTranslation } from "react-i18next";
import SectionHeader from "../../../../Components/ui/SectionHeader";

export default function TestimoniTitle() {
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("testimoni.title")}
            highlight={t("testimoni.highlight")}
            description={t("testimoni.description")}
        />
    );
}
