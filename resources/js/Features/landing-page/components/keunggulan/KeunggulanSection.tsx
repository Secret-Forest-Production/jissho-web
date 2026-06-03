import KeunggulanBgImg from "@/Shared/assets-optimized/home/keunggulan-background.webp";

import KeunggulanImage from "./KeunggulanImage";
import KeunggulanTitle from "./KeunggulanTitle";
import KeunggulanValue from "./KeunggulanValue";

export default function KeunggulanSection() {
    return (
        <section
            id="keunggulan"
            aria-labelledby="keunggulan-heading"
            className="relative overflow-hidden bg-white py-24 lg:py-32"
        >
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <KeunggulanTitle />

                <div className="relative mt-12 flex min-h-124 items-center lg:mt-20">
                    <div
                        aria-hidden="true"
                        className="absolute right-[-5vw] top-0 h-full w-screen overflow-hidden lg:right-[-10vw] lg:w-[85%]"
                    >
                        <img
                            src={KeunggulanBgImg}
                            alt=""
                            loading="lazy"
                            draggable={false}
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-red-normal/15 mix-blend-multiply" />
                    </div>

                    <div className="relative z-10 w-full pt-10 lg:pt-0">
                        <div className="flex flex-col items-center lg:flex-row lg:items-start">
                            <KeunggulanImage />
                            <KeunggulanValue />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
