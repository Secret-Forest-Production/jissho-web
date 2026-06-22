import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDown, AlignRight , X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

import LanguageSwitcher from "@/Components/ui/LanguageSwitcher";
import { navLinks } from "@/Shared/data/nav-link";
import Logo from "@/Shared/assets-optimized/logo.webp";

type NavChild = {
    labelKey: string;
    href: string;
    icon?: string;
};

type NavItem = {
    labelKey: string;
    href: string;
    children?: NavChild[];
};

type TranslateFn = (key: string) => string;

const NAVBAR_HEIGHT_CLASS = "h-20";
const MOBILE_MENU_TOP_CLASS = "top-20";

function hasChildren(
    link: NavItem,
): link is NavItem & { children: NavChild[] } {
    return Boolean(link.children?.length);
}

function isActivePath(currentUrl: string, href: string) {
    return currentUrl === href || (href !== "/" && currentUrl.startsWith(href));
}

function isHashActive(currentUrl: string, href: string) {
    const [path] = href.split("#");

    return currentUrl === href || currentUrl.startsWith(path);
}

function scrollToSection(href: string) {
    const [, hash] = href.split("#");

    if (!hash) return;

    const element = document.getElementById(hash);

    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

interface ActiveUnderlineProps {
    isActive: boolean;
}

function ActiveUnderline({ isActive }: ActiveUnderlineProps) {
    return (
        <span
            className={`absolute bottom-0 left-0 h-0.5 bg-red-normal transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
        />
    );
}

interface DesktopNavLinkProps {
    link: NavItem;
    currentUrl: string;
    t: TranslateFn;
}

function DesktopNavLink({ link, currentUrl, t }: DesktopNavLinkProps) {
    const isItemActive = isActivePath(currentUrl, link.href);

    if (hasChildren(link)) {
        return (
            <div className="group relative">
                <button
                    type="button"
                    aria-haspopup="true"
                    className={`relative flex items-center gap-1 py-2 text-[15px] font-medium transition-all duration-300 ${
                        isItemActive
                            ? "text-red-normal"
                            : "text-blue-dark/80 hover:text-red-normal"
                    }`}
                >
                    {t(link.labelKey)}

                    <ChevronDown
                        className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                        aria-hidden="true"
                    />

                    <ActiveUnderline isActive={isItemActive} />
                </button>

                <div className="invisible absolute left-0 top-full min-w-60 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                        {link.children.map((child) => (
                            <DesktopDropdownItem
                                key={child.href}
                                child={child}
                                currentUrl={currentUrl}
                                t={t}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link
            href={link.href}
            className={`group relative py-2 text-[15px] font-medium transition-all duration-300 ${
                isItemActive
                    ? "text-red-normal"
                    : "text-blue-dark/80 hover:text-red-normal"
            }`}
        >
            {t(link.labelKey)}
            <ActiveUnderline isActive={isItemActive} />
        </Link>
    );
}

interface DesktopDropdownItemProps {
    child: NavChild;
    currentUrl: string;
    t: TranslateFn;
}

function DesktopDropdownItem({
    child,
    currentUrl,
    t,
}: DesktopDropdownItemProps) {
    const isChildActive = isHashActive(currentUrl, child.href);

    const handleClick = () => {
        scrollToSection(child.href);
    };

    return (
        <Link
            href={child.href}
            onClick={handleClick}
            className={`group flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all ${
                isChildActive
                    ? "bg-red-light/30 text-red-normal"
                    : "text-blue-dark/80 hover:bg-gray-100 hover:text-red-normal"
            }`}
        >
            {child.icon && (
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                    isChildActive
                        ? "bg-red-normal/10 text-red-normal"
                        : "bg-gray-100 text-blue-dark/70 group-hover:bg-red-normal/10 group-hover:text-red-normal"
                }`}>
                    <Icon
                        icon={child.icon}
                        className="h-5 w-5"
                    />
                </span>
            )}

            <span>{t(child.labelKey)}</span>
        </Link>
    );
}

interface MobileNavLinkProps {
    link: NavItem;
    currentUrl: string;
    openDropdown: string | null;
    onToggleDropdown: (href: string) => void;
    onCloseMenu: () => void;
    t: TranslateFn;
}

