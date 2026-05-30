import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import GaleriTitle from "./GaleriTitle";
import GaleriImage from "./GaleriImage";
import Button from "@/Components/ui/Button";

export default function GaleriSection() {
    const { t } = useTranslation("common");

    return (
        <section id="galeri" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <GaleriTitle />
                <GaleriImage />

                <div className="mt-10 flex justify-center">
                    <Button
                        href="/galeri"
                        variant="primary"
                        size="md"
                        className="inline-flex items-center gap-2"
                    >
                        {t("hero.services.more")}
                        <Icon
                            icon="heroicons:arrow-right-20-solid"
                            className="text-lg"
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}
