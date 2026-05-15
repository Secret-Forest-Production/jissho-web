import React from "react";
import LocationTitle from "./LocationTitle";
import LocationCard from "./LocationCard";
import { locationData } from "../../data/location/location-link";

export default function LocationSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <LocationTitle />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                    {locationData.offices.map((office, index) => (
                        <LocationCard key={index} {...office} />
                    ))}
                </div>

                <div className="mt-12 w-full h-112.5 rounded-[20px] overflow-hidden shadow-2xl ">
                    <iframe
                        src={locationData.offices[0].mapUrl}
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
