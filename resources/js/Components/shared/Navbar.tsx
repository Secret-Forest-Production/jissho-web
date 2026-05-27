import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";

import { navLinks } from "@/Shared/data/nav-link";
import Logo from "@/Shared/assets/logo.webp";

type NavChild = {
    label: string;
    href: string;
    icon?: string;
};

type NavItem = {
    label: string;
    href: string;
    children?: NavChild[];
};

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

interface DesktopNavLinkProps {
    link: NavItem;
    currentUrl: string;
}

function DesktopNavLink({ link, currentUrl }: DesktopNavLinkProps) {
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
                    {link.label}

                    <Icon
                        icon="heroicons:chevron-down-20-solid"
                        className="text-base transition-transform duration-300 group-hover:rotate-180"
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
            {link.label}
            <ActiveUnderline isActive={isItemActive} />
        </Link>
    );
}

interface DesktopDropdownItemProps {
    child: NavChild;
    currentUrl: string;
}

function DesktopDropdownItem({ child, currentUrl }: DesktopDropdownItemProps) {
    const isChildActive = isHashActive(currentUrl, child.href);

    return (
        <Link
            href={child.href}
            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all ${
                isChildActive
                    ? " text-blue-dark/80 "
                    : "text-blue-dark/80 hover:bg-gray-100 hover:text-red-normal"
            }`}
        >
            {child.icon && (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                    <img
                        src={child.icon}
                        alt={child.label}
                        draggable={false}
                        className="h-5 w-5 object-contain"
                    />
                </span>
            )}

            <span>{child.label}</span>
        </Link>
    );
}

interface MobileNavLinkProps {
    link: NavItem;
    currentUrl: string;
    openDropdown: string | null;
    onToggleDropdown: (href: string) => void;
    onCloseMenu: () => void;
}

function MobileNavLink({
    link,
    currentUrl,
    openDropdown,
    onToggleDropdown,
    onCloseMenu,
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
                    <span>{link.label}</span>

                    <Icon
                        icon="heroicons:chevron-down-20-solid"
                        className={`text-xl transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                        }`}
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
            {link.label}
        </Link>
    );
}

interface MobileDropdownItemProps {
    child: NavChild;
    currentUrl: string;
    onCloseMenu: () => void;
}

function MobileDropdownItem({
    child,
    currentUrl,
    onCloseMenu,
}: MobileDropdownItemProps) {
    const isChildActive = isHashActive(currentUrl, child.href);

    return (
        <Link
            href={child.href}
            onClick={onCloseMenu}
            className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                isChildActive
                    ? "bg-red-light/40 text-red-normal"
                    : "text-blue-dark/80 hover:bg-red-light/20"
            }`}
        >
            {child.icon && (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                    <img
                        src={child.icon}
                        alt={child.label}
                        draggable={false}
                        className="h-7 w-7 object-contain"
                    />
                </span>
            )}

            <span className="font-medium">{child.label}</span>
        </Link>
    );
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

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
        null,
    );

    const { url } = usePage();

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
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                        aria-expanded={isOpen}
                        className="p-2 text-blue-dark transition-transform active:scale-90 lg:hidden"
                    >
                        <Icon
                            icon={
                                isOpen
                                    ? "heroicons:x-mark-20-solid"
                                    : "heroicons:bars-3-bottom-right-20-solid"
                            }
                            className={`text-3xl transition-all duration-300 ${
                                isOpen ? "rotate-90 text-red-normal" : ""
                            }`}
                        />
                    </button>
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
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
}
