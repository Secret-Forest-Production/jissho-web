import TestimoniSlider from "./TestimoniSlider";
import TestimoniTitle from "./TestimoniTitle";

interface TestimoniSectionProps {
    testimonials: any[];
}

export default function TestimoniSection({ testimonials }: TestimoniSectionProps) {
    return (
        <section
            id="testimoni"
            aria-labelledby="testimoni-heading"
            className="overflow-hidden bg-grey-50 py-24"
        >
            <div className="mx-auto max-w-7xl">
                <TestimoniTitle />

                <div className="mt-12">
                    <TestimoniSlider testimonials={testimonials} />
                </div>
            </div>
        </section>
    );
}
