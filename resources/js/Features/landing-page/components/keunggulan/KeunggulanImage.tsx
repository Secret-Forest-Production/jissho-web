import React from 'react';
import { motion } from 'framer-motion';
import Dokumentasi from '@/Shared/assets/home/keunggulan-img.webp';

export default function KeunggulanImage() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex-1 z-20 -mt-16 lg:-mt-12 pb-10 lg:pb-0"
    >
      <div className=" overflow-hidden">
        <img 
          src={Dokumentasi} 
          alt="Dokumentasi Kegiatan Jissho" 
          draggable={false}
          className="w-full h-auto object-cover border-none"
        />
      </div>
    </motion.div>
  );
}