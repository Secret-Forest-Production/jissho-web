import GalleryCard from "./GalleryCard";
import type { GalleryPhoto } from "../utils/gallery.type";

interface AllPhotosGridProps {
    photos: GalleryPhoto[];
}

const getMasonryClassName = (index: number) => {
    const pattern = [
        "md:col-span-8 md:row-span-2",
        "md:col-span-4 md:row-span-1",
        "md:col-span-4 md:row-span-2",
        "md:col-span-8 md:row-span-1",
    ];

    return pattern[index % pattern.length] ?? "md:col-span-4 md:row-span-1";
};

export default function AllPhotosGrid({ photos }: AllPhotosGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 auto-rows-[250px] md:grid-cols-12">
            {photos.map((photo, index) => (
                <GalleryCard
                    key={photo.id}
                    photo={photo}
                    priority={index < 2}
                    className={getMasonryClassName(index)}
                />
            ))}
        </div>
    );
}
