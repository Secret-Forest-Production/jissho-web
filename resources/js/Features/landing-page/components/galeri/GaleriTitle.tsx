import SectionHeader from '../../shared/SectionHeader';
import { galeriData } from '../../data/galeri/galeri-link';

export default function GaleriTitle() {
  return (
    <SectionHeader 
      title={galeriData.title.main}
      highlight={galeriData.title.highlight}
      description={galeriData.description}
    />
  );
}