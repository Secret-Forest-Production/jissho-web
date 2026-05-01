import MitraTitle from './MitraTitle';
import MitraLogo from './MitraLogo';

export default function MitraSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/3">
            <MitraTitle />
          </div>

          <div className="w-full lg:w-2/3">
            <MitraLogo />
          </div>

        </div>
      </div>
    </section>
  );
}