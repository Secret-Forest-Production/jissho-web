import LocationCard from "./LocationCard";
import LocationTitle from "./LocationTitle";

import { locationData } from "../../data/location/location-link";
import type { LocationData, OfficeLocation } from "./location.type";

export default function LocationSection() {
    const { offices } = locationData as LocationData;
    const mainOffice = offices[0];

    return (
        <section
            id="lokasi"
            aria-labelledby="location-heading"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <LocationTitle />

                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {offices.map((office: OfficeLocation) => (
                        <LocationCard
                            key={`${office.country}-${office.name}`}
                            office={office}
                        />
                    ))}
                </div>

                {mainOffice?.mapUrl && (
                    <div className="mt-12 h-112.5 w-full overflow-hidden rounded-[20px] shadow-2xl">
                        <iframe
                            title={`Peta lokasi ${mainOffice.name}`}
                            src={mainOffice.mapUrl}
                            className="h-full w-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
