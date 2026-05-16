import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import ContactTitle from "./ContactTitle";

import { contactData } from "../../data/contact/contact-link";
import { contactFormVariants } from "./contact.animation";
import type { ContactData, ContactSocial } from "./contact.type";

export default function ContactSection() {
    const { content, socials } = contactData as ContactData;

    return (
        <section
            id="kontak"
            aria-labelledby="contact-heading"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <ContactTitle />

                        <h3 className="mt-8 text-2xl font-bold leading-tight text-blue-dark">
                            {content.quote}
                        </h3>

                        <p className="mt-6 leading-relaxed text-text-gray">
                            {content.description}
                        </p>

                        <nav
                            aria-label="Media sosial Yayasan Jissho"
                            className="mt-10 flex gap-4"
                        >
                            {socials.map((social: ContactSocial) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-3xl transition-transform hover:-translate-y-1 ${social.color}`}
                                >
                                    <Icon
                                        icon={social.icon}
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                        </nav>
                    </div>

                    <motion.div
                        variants={contactFormVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-80px",
                        }}
                        className="lg:col-span-7"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
