import { UsersRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import profileMain from "@/Shared/assets/tentang-kami/profile-main.webp";
import profileTopLeft from "@/Shared/assets/tentang-kami/profile-top-left.webp";

const profileImages = {
    main: profileMain,
    topLeft: profileTopLeft,
};

export default function ProfileImage() {
    const { t } = useTranslation("common");

    return (
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative min-h-105 sm:min-h-125 lg:min-h-140">
                <div className="absolute right-0 top-16 h-80 w-[82%] overflow-hidden rounded-2xl sm:h-97.5 lg:h-105">
                    <img
                        src={profileImages.main}
                        alt={t("about_page.profile.aria_img")}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="absolute left-0 top-0 z-20 h-36 w-44 overflow-hidden rounded-xl border-4 border-white sm:h-40 sm:w-52 lg:h-44 lg:w-56">
                    <img
                        src={profileImages.topLeft}
                        alt=""
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="absolute bottom-0 left-8 z-30 w-70 rounded-2xl bg-red-normal p-7 text-white sm:left-10 sm:w-77.5 sm:p-8 lg:left-8">
                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
                            <UsersRound
                                className="h-8 w-8"
                                aria-hidden="true"
                            />
                        </div>

                        <div>
                            <p className="text-4xl font-bold leading-none sm:text-5xl">
                                100+
                            </p>
                            <p className="mt-3 text-base font-medium sm:text-lg">
                                Peserta Aktif
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute bottom-6 right-10 -z-10 h-32 w-80 rounded-full bg-blue-dark/10 blur-3xl"
                />
            </div>
        </div>
    );
}
