import GalleryCard from "./GalleryCard";
import type { GalleryPhoto } from "../utils/gallery.type";

interface FilteredPhotosGridProps {
    photos: GalleryPhoto[];
}

export default function FilteredPhotosGrid({
    photos,
}: FilteredPhotosGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo, index) => (
                <GalleryCard
                    key={photo.id}
                    photo={photo}
                    priority={index < 4}
                    className="h-87.5 rounded-2xl"
                    titleClassName="text-sm md:text-base"
                />
            ))}
        </div>
    );
}
