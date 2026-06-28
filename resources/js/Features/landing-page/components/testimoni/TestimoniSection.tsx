import TestimoniSlider from "./TestimoniSlider";
import TestimoniTitle from "./TestimoniTitle";
import TestimoniEmpty from "./TestimoniEmpty";

interface TestimoniSectionProps {
    testimonials: any[];
}

export default function TestimoniSection({
    testimonials = [],
}: TestimoniSectionProps) {
    return (
        <section
            id="testimoni"
            aria-labelledby="testimoni-heading"
            className="overflow-hidden bg-grey-50 py-24"
        >
            <div className="mx-auto max-w-7xl">
                <TestimoniTitle />

                <div className="mt-12">
                    {testimonials.length > 0 ? (
                        <TestimoniSlider testimonials={testimonials} />
                    ) : (
                        <TestimoniEmpty />
                    )}
                </div>
            </div>
        </section>
    );
}
