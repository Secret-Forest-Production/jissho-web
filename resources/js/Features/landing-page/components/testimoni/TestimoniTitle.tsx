import { useTranslation } from "react-i18next";
import SectionHeader from "../../../../Components/ui/SectionHeader";
import { testimoniData } from "../../data/testimoni/testimoni-link";

export default function TestimoniTitle() {
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t(testimoniData.title.main)}
            highlight={t(testimoniData.title.highlight)}
            description={t(testimoniData.description)}
        />
    );
}
