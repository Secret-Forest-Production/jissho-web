import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { aboutData } from '../../data/about/about-link';

export default function AboutValue() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {aboutData.values.map((value, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2, 
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="w-16 h-16 bg-red-light flex items-center justify-center rounded-full shadow-sm">
            <Icon icon={value.icon} className="text-red-normal text-3xl" />
          </div>
          <h4 className="text-lg font-bold text-blue-dark">{value.title}</h4>
          <p className="text-sm leading-relaxed max-w-xs text-text-gray">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}