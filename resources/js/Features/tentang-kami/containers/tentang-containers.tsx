import React from "react";
import HeroSection from "../components/hero/HeroSection";
import WhySection from "../components/why/WhySection";
import VisiMisiSection from "../components/visi/VisiMisiSection";
import CompleteProfileSection from "../components/profile/ProfileSection";
import LegalitySection from "../components/legality/LegalitySection";
import GreetingSection from "../components/greeting/GreetingSection";
import LocationSection from "../components/location/LocationSection";
import ContactSection from "../components/contact/ContactSection";

export default function LandingContainers() {
    return (
        <main className="relative w-full">
            <HeroSection />
            <CompleteProfileSection />
            <WhySection />
            <LegalitySection />
            <VisiMisiSection />
            <GreetingSection />
            <LocationSection />
            <ContactSection />
        </main>
    );
}
