import { motion } from "framer-motion";

import Dokumentasi from "@/Shared/assets-optimized/home/keunggulan-img.webp";
import { fadeInLeftVariants } from "./keunggulan.animation";

export default function KeunggulanImage() {
    return (
        <motion.figure
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-80px",
            }}
            className="relative z-20 flex-1 pb-10 lg:-mt-12 lg:pb-0"
        >
            <img
                src={Dokumentasi}
                alt="Dokumentasi kegiatan pembelajaran dan pelatihan Yayasan Jissho"
                loading="lazy"
                draggable={false}
                className="h-auto w-full object-cover"
            />
        </motion.figure>
    );
}
