import ProgramContainer from "@/Features/program-page/containers/ProgramContainer";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function Index() {
    const { t } = useTranslation("common");

    return (
        <>
            <Head title={t("nav.program")} />
            <ProgramContainer />
        </>
    );
}
