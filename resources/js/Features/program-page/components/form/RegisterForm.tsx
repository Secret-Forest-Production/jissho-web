import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useForm, usePage } from "@inertiajs/react";

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
    const { t } = useTranslation("common");
    const { options: genderOptions, ...genderFieldProps } = registerGenderField;
    const { flash } = usePage().props as any;

    const { data, setData, post, processing, errors, reset } = useForm({
        fullName: "",
        email: "",
        gender: "",
        phone: "",
        age: "",
        origin: "",
        jftCertificate: null as File | null,
        senmonkyuCertificate: null as File | null,
        skillTestCertificate: null as File | null,
        japanExperience: "",
        agreement: false,
    });

    const translatedGenderOptions = [
        { label: t("register_page.personal.gender_male"), value: "laki-laki" },
        { label: t("register_page.personal.gender_female"), value: "perempuan" },
    ];

    const fileKeys = ["jft", "senmonkyu", "skill"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("register.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 shadow-2xl shadow-blue-dark/15 sm:px-8 md:px-12 md:py-14"
        >
            <div className="mb-10 text-center md:mb-12">
                <h1 className="text-3xl font-bold text-blue-dark md:text-4xl">
                    {t("register_page.title")}
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
                    {t("register_page.description")}
                </p>

                {flash.success && (
                    <div className="mt-6 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800">
                        {flash.success}
                    </div>
                )}
            </div>

            <div className="space-y-10">
                <section>
                    <FormSectionTitle
                        icon="mi:user-check"
                        title={t("register_page.personal.title")}
                    />
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <FormInput
                                label={t("register_page.personal.name_label")}
                                name="fullName"
                                value={data.fullName}
                                onChange={(e) => setData("fullName", e.target.value)}
                                placeholder={t("register_page.personal.name_placeholder")}
                                required
                            />
                            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                        </div>

                        <div className="md:col-span-2">
                            <FormInput
                                label={t("register_page.personal.email_label")}
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                placeholder={t("register_page.personal.email_placeholder")}
                                required
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>

                        <FormSelect
                            {...genderFieldProps}
                            label={t("register_page.personal.gender_label")}
                            value={data.gender}
                            onChange={(e) => setData("gender", e.target.value)}
                            placeholder={t("register_page.personal.gender_placeholder")}
                            options={translatedGenderOptions}
                            required
                        />
                        {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}

                        <FormInput
                            label={t("register_page.personal.phone_label")}
                            name="phone"
                            type="tel"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            placeholder={t("register_page.personal.phone_placeholder")}
                            required
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}

                        <FormInput
                            label={t("register_page.personal.age_label")}
                            name="age"
                            type="number"
                            value={data.age}
                            onChange={(e) => setData("age", e.target.value)}
                            placeholder={t("register_page.personal.age_placeholder")}
                            required
                        />
                        {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age}</p>}

                        <div className="md:col-span-2">
                            <FormInput
                                label={t("register_page.personal.origin_label")}
                                name="origin"
                                value={data.origin}
                                onChange={(e) => setData("origin", e.target.value)}
                                placeholder={t("register_page.personal.origin_placeholder")}
                                required
                            />
                            {errors.origin && <p className="mt-1 text-xs text-red-500">{errors.origin}</p>}
                        </div>
                    </div>
                </section>

                <section>
                    <FormSectionTitle
                        icon="mynaui:ribbon"
                        title={t("register_page.qualification.title")}
                    />

                    <div className="space-y-8">
                        {registerFileFields.map((field, idx) => (
                            <div key={field.name}>
                                <FileUploadField 
                                    name={field.name} 
                                    label={t(`register_page.qualification.${fileKeys[idx]}`)}
                                    onChange={(e) => setData(field.name as any, e.target.files?.[0] || null)}
                                />
                                {errors[field.name as keyof typeof errors] && (
                                    <p className="mt-1 text-xs text-red-500">{errors[field.name as keyof typeof errors]}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-gray-500">
                        {t("register_page.qualification.helper")}
                    </p>
                </section>

                <section>
                    <FormSectionTitle
                        icon="lucide:briefcase"
                        title={t("register_page.experience.title")}
                    />

                    <FormTextarea
                        label={t("register_page.experience.label")}
                        name="japanExperience"
                        value={data.japanExperience}
                        onChange={(e) => setData("japanExperience", e.target.value)}
                        placeholder={t("register_page.experience.placeholder")}
                        helperText={t("register_page.experience.helper")}
                    />
                    {errors.japanExperience && <p className="mt-1 text-xs text-red-500">{errors.japanExperience}</p>}
                </section>

                <div className="space-y-4">
                    <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={data.agreement}
                            onChange={(e) => setData("agreement", e.target.checked)}
                            className="mt-0.5 h-5 w-5 shrink-0 rounded border-gray-300 text-red-normal focus:ring-red-normal"
                            required
                        />

                        <span>
                            {t("register_page.agreement")}
                        </span>
                    </label>
                    {errors.agreement && <p className="mt-1 text-xs text-red-500">{errors.agreement}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-normal px-6 py-4 text-base font-medium text-white transition-all hover:bg-red-dark disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Icon icon="tabler:send" className="text-xl" />
                    {processing ? "Sending..." : t("register_page.submit")}
                </button>
            </div>
        </form>
    );
}
