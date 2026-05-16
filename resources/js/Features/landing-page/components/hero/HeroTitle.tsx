import { motion, type Variants } from "framer-motion";

const titleVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function HeroTitle() {
    return (
        <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5"
        >
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                Wujudkan Impian Belajar & Bekerja di Jepang
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl">
                Bersama Yayasan Jissho, kami mempersiapkan Anda dengan
                pembelajaran bahasa Jepang berkualitas, budaya kerja
                profesional, dan bimbingan karir untuk sukses di Negeri Sakura.
            </p>
        </motion.div>
    );
}
