export interface VisiMisiItem {
    title: string;
    content: string;
    type: "visi" | "misi";
    icon: string;
}

export const visiMisiData = {
    header: {
        title: "Visi &",
        highlight: "Misi",
        showLine: true,
    },
    items: [
        {
            type: "visi",
            title: "Visi Kami",
            icon: "solar:eye-outline",
            content:
                "Menjadi lembaga pelatihan kerja Jepang terdepan yang melahirkan tenaga kerja Indonesia berkualitas dan berkarakter untuk bersaing di tingkat internasional dengan menjunjung tinggi nilai-nilai profesionalisme dan integritas.",
        },
        {
            type: "misi",
            title: "Misi Kami",
            icon: "material-symbols:target",
            content:
                "Memberikan pelatihan bahasa dan budaya Jepang berkualitas tinggi, mendampingi peserta dalam proses penempatan kerja di Jepang, serta membangun kemitraan yang kuat dengan perusahaan Jepang untuk memberikan peluang karir terbaik bagi alumni.",
        },
    ],
};
