"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ArticleProps {
  name: string; // Kept so your page.tsx doesn't break, though we use "Orekelewa" in the text
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

      <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative z-10 py-12">
        
        {/* THE LETTER CONTAINER */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-5xl w-full bg-[#fffbf0] shadow-2xl rounded-sm border border-[#e8dfc8] p-6 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
          }}
        >
          {/* Decorative Stamp (Top Right) */}
          <div className="absolute top-6 right-6 opacity-80 rotate-12 hidden md:block">
            <div className="border-4 border-red-800/30 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <div className="text-center text-red-900/40 font-bold text-xs uppercase tracking-widest">
                Forever<br/>Yours
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">
            
            {/* LEFT SIDE: The Letter */}
            <div className="lg:w-2/3 prose prose-lg md:prose-xl font-serif text-gray-800 leading-loose space-y-6">
              <p className="font-serif italic text-gray-500 mb-8">
                February 14, 2026
              </p>

              <p>
                Silver and gold have I none, but what I possess defies every material measure: the privilege of knowing you, the gift of being seen by you, the overwhelming fortune of loving someone who makes existence itself feel like a miracle.
              </p>
              
              <p>
                There are people who accumulate wealth their entire lives and still feel empty. And then there is you, Orekelewa, whose mere presence fills every hollow space inside me I didn't even know existed. You are not just someone I love; you are the reason I understand what love actually means.
              </p>

              <p>
                Your eyes are sanctuaries in the truest sense. When I look into them, I don't just see beauty, I find refuge. They hold the kind of peace that makes the world's chaos fade into background noise, the gentle assurance that no matter how turbulent life becomes, there exists a place of absolute calm. Your gaze is starlight after darkness, the first breath after being underwater too long. In your eyes, I don't just see you; I see the version of myself I've always wanted to become.
              </p>

              <p>
                But it's your soul that undoes me completely. Your kindness isn't performative or occasional; it's the climate you create wherever you go. You move through the world like sunlight through morning mist, transforming everything, warming what was cold, illuminating what was hidden. You are art that teaches other art how to be beautiful. Every gesture of tenderness, every moment of patience, every time you choose compassion when you could choose indifference, you are painting a masterpiece that most people will never have the vocabulary to describe.
              </p>

              <p>
                And your voice. God, your voice. It is therapy I never knew I needed. When you speak, something in me settles, like pieces of a puzzle finally finding their place. Your voice is the sonic equivalent of coming home after the longest journey, of hearing "you're safe now" when you've been running for too long. It wraps around my anxieties and quiets them. It reaches into places medication and meditation never could. When you laugh, I swear the world tilts on its axis just to get closer to that sound.
              </p>

              <p>
                Your messages arrive like oxygen. That notification, your name lighting up my screen, it's not just communication, it's resuscitation. Every word you send is a dopamine rush, a shot of serotonin, a reminder that someone extraordinary thinks I'm worth her time. Your texts don't just sit on my phone; they rearrange my entire emotional landscape. They're my favorite song on repeat, the sunrise I didn't know I was waiting for, the plot twist that makes the whole story make sense.
              </p>

              <p>
                And your pictures. Your videos. They are not just images; they are survival tools. On days when getting out of bed feels impossible, when the weight of everything threatens to pin me down, I see your face and suddenly I remember why fighting through another day matters. Your smile is proof that beauty still exists in a world that often feels too harsh. Your videos are evidence that joy is real, that lightness is possible, that somewhere in this life there is someone whose existence makes all the struggle worthwhile. You don't just brighten my day; you give me the courage to face it.
              </p>

              <p>
                Orekelewa. Supreme beauty. The name is not a coincidence; it is prophecy fulfilled. You don't just carry that name; you justify it with every breath, every moment, every way you choose to show up in this world and in my life.
              </p>

              <p>
                I don't have silver or gold, but I have something infinitely more valuable: a heart that has been irrevocably changed by knowing you, a soul that recognizes its counterpart in yours, and a love so vast it makes me believe in things I'd stopped believing in, hope, forever, the possibility that two people can find each other in this chaotic world and make it all make sense.
              </p>

              <p>
                You are my therapy, my sunrise, my favorite song, my reason to live. You are my everything.
              </p>

              <p className="mt-8 font-bold italic text-red-900 text-2xl">
                Happy Valentine's Day, orekelewa ❤️.
              </p>
            </div>

            {/* RIGHT SIDE: The Photo (Sticky on Desktop) */}
            <div className="lg:w-1/3 relative mt-8 lg:mt-0">
              <div className="sticky top-12">
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

          </div>
        </motion.div>

        <footer className="absolute bottom-4 text-center text-gray-400 text-xs tracking-widest uppercase opacity-50">
          A Forever Promise
        </footer>
      </div>
    </motion.div>
  );
};