import AboutTitle from './AboutTitle';
import AboutVisiMisi from './AboutVisiMisi';
import AboutValue from './AboutValue';

export default function AboutSection() {
  return (
    <section id="tentang-kami" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutTitle />
        <AboutVisiMisi />
        <AboutValue />
      </div>
    </section>
  );
}