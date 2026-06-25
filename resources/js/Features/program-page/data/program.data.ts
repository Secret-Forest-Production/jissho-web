import type {
    ProgramHeroData,
    ProgramMagangData,
    ProgramKerjaData,
    ProgramKuliahData,
    SektorIndustriData,
} from "../types/program.type";

import { heroImages } from "@/Shared/data/hero-images";

import KuliahImg1 from "@/Shared/assets-optimized/program/kuliah-1.webp";

export const programHeroData: ProgramHeroData = {
    badgeKey: "hero.program.badge",
    titleKey: "hero.program.title",
    highlightKey: "hero.program.highlight",
    descriptionKey: "hero.program.description",
    backgroundImage: heroImages.program,
};

export const programMagangData: ProgramMagangData = {
    icon: "lucide:folder-open",
    title: "Program",
    highlight: "Magang",
    suffix: "(Technical Intern Training)",
    description:
        "Program magang teknis ke Jepang dengan durasi 3–5 tahun untuk pengembangan keterampilan profesional.",

    detailRequirement: {
        eyebrow: "Detail Syarat",
        title: "Apa itu Program Magang (Internship) di Jissho?",
        description:
            "Ingin membangun karier internasional dan mengasah keterampilan profesional langsung di Negeri Sakura? Yuk, cek poin-poin persyaratan di bawah ini sebelum Anda mendaftar!",
        groups: [
            {
                title: "Persyaratan Umum (Karakter & Fisik)",
                items: [
                    {
                        text: "Usia: Minimal 18 tahun dan maksimal 26–28 tahun (beberapa sektor tertentu memperbolehkan hingga usia 30 tahun).",
                    },
                    {
                        text: "Pendidikan Minimal: Lulusan SMA, SMK, MA, Diploma (D3), atau Sarjana (S1) segala jurusan.",
                    },
                    {
                        text: "Tinggi & Berat Badan Proporsional:",
                        children: [
                            "Pria: Minimal 160 cm",
                            "Wanita: Minimal 150 cm",
                        ],
                    },
                    {
                        text: "Kesehatan Fisik: Sehat jasmani dan rohani, tidak memiliki riwayat penyakit kronis (seperti TBC, hepatitis, asma, atau patah tulang yang parah).",
                    },
                    {
                        text: "Kondisi Fisik Khusus: Tidak bertato, tidak bertindik (khusus pria), dan tidak buta warna (parsial maupun total).",
                    },
                ],
            },
            {
                title: "Persyaratan Dokumen (Administrasi)",
                description:
                    "Pastikan dokumen-dokumen resmi berikut siap dalam bentuk asli dan salinan (copy):",
                items: [
                    {
                        text: "Kartu Tanda Penduduk (KTP) & Kartu Keluarga (KK).",
                    },
                    {
                        text: "Akte Kelahiran.",
                    },
                    {
                        text: "Ijazah Terakhir + Transkrip Nilai / Raport.",
                    },
                    {
                        text: "Surat Izin Orang Tua / Wali / Suami / Istri (bermaterai).",
                    },
                    {
                        text: "Surat Keterangan Catatan Kepolisian (SKCK) yang masih aktif.",
                    },
                    {
                        text: "Pasfoto terbaru latar belakang putih/merah (sesuai ketentuan LPK).",
                    },
                ],
            },
            {
                title: "Persyaratan Kompetensi & Mental",
                items: [
                    {
                        text: "Komitmen Belajar: Bersedia mengikuti Pelatihan Kerja Terpusat (Diklat) bahasa dan budaya Jepang (biasanya hingga level N5 atau N4).",
                    },
                    {
                        text: "Sikap (Attitude): Memiliki disiplin tinggi, mental yang kuat, dan mampu bekerja sama dalam tim.",
                    },
                    {
                        text: "Izin Resmi: Mendapatkan dukungan penuh dari keluarga untuk bekerja di luar negeri selama kurun waktu kontrak (biasanya 1 hingga 3 tahun).",
                    },
                ],
            },
        ],
    },

    duration: {
        eyebrow: "Durasi Program",
        title: "Total Durasi Kontrak: 3 hingga 5 Tahun",
        description:
            "Kontrak kerja utama berlangsung selama 3 tahun, dengan peluang perpanjangan hingga 5 tahun jika peserta lulus ujian evaluasi teknis di Jepang.",
        timelines: [
            {
                phase: "01",
                title: "Tahap 1: Pelatihan di Indonesia (Diklat Pra-Pemberangkatan)",
                duration: "4 - 6 Bulan",
                description:
                    "Aktivitas: Pelatihan intensif bahasa Jepang (target minimal setara N5/N4), pembentukan fisik, mental, disiplin (FMD), serta pengenalan budaya kerja Jepang di LPK.",
                images: [
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
                    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
                ],
            },
            {
                phase: "02",
                title: "Tahap 2: Magang Tahun Ke-1 (Ginou Jisshuu 1-Gou)",
                duration:
                    "1 Tahun (Termasuk 1 bulan pertama masa adaptasi/Kenshuu)",
                description:
                    "Aktivitas: Fokus pada adaptasi lingkungan, penguasaan dasar-dasar pekerjaan, dan bahasa sehari-hari di perusahaan penerima.",
            },
            {
                phase: "03",
                title: "Tahap 3: Magang Tahun Ke-2 & Ke-3 (Ginou Jisshuu 2-Gou)",
                duration: "4 - 6 Bulan",
                description:
                    "Aktivitas: Peningkatan keahlian teknis secara penuh. Di akhir tahun ke-3, peserta akan mengikuti ujian praktik dan teori untuk mendapatkan sertifikat resmi.",
            },
            {
                phase: "04",
                title: "Tahap 4: Perpanjangan Tahun Ke-4 & Ke-5 (Ginou Jisshuu 3-Gou - Opsional)",
                duration: "2 Tahun",
                description:
                    "Aktivitas: Khusus bagi peserta yang memiliki rekam jejak kerja yang sangat baik dan lulus ujian tingkat madya. Peserta berhak pulang ke Indonesia terlebih dahulu (cuti) sebelum melanjutkan kontrak 2 tahun terakhir.",
            },
        ],
    },

    benefit: {
        eyebrow: "Benefit",
        title: "Kenapa Harus Memilih Program Magang Bersama Kami?",
        description:
            "Kami tidak hanya memberangkatkan Anda, tetapi juga memastikan Anda siap bersaing, sukses, dan terlindungi selama di Jepang.",
        benefits: [
            {
                title: "Gaji & Tunjangan Standar Jepang (Sesuai Regulasi)",
                description:
                    "Dapatkan penghasilan bulanan yang kompetitif sesuai dengan standar upah minimum di Jepang, lengkap dengan uang lembur, asuransi kesehatan, dan jaminan kecelakaan kerja.",
            },
            {
                title: "Pelatihan Bahasa & Budaya Intensif (Siap Kerja)",
                description:
                    "Kurikulum pelatihan yang dirancang khusus oleh pengajar berpengalaman agar Anda menguasai bahasa Jepang dan memahami budaya kerja Jepang sebelum terbang.",
            },
            {
                title: "Penyaluran Kerja ke Perusahaan Terpercaya & Resmi",
                description:
                    "LPK kami bekerja sama langsung dengan Perusahaan Penerima dan Sending Organization resmi yang legal dan diawasi ketat oleh pemerintah Indonesia dan Jepang.",
            },
            {
                title: "Pendampingan Penuh (Dari Diklat hingga Kepulangan)",
                description:
                    "Kami mendampingi Anda mulai dari proses administrasi, pembuatan paspor/visa, keberangkatan, pemantauan kondisi selama di Jepang, hingga kepulangan kembali ke tanah air.",
            },
            {
                title: "Sertifikat Resmi Internasional (JITCO/OTIT)",
                description:
                    "Setelah menyelesaikan program, Anda akan mendapatkan sertifikat kompetensi resmi yang menjadi modal emas dan nilai tambah luar biasa untuk karier Anda.",
            },
            {
                title: "Peluang Melanjutkan ke Program Kerja (Specified Skilled Worker / SSW)",
                description:
                    "Bagi alumni magang yang berprestasi, kami menyediakan jalur khusus untuk kembali bekerja di Jepang dengan visa keterampilan khusus.",
            },
        ],
    },
};

