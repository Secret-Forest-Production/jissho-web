import React from 'react';
import { heroData } from '../../data/hero/hero-link';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <img 
                src={heroData.backgroundImage} 
                alt="Background Jissho" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-hero-gradient" />
        </div>
    );
}