import GaleriTitle from "./GaleriTitle";
import GaleriImage from "./GaleriImage";

export default function GaleriSection() {
    return (
        <section id="galeri" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <GaleriTitle />
                <GaleriImage />
            </div>
        </section>
    );
}