export const programKerjaData: ProgramKerjaData = {
    icon: "lucide:briefcase",
    title: "Program",
    highlight: "Kerja",
    suffix: "SSW (Specified Skilled Worker)",
    description:
        "Visa kerja profesional untuk tenaga terampil di berbagai sektor industri Jepang.",
    sswTypes: [
        {
            title: "SSW Type 1 (特定技能1号)",
            duration: "Maksimal 5 tahun",
            durationDescription: "Dapat diperpanjang hingga total 5 tahun",
            items: [
                "Memerlukan keterampilan dan pengetahuan tertentu",
                "Lulus ujian keterampilan dan JLPT/JFT N4",
                "Tidak dapat membawa keluarga",
            ],
        },
        {
            title: "SSW Type 2 (特定技能2号)",
            duration: "Tidak terbatas",
            durationDescription: "Dapat diperpanjang tanpa batas waktu",
            isDark: true,
            items: [
                "Keahlian tingkat mahir dan pengalaman kerja",
                "Dapat membawa keluarga (istri/suami dan anak)",
                "Jalur menuju permanent residence",
            ],
        },
    ],
};

export const programKuliahData: ProgramKuliahData = {
    icon: "lucide:graduation-cap",
    title: "Program",
    highlight: "Kuliah",
    suffix: "& Perguruan Tinggi",
    description:
        "Raih gelar akademik dari universitas ternama di Jepang dengan beasiswa dan fasilitas lengkap.",
    studyPrograms: [
        {
            title: "Program Sarjana (S1)",
            duration: "4 Tahun",
            image: KuliahImg1,
            requirements: [
                "Lulus SMA/SMK",
                "JLPT/JFT N2/A2 atau EJU",
                "Dokumen akademik lengkap",
            ],
            benefit:
                "Gelar sarjana dari universitas Jepang yang diakui internasional.",
        },
        {
            title: "Program Pascasarjana (S2)",
            duration: "2 Tahun",
            image: KuliahImg1,
            requirements: [
                "Lulus SMA/SMK",
                "JLPT/JFT N2/A2 atau EJU",
                "Dokumen akademik lengkap",
            ],
            benefit: "Riset akademik dan networking profesional global.",
        },
        {
            title: "Sekolah Bahasa Jepang",
            duration: "1–2 Tahun",
            image: KuliahImg1,
            requirements: [
                "Lulus SMA/SMK",
                "JLPT/JFT N2/A2 atau EJU",
                "Dokumen akademik lengkap",
            ],
            benefit: "Persiapan JLPT/JFT dan transisi ke universitas Jepang.",
        },
    ],
    scholarships: [
        {
            title: "MEXT Scholarship",
            description: "Beasiswa penuh dari pemerintah Jepang",
        },
        {
            title: "JASSO Scholarship",
            description: "Bantuan biaya hidup untuk mahasiswa internasional",
        },
        {
            title: "University Scholarship",
            description: "Beasiswa dari universitas masing-masing",
        },
    ],
    assistances: [
        "Konsultasi pemilihan universitas dan jurusan",
        "Bantuan persiapan dokumen aplikasi",
        "Pelatihan ujian masuk (EJU, JLPT/JFT)",
        "Panduan pengurusan visa pelajar",
        "Orientasi kehidupan di Jepang",
    ],
};

export const sektorIndustriData: SektorIndustriData = {
    icon: "lucide:factory",
    title: "Sektor Industri yang Tersedia",
    description:
        "Visa kerja profesional untuk tenaga terampil di berbagai sektor industri Jepang.",
    industries: [
        {
            title: "Manufacturing",
            description: "Industri manufaktur dan produksi",
            icon: "lucide:factory",
        },
        {
            title: "Food Service",
            description: "Layanan makanan dan restoran",
            icon: "lucide:utensils",
        },
        {
            title: "Nursing Care",
            description: "Perawatan lansia dan kesehatan",
            icon: "solar:hospital-outline",
        },
        {
            title: "Auto Repair",
            description: "Perbaikan kendaraan bermotor",
            icon: "lucide:wrench",
        },
        {
            title: "Construction",
            description: "Konstruksi dan bangunan",
            icon: "lucide:building-2",
        },
        {
            title: "Logistics",
            description: "Pergudangan dan logistik",
            icon: "lucide:truck",
        },
        {
            title: "Agriculture",
            description: "Pertanian dan perikanan",
            icon: "lucide:package",
        },
        {
            title: "Cleaning",
            description: "Layanan kebersihan gedung",
            icon: "lucide:house",
        },
    ],
};
