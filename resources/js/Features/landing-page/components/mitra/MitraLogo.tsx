import { motion } from 'framer-motion';
import { mitraData } from '../../data/mitra/mitra-link';

export default function MitraLogo() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
      {mitraData.logos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex justify-center hover:grayscale transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
        >
          <img 
            src={logo.src} 
            alt={logo.name} 
            draggable={false}
            className="h-8 md:h-12 w-auto object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}