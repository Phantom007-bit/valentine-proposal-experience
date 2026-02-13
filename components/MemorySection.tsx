"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface MemoryProps {
  id: number;
  imageSrc: string;
  caption: string;
}

export const MemorySection = ({ imageSrc, caption }: MemoryProps) => {
  return (
    <section className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-black">
      {/* REAL IMAGE COMPONENT */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/${imageSrc}`} // This looks for files in the 'public' folder
          alt={caption}
          fill
          className="object-cover opacity-90" // object-cover ensures it fills the screen
          priority
        />
      </div>
      
      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 z-10" />

      {/* Caption */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 text-center p-6 mt-96"
      >
        <h2 className="text-white font-serif text-5xl md:text-7xl font-bold drop-shadow-lg tracking-wide">
          {caption}
        </h2>
      </motion.div>
    </section>
  );
};