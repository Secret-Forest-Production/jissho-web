import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import { footerLinks } from "@/Shared/data/footer-link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation("common");

    return (
        <footer className="bg-blue-dark pb-8 pt-16 font-sans text-gray-400">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">
                        {t("footer.brandTitle")}{" "}
                        <span className="text-red-normal">
                            {t("footer.brandHighlight")}
                        </span>
                    </h3>

                    <p className="text-sm leading-relaxed">
                        {t("footer.description")}
                    </p>

                    <div className="flex items-center gap-3">
                        {footerLinks.socials.map((social) => (
                            <a
                                key={social.href}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-all hover:bg-red-normal hover:text-white"
                                aria-label={social.label}
                            >
                                <Icon
                                    icon={social.icon}
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="mb-6 font-semibold text-white">
                        {t("footer.quickLinks")}
                    </h4>

                    <ul className="space-y-4 text-sm font-medium">
                        {footerLinks.quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="transition-colors hover:text-red-light-active"
                                >
                                    {t(link.labelKey)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="mb-6 font-semibold text-white">
                        {t("footer.program")}
                    </h4>

                    <ul className="space-y-4 text-sm font-medium">
                        {footerLinks.programs.map((link) => (
                            <li key={link.labelKey}>
                                <Link
                                    href={link.href}
                                    className="transition-colors hover:text-red-light-active"
                                >
                                    {t(link.labelKey)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="mb-6 font-semibold text-white">
                        {t("footer.contact")}
                    </h4>

                    <ul className="space-y-5 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin
                                className="h-5 w-5 shrink-0 text-red-normal"
                                aria-hidden="true"
                            />
                            <span className="leading-tight">
                                {footerLinks.contact.address}
                            </span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Phone
                                className="h-5 w-5 shrink-0 text-red-normal"
                                aria-hidden="true"
                            />
                            <span>{footerLinks.contact.phone}</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Mail
                                className="h-5 w-5 shrink-0 text-red-normal"
                                aria-hidden="true"
                            />
                            <span>
                                info<span className="sr-only"> at </span>
                                @yayasanjissho.com
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl border-t border-white/5 px-4 pt-8 text-center text-xs text-gray-500">
                <p>
                    © {currentYear} Yayasan Jissho. {t("footer.copyright")}
                </p>
            </div>
        </footer>
    );
}
