"use client";
import { motion } from "framer-motion";
import { Heart, Stamp } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ArticleProps {
  name: string;
}

export const FeatureArticle = ({ name }: ArticleProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-50 bg-[#f8f5f2] overflow-y-auto"
    >
      {/* Background Hearts (Subtle & Slow) */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-red-400"
              initial={{ y: "110vh", x: `${Math.random() * 100}vw` }}
              animate={{ y: "-10vh" }}
              transition={{
                duration: Math.random() * 15 + 15, // Slower, more ambient
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            >
              <Heart fill="currentColor" size={Math.random() * 30 + 10} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative z-10">
        
        {/* THE LETTER CONTAINER */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl w-full bg-[#fffbf0] shadow-2xl rounded-sm border border-[#e8dfc8] p-8 md:p-16 relative overflow-hidden"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Optional texture
          }}
        >
          {/* Decorative Stamp (Top Right) */}
          <div className="absolute top-6 right-6 opacity-80 rotate-12 hidden md:block">
            <div className="border-4 border-red-800/30 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <div className="text-center text-red-900/40 font-bold text-xs uppercase tracking-widest">
                Official<br/>Love<br/>Letter
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE: The Letter */}
            <div className="prose prose-lg">
              <p className="font-serif italic text-gray-500 text-right md:text-left mb-8">
                February 14, 2026
              </p>

              <h1 className="font-serif text-4xl md:text-5xl text-red-900 mb-8 leading-tight">
                My Dearest {name},
              </h1>

              <div className="font-serif text-gray-800 leading-loose space-y-6 text-lg">
                <p>
                  I tried to find the perfect words to say, but sometimes simple is best. 
                  You are my favorite person, my best friend, and my greatest adventure.❤️
                </p>
                <p>
                  Every day with you feels like a gift I didn't know I asked for. 
                  Thank you for your laugh, your patience, and for just being you.❤️
                </p>
                <p>
                  So, here is to us. To the coffee dates, the sunsets, and all the quiet moments in between.❤️
                </p>
              </div>

              <div className="mt-12">
                <p className="font-serif text-xl text-gray-600 italic">With all my love,</p>
                <p className="font-script text-3xl md:text-4xl text-red-800 mt-4 font-bold transform -rotate-2">
                  Your favorite person x❤️
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: The Photo (Paperclipped Look) */}
            <div className="relative mt-8 md:mt-0">
              {/* Washi Tape Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200/80 rotate-2 z-20 shadow-sm backdrop-blur-sm"></div>

              <motion.div 
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="bg-white p-4 pb-16 shadow-lg transform rotate-2 border border-gray-100 relative"
              >
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                   {/* MAKE SURE THIS FILENAME MATCHES YOUR PUBLIC FOLDER */}
                   <Image 
                     src="/photo4.jpg" 
                     alt="Us together" 
                     fill 
                     className="object-cover"
                   />
                </div>
                
                <div className="absolute bottom-4 left-0 right-0 text-center">
                   <p className="font-serif italic text-gray-400 text-sm">Us, 2026</p>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

        <footer className="absolute bottom-4 text-center text-gray-400 text-xs tracking-widest uppercase opacity-50">
          A Forever Promise ❤️
        </footer>
      </div>
    </motion.div>
  );
};