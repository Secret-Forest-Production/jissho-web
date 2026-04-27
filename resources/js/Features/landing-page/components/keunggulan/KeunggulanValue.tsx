import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { keunggulanData } from '../../data/keunggulan/keunggulan-link';

export default function KeunggulanValue() {
  return (
    <div className="flex-1 space-y-8 lg:pl-12 py-12">
      {keunggulanData.values.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start gap-4 text-white"
        >
          <div className="bg-white p-3 rounded-xl shrink-0">
            <Icon icon={item.icon} className="text-red-normal text-2xl md:text-3xl" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}