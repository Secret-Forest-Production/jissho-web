import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import Button from "@/Components/ui/Button";

const inputClassName =
    "w-full rounded-[20px] bg-gray-50 py-3 pl-11 pr-4 text-sm text-text-gray outline-none transition-all duration-200 focus:ring-2 focus:ring-red-normal";

const labelClassName = "mb-1 block text-base font-semibold text-blue-dark";

const iconClassName =
    "absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 transition-colors group-focus-within:text-red-normal";

export default function ContactForm() {
    const { t } = useTranslation("common");

    return (
        <div className="rounded-[30px] bg-white p-8 shadow-lg md:p-10">
            <h3 className="mb-8 text-xl font-bold text-blue-dark">
                {t("about_page.contact.form.title")}
            </h3>

            <form
                className="space-y-6"
                aria-label={t("about_page.contact.form.aria_form")}
            >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="fullName" className={labelClassName}>
                            {t("about_page.contact.form.name_label")}
                        </label>

                        <div className="group relative">
                            <Icon
                                icon="tabler:user"
                                aria-hidden="true"
                                className={iconClassName}
                            />

                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                placeholder={t("about_page.contact.form.name_placeholder")}
                                className={inputClassName}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className={labelClassName}>
                            {t("about_page.contact.form.phone_label")}
                        </label>

                        <div className="group relative">
                            <Icon
                                icon="mynaui:telephone"
                                aria-hidden="true"
                                className={iconClassName}
                            />

                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel"
                                placeholder={t("about_page.contact.form.phone_placeholder")}
                                className={inputClassName}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="programInterest" className={labelClassName}>
                        {t("about_page.contact.form.program_label")}
                    </label>

                    <div className="group relative">
                        <Icon
                            icon="mdi:pencil-outline"
                            aria-hidden="true"
                            className={iconClassName}
                        />

                        <input
                            id="programInterest"
                            name="programInterest"
                            type="text"
                            placeholder={t("about_page.contact.form.program_placeholder")}
                            className={inputClassName}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
                    <Button type="button" variant="outlinered" size="md">
                        {t("hero.landing.cta_consultation")}
                    </Button>

                    <Button type="submit" variant="primary" size="md">
                        {t("hero.landing.cta_register")}
                    </Button>
                </div>
            </form>
        </div>
    );
}
