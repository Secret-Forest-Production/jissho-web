import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { navLinks } from "@/Shared/data/nav-link";
import Button from "@/Components/ui/Button";
import Logo from "@/Shared/assets/logo.webp";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { url } = usePage();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="shrink-0">
                        <Link href="/">
                            <img
                                src={Logo}
                                alt="Logo"
                                draggable={false}
                                className="h-16"
                            />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex items-center gap-8 mr-4">
                            {navLinks.map((link) => {
                                const isItemActive =
                                    url === link.href ||
                                    (link.href !== "/" &&
                                        url.startsWith(link.href));

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative py-2 font-medium text-[15px] transition-all duration-300 group
                      ${isItemActive ? "text-red-normal" : "text-blue-dark/80 hover:text-red-normal"}
                    `}
                                    >
                                        {link.label}

                                        <span
                                            className={`absolute bottom-0 left-0 h-0.5 bg-red-normal transition-all duration-300
                      ${isItemActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                                        />
                                    </Link>
                                );
                            })}
                        </div>

                        <Button href="/daftar" variant="primary" size="md">
                            Daftar Sekarang
                        </Button>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-blue-dark p-2 active:scale-90 transition-transform"
                        >
                            <Icon
                                icon={
                                    isOpen
                                        ? "heroicons:x-mark-20-solid"
                                        : "heroicons:bars-3-bottom-right-20-solid"
                                }
                                className={`text-3xl transition-all duration-300 ${isOpen ? "rotate-90 text-red-normal" : ""}`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 transition-all duration-500 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col">
                    {navLinks.map((link) => {
                        const isItemActive =
                            url === link.href ||
                            (link.href !== "/" && url.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                                    isItemActive
                                        ? "bg-red-light/40 text-red-normal"
                                        : "text-blue-dark/80 hover:bg-red-light/20"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
