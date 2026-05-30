import { Icon } from "@iconify/react";

import FileUploadField from "./FileUploadField";
import FormInput from "./FormInput";
import FormSectionTitle from "./FormSectionTitle";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

import {
    registerFileFields,
    registerGenderField,
} from "../../data/register.data";

export default function RegisterForm() {
    const { options: genderOptions, ...genderFieldProps } = registerGenderField;

    return (
        <form className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 shadow-2xl shadow-blue-dark/15 sm:px-8 md:px-12 md:py-14">
            <div className="mb-10 text-center md:mb-12">
                <h1 className="text-3xl font-bold text-blue-dark md:text-4xl">
                    Daftar Sekarang
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
                    Isi formulir di bawah ini untuk memulai perjalanan Anda ke
                    Jepang
                </p>
            </div>

            <div className="space-y-10">
                <section>
                    <FormSectionTitle
                        icon="mi:user-check"
                        title="Data Pribadi"
                    />
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <FormInput
                                label="Nama Lengkap"
                                name="fullName"
                                placeholder="Masukkan nama lengkap"
                                required
                            />
                        </div>

                        <FormSelect
                            {...genderFieldProps}
                            options={genderOptions.map(
                                (option) => option.label,
                            )}
                        />

                        <FormInput
                            label="Usia"
                            name="age"
                            type="number"
                            placeholder="Contoh : 25"
                            required
                        />

                        <div className="md:col-span-2">
                            <FormInput
                                label="Asal (kota/Kabupaten)"
                                name="origin"
                                placeholder="Contoh : Medan, Sumatera Utara"
                                required
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <FormSectionTitle
                        icon="mynaui:ribbon"
                        title="Sertifikat & Kualifikasi"
                    />

                    <div className="space-y-8">
                        {registerFileFields.map((field) => (
                            <FileUploadField key={field.name} {...field} />
                        ))}
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-gray-500">
                        Isi jika memiliki, atau kosongkan jika belum ada
                    </p>
                </section>

                <section>
                    <FormSectionTitle
                        icon="lucide:briefcase"
                        title="Pengalaman di Jepang"
                    />

                    <FormTextarea
                        label="Pengalaman Kerja / Kuliah di Jepang"
                        name="japanExperience"
                        placeholder="Ceritakan pengalaman kerja atau kuliah Anda di Jepang (jika ada). Contoh: Magang di Tokyo selama 3 tahun di bidang manufaktur, atau kosongkan jika belum pernah"
                        helperText="Opsional - Isi jika pernah ke Jepang, atau kosongkan jika belum pernah"
                    />
                </section>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <input
                        type="checkbox"
                        name="agreement"
                        className="mt-0.5 h-5 w-5 shrink-0 rounded border-gray-300 text-red-normal focus:ring-red-normal"
                    />

                    <span>
                        Dengan mendaftar, Anda menyetujui bahwa data Anda akan
                        digunakan untuk keperluan pendaftaran program
                    </span>
                </label>

                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-normal px-6 py-4 text-base font-medium text-white transition-all hover:bg-red-dark"
                >
                    <Icon icon="tabler:send" className="text-xl" />
                    Kirim Pendaftaran
                </button>
            </div>
        </form>
    );
}
