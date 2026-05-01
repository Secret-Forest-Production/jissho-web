import TestimoniTitle from "./TestimoniTitle";
import TestimoniSlider from "./TestimoniSlider";

export default function TestimoniSection() {
    return (
        <section id="testimoni" className="py-24 bg-grey-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <TestimoniTitle />
                <div className="mt-12">
                    <TestimoniSlider />
                </div>
            </div>
        </section>
    );
}
