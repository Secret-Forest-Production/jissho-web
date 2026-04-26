import { motion } from 'framer-motion';
import { aboutData } from '../../data/about/about-link';

export default function AboutVisiMisi() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {aboutData.visiMisi.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut", 
            delay: index * 0.2 
          }}
          className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-red-light transition-all duration-300 group"
        >
          <h3 className="text-xl font-bold text-blue-dark mb-4 relative inline-block">
            {item.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-normal transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <p className="leading-relaxed text-sm md:text-base text-text-gray">
            {item.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
}