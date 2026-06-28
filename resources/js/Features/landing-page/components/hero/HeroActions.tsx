import React from "react";
import { motion } from "framer-motion";
import Button from "@/Components/ui/Button";
import { useTranslation } from "react-i18next";
import { usePage } from "@inertiajs/react";

export default function HeroActions() {
    const { t } = useTranslation("common");
    const { socialLinks } = usePage().props as any;
    const whatsappUrl = socialLinks?.whatsapp?.url || "https://wa.me/6281234567890";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start"
        >
            <Button href="/daftar-sekarang" variant="primary" size="lg">
                {t("hero.landing.cta_register")}
            </Button>

            <Button
                href={whatsappUrl}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t("hero.landing.cta_consultation")}
            </Button>
        </motion.div>
    );
}
