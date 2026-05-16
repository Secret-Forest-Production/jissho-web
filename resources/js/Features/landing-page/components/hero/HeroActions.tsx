import React from "react";
import { motion } from "framer-motion";
import Button from "@/Components/ui/Button";

export default function HeroActions() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start"
        >
            <Button href="/daftar" variant="primary" size="lg">
                Daftar Sekarang
            </Button>

            <Button href="/konsultasi" variant="outline" size="lg">
                Konsultasi Gratis
            </Button>
        </motion.div>
    );
}
