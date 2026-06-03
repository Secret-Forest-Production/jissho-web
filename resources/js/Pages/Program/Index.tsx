import SEO from "@/Components/shared/SEO";
import ProgramContainer from "@/Features/program-page/containers/ProgramContainer";
import { useTranslation } from "react-i18next";

export default function Index() {
    const { t } = useTranslation("common");

    return (
        <>
            <SEO
                title={t("nav.program")}
                description="Temukan program Yayasan Jissho mulai dari kursus bahasa Jepang, persiapan JLPT, pelatihan budaya kerja, hingga persiapan belajar dan bekerja di Jepang."
            />

            <ProgramContainer />
        </>
    );
}