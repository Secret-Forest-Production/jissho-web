import TestimoniSlider from "./TestimoniSlider";
import TestimoniTitle from "./TestimoniTitle";

export default function TestimoniSection() {
    return (
        <section
            id="testimoni"
            aria-labelledby="testimoni-heading"
            className="overflow-hidden bg-grey-50 py-24"
        >
            <div className="mx-auto max-w-7xl">
                <TestimoniTitle />

                <div className="mt-12">
                    <TestimoniSlider />
                </div>
            </div>
        </section>
    );
}
