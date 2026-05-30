import { Head } from "@inertiajs/react";
import RegisterContainer from "@/Features/program-page/containers/RegisterContainer";
import { useTranslation } from "react-i18next";

export default function Register() {
    const { t } = useTranslation("common");

    return (
        <>
            <Head title={`${t("register_page.title")} - Yayasan Jissho`} />
            <RegisterContainer />
        </>
    );
}
