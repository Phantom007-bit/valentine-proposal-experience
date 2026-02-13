"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface ProposalSectionProps {
  onYes: () => void;
}

export const ProposalSection = ({ onYes }: ProposalSectionProps) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  // The "Dodge" Logic - moves the button to a random spot
  const moveNoButton = () => {
    const x = Math.random() * 200 - 100; // Move left/right by up to 100px
    const y = Math.random() * 200 - 100; // Move up/down by up to 100px
    setNoPos({ x, y });
  };

  return (
    <section className="h-screen w-full snap-start flex flex-col items-center justify-center bg-red-50 p-6 text-center relative overflow-hidden">
      
      {/* Background Pulse Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <Heart size={400} className="text-red-500 animate-pulse" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border-2 border-red-100"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-red-600 mb-12 leading-tight">
          Will you be my Valentine?
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-32 w-full relative">
          {/* YES BUTTON - Triggers the next phase */}
          <button
            onClick={onYes}
            className="w-48 py-4 bg-red-500 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-all transform z-20"
          >
            YES 💖
          </button>

          {/* NO BUTTON - Dodges the cursor/finger */}
          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            onMouseEnter={moveNoButton} // For Mouse
            onTouchStart={moveNoButton} // For Touch/Mobile
            className="text-gray-400 font-bold text-sm py-2 hover:text-gray-600 transition-colors absolute md:relative top-24 md:top-auto"
          >
            No (Nice try!)
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};