import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  highlight, 
  description, 
  className = "" 
}: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`text-center max-w-4xl mx-auto flex flex-col items-center mb-16 ${className}`}
    >
      <div className="relative pb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-dark">
          {title}{" "}
          {highlight && <span className="text-red-normal">{highlight}</span>}
        </h2>

        <div className="absolute -bottom-1 left-0 w-full flex justify-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }} 
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-red-normal"
          />
        </div>
      </div>

      {description && (
        <p className="leading-relaxed text-sm md:text-base text-text-gray max-w-2xl mx-auto mt-6">
          {description}
        </p>
      )}
    </motion.div>
  );
}