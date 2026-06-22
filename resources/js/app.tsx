import "../css/app.css";

import { createInertiaApp, router } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import type { ReactNode } from "react";

import AppLayout from "@/Layouts/AppLayout";
import i18n from "./i18n";

const appName = import.meta.env.VITE_APP_NAME || "Yayasan Jissho";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx"),
        );

        page.then((module: any) => {
            module.default.layout =
                module.default.layout ||
                ((page: ReactNode) => <AppLayout>{page}</AppLayout>);
        });

        return page;
    },

    setup({ el, App, props }) {
        const root = createRoot(el);

        const locale = props.initialPage.props.locale as string | undefined;
        const siteSettings = props.initialPage.props.siteSettings as any;

        if (locale) {
            i18n.changeLanguage(locale);
            if (siteSettings) {
                i18n.addResourceBundle(locale, "common", siteSettings, true, true);
            }
        }

        // Listen for subsequent successful page transitions to update i18n dynamically
        router.on("success", (event) => {
            const page = event.detail.page;
            const currentLocale = page.props.locale as string | undefined;
            const currentSiteSettings = page.props.siteSettings as any;

            if (currentLocale) {
                i18n.changeLanguage(currentLocale);
                if (currentSiteSettings) {
                    i18n.addResourceBundle(currentLocale, "common", currentSiteSettings, true, true);
                }
            }
        });

        root.render(<App {...props} />);
    },

    progress: {
        color: "#4B5563",
    },
});
