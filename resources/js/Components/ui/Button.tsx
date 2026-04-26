import React from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';

interface ButtonProps {
    href?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
    iconLeft?: string;
    iconRight?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    iconLeft,
    iconRight,
    onClick,
    type = 'button',
}: ButtonProps) {
    
    // Base styles 
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all active:scale-95 duration-200 rounded-[10px] gap-2";

    // Variant 
    const variants = {
        primary: "bg-red-normal text-white hover:bg-red-normal-hover",
        outline: "border-2 border-red-normal text-white hover:bg-red-normal/10 ",
        ghost: "text-red-normal hover:bg-red-light/30 bg-transparent",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-2.5 text-sm md:px-7 md:py-3 md:text-base",
        lg: "px-6 py-3 text-base lg:px-8 lg:py-4 lg:text-lg",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // Render icon
    const renderIcon = (name?: string) => name ? <Icon icon={name} className="text-xl" /> : null;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {renderIcon(iconLeft)}
                {children}
                {renderIcon(iconRight)}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses}>
            {renderIcon(iconLeft)}
            {children}
            {renderIcon(iconRight)}
        </button>
    );
}