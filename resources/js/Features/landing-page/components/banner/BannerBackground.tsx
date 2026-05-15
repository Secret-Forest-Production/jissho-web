import BannerBgImg from "@/Shared/assets/home/banner-background.webp";

export default function BannerBackground() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 overflow-hidden"
        >
            <img
                src={BannerBgImg}
                alt=""
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-red-dark-dark opacity-80" />
        </div>
    );
}
