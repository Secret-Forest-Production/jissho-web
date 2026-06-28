import MitraTitle from "./MitraTitle";
import MitraLogo from "./MitraLogo";

export default function MitraSection() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <MitraTitle />

                <MitraLogo />
            </div>
        </section>
    );
}
