import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function CtaWidget() {
    const { t } = useTranslation("common");

    return (
        <div className="bg-red-normal p-6 text-center text-white flex flex-col items-center justify-center rounded-lg">
            <h3 className="font-bold text-lg mb-2">{t("blog.cta.sidebarTitle")}</h3>
            <p className="text-sm mb-6 text-red-100">
                {t("blog.cta.sidebarDescription")}
            </p>
            <Link
                href="/daftar-sekarang"
                className="bg-white text-red-normal rounded-sm font-bold py-2 px-6 w-full hover:bg-gray-50 transition-colors shadow-sm text-center"
            >
                {t("blog.cta.sidebarButton")}
            </Link>
        </div>
    );
}
