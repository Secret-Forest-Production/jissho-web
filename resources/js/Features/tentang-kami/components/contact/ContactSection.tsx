import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ContactTitle from "./ContactTitle";
import ContactForm from "./ContactForm";
import { contactData } from "../../data/contact/contact-link";

export default function ContactSection() {
    return (
        <section className="py-24 bg-white" id="kontak">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                        <ContactTitle />
                        <h3 className="text-2xl font-bold text-blue-dark mt-8 leading-tight">
                            {contactData.content.quote}
                        </h3>
                        <p className="text-text-gray mt-6 leading-relaxed">
                            {contactData.content.description}
                        </p>

                        <div className="flex gap-4 mt-10">
                            {contactData.socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="blank"
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl transition-transform hover:-translate-y-1 ${social.color}`}
                                >
                                    <Icon icon={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