function MobileNavLink({
    link,
    currentUrl,
    openDropdown,
    onToggleDropdown,
    onCloseMenu,
    t,
}: MobileNavLinkProps) {
    const isItemActive = isActivePath(currentUrl, link.href);

    if (hasChildren(link)) {
        const isDropdownOpen = openDropdown === link.href;

        return (
            <div>
                <button
                    type="button"
                    onClick={() => onToggleDropdown(link.href)}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium transition-all ${
                        isItemActive
                            ? "bg-red-light/40 text-red-normal"
                            : "text-blue-dark/80 hover:bg-red-light/20"
                    }`}
                >
                    <span>{t(link.labelKey)}</span>

                    <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                    />
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        isDropdownOpen
                            ? "mt-2 max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="space-y-2 pl-3">
                        {link.children.map((child) => (
                            <MobileDropdownItem
                                key={child.href}
                                child={child}
                                currentUrl={currentUrl}
                                onCloseMenu={onCloseMenu}
                                t={t}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link
            href={link.href}
            onClick={onCloseMenu}
            className={`rounded-lg px-4 py-3 font-medium transition-all ${
                isItemActive
                    ? "bg-red-light/40 text-red-normal"
                    : "text-blue-dark/80 hover:bg-red-light/20"
            }`}
        >
            {t(link.labelKey)}
        </Link>
    );
}

interface MobileDropdownItemProps {
    child: NavChild;
    currentUrl: string;
    onCloseMenu: () => void;
    t: TranslateFn;
}

function MobileDropdownItem({
    child,
    currentUrl,
    onCloseMenu,
    t,
}: MobileDropdownItemProps) {
    const isChildActive = isHashActive(currentUrl, child.href);

    const handleClick = () => {
        onCloseMenu();

        window.setTimeout(() => {
            scrollToSection(child.href);
        }, 300);
    };

    return (
        <Link
            href={child.href}
            onClick={handleClick}
            className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                isChildActive
                    ? "bg-red-light/40 text-red-normal"
                    : "text-blue-dark/80 hover:bg-red-light/20 hover:text-red-normal"
            }`}
        >
            {child.icon && (
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                    isChildActive
                        ? "bg-red-normal/15 text-red-normal"
                        : "bg-gray-50 text-blue-dark/70 group-hover:bg-red-normal/10 group-hover:text-red-normal"
                }`}>
                    <Icon
                        icon={child.icon}
                        className="h-6 w-6"
                    />
                </span>
            )}

            <span className="font-medium">{t(child.labelKey)}</span>
        </Link>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
        null,
    );

    const { url } = usePage();
    const { t: translate } = useTranslation("common");

    const t: TranslateFn = (key) => translate(key);

    const closeMobileMenu = () => {
        setIsOpen(false);
        setOpenMobileDropdown(null);
    };

    const toggleMobileMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleMobileDropdown = (href: string) => {
        setOpenMobileDropdown((prev) => (prev === href ? null : href));
    };

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between ${NAVBAR_HEIGHT_CLASS}`}
                >
                    <Link href="/" className="shrink-0" aria-label="Beranda">
                        <img
                            src={Logo}
                            alt="Logo Jissho"
                            draggable={false}
                            className="h-16"
                        />
                    </Link>

                    <div className="hidden items-center gap-8 lg:flex">
                        <div className="mr-4 flex items-center gap-8">
                            {navLinks.map((link) => (
                                <DesktopNavLink
                                    key={link.href}
                                    link={link}
                                    currentUrl={url}
                                    t={t}
                                />
                            ))}
                        </div>

                        <LanguageSwitcher />
                    </div>

                    <div className="flex items-center gap-2 lg:hidden">
                        <LanguageSwitcher />

                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                            aria-expanded={isOpen}
                            className="p-2 text-blue-dark transition-transform active:scale-90"
                        >
                            <span
                                className={`block transition-transform duration-300 ${
                                    isOpen
                                        ? "rotate-90 text-red-normal"
                                        : "rotate-0"
                                }`}
                            >
                                {isOpen ? (
                                    <X className="h-8 w-8" aria-hidden="true" />
                                ) : (
                                    <AlignRight
                                        className="h-8 w-8"
                                        aria-hidden="true"
                                    />
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`absolute left-0 ${MOBILE_MENU_TOP_CLASS} w-full overflow-hidden border-b border-gray-100 bg-white transition-all duration-500 lg:hidden ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col space-y-2 px-4 pb-8 pt-4">
                    {navLinks.map((link) => (
                        <MobileNavLink
                            key={link.href}
                            link={link}
                            currentUrl={url}
                            openDropdown={openMobileDropdown}
                            onToggleDropdown={toggleMobileDropdown}
                            onCloseMenu={closeMobileMenu}
                            t={t}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
}
