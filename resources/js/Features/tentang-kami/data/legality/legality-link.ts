import LegalityMainImg from "@/Shared/assets/tentang-kami/legality-main.webp";
import IconDoc from "@/Shared/assets/tentang-kami/icon-1.webp";
import IconPartnership from "@/Shared/assets/tentang-kami/icon-2.webp";

export const legalityData = {
    header: {
        title: "Legalitas &",
        highlight: "Izin Resmi",
        description:
            "Yayasan Jissho telah terdaftar dan memiliki izin operasional resmi dari Kementerian Ketenagakerjaan Republik Indonesia. Kami beroperasi sesuai dengan regulasi pemerintah dan standar internasional untuk menjamin keamanan dan kepastian hukum bagi setiap peserta pelatihan.",
        showLine: true,
    },
    image: LegalityMainImg,
    items: [
        {
            title: "Izin Kemenaker RI",
            desc: "Terdaftar resmi di Kementerian Ketenagakerjaan Republik Indonesia sebagai lembaga pelatihan kerja",
            image: IconDoc, 
        },
        {
            title: "NPWP Yayasan",
            desc: "Terdaftar sebagai badan hukum dengan nomor pokok wajib pajak resmi",
            image: IconPartnership,
        },
        {
            title: "Akta Notaris",
            desc: "Memiliki akta pendirian yayasan yang sah dan terdaftar secara hukum",
            image: IconDoc,
        },
        {
            title: "Kerjasama Internasional",
            desc: "Memiliki kemitraan resmi dengan perusahaan dan lembaga di Jepang",
            image: IconPartnership,
        },
    ],
};
