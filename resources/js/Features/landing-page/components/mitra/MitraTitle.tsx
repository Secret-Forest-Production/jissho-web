import SectionHeader from '../../shared/SectionHeader';
import { mitraData } from '../../data/mitra/mitra-link';

export default function MitraTitle() {
  return (
    <SectionHeader 
      title={mitraData.title.main}
      highlight={mitraData.title.highlight}
      description={mitraData.description}
      align="left"
      className="mb-0" 
    />
  );
}