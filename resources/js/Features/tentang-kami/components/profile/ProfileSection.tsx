import { motion } from "framer-motion";

import { completeProfileData } from "../../data/profile/profile-link";

import CompleteProfileTitle from "./ProfileTitle";
import { profileImageVariants, profileTextVariants } from "./profile.animation";
import type { CompleteProfileData } from "./profile.type";

export default function CompleteProfileSection() {
    const { content } = completeProfileData as CompleteProfileData;

    return (
        <section
            id="profil-lengkap"
            aria-labelledby="complete-profile-heading"
            className="relative overflow-hidden bg-white py-24"
        >
            <div
                aria-hidden="true"
                className="absolute right-0 top-0 z-0 h-32 w-32 rounded-full bg-red-normal/5 blur-2xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <motion.article
                        variants={profileTextVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-80px",
                        }}
                    >
                        <CompleteProfileTitle />

                        <h3 className="mb-6 text-xl font-semibold leading-snug text-blue-dark md:text-2xl">
                            {content.quote}
                        </h3>

                        <div className="space-y-6 text-justify lg:text-left">
                            {content.paragraphs.map((text) => (
                                <p
                                    key={text}
                                    className="text-sm leading-relaxed text-text-gray md:text-base"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                    </motion.article>

                    <motion.figure
                        variants={profileImageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-80px",
                        }}
                    >
                        <img
                            src={content.image}
                            alt="Profil Yayasan Jissho dalam mendukung pembelajaran dan persiapan kerja ke Jepang"
                            loading="lazy"
                            draggable={false}
                            className="aspect-4/3 h-auto w-full object-cover"
                        />
                    </motion.figure>
                </div>
            </div>
        </section>
    );
}
