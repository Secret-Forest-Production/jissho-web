import React from 'react';
import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="space-y-6"
    >
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
        Wujudkan Impian <br className="hidden md:block" /> 
        Belajar & Bekerja <br className="hidden md:block" /> 
        di Jepang
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl font-medium">
        Bersama Yayasan Jissho, kami mempersiapkan Anda dengan pembelajaran bahasa Jepang berkualitas, 
        budaya kerja profesional, dan bimbingan karir untuk sukses di Negeri Sakura.
      </p>
    </motion.div>
  );
}