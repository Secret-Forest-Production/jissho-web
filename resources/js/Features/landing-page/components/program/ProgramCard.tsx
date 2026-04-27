import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Button from '@/Components/ui/Button';

interface ProgramCardProps {
  item: any;
  index: number;
}

export default function ProgramCard({ item, index }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-gray-50"
    >
      {/* Icon Area */}
      <div className="w-14 h-14 bg-red-light rounded-xl flex items-center justify-center mb-6">
        <Icon icon={item.icon} className="text-red-normal text-3xl" />
      </div>

      {/* Content Area */}
      <div className="grow space-y-4">
        <h3 className="text-xl font-bold text-blue-dark">{item.title}</h3>
        <p className="text-gray-500 text-base leading-relaxed">
          {item.desc}
        </p>

        <ul className="space-y-3 py-4">
          {item.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-1 text-sm md:text-base text-text-gray group/item">
              <Icon 
                icon="radix-icons:dot-filled" 
                className="text-red-normal text-lg shrink-0 transition-transform group-hover/item:scale-110" 
              />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Area */}
      <div className="pt-6">
        <Button variant="outlinered" className="w-full py-2.5">
          Detail
        </Button>
      </div>
    </motion.div>
  );
}