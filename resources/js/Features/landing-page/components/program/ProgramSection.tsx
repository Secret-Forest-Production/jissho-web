import ProgramTitle from './ProgramTitle';
import ProgramCard from './ProgramCard';
import { programData } from '../../data/program/program-link';

export default function ProgramSection() {
  return (
    <section id="program" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgramTitle />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programData.list.map((item, index) => (
            <ProgramCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}