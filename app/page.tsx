"use client";

import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { MemorySection } from "@/components/MemorySection";
import { ProposalSection } from "@/components/ProposalSection";
import { FeatureArticle } from "@/components/FeatureArticle";
import { LoginPage } from "@/components/LoginScreen";
import { ArrowDown, Music, Volume2, VolumeX } from "lucide-react";

export default function ValentinePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [partnerName, setPartnerName] = useState("My Love");
  const [hasSaidYes, setHasSaidYes] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to handle music playback safely
  const attemptPlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; 
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio started!");
            setIsMuted(false);
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            setIsMuted(true); // Show mute icon if it failed so user can click it
          });
      }
    }
  };

  const handleLogin = (name: string) => {
    setPartnerName(name);
    // 1. Try to play music IMMEDIATELY upon click
    attemptPlayMusic();
    // 2. Then set the state
    setIsAuthenticated(true);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const handleYes = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    setTimeout(() => {
      setHasSaidYes(true);
    }, 1500);
  };

  return (
    <main className="h-screen w-full bg-black relative">
      {/* AUDIO ELEMENT */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music.mp3" type="audio/mp3" />
        <source src="/music.mp4" type="audio/mp4" />
      </audio>

      {/* MUSIC TOGGLE BUTTON (Always visible after login) */}
      {isAuthenticated && (
        <button 
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-50 bg-white/30 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/50 transition-all shadow-lg animate-fade-in"
        >
          {isMuted ? <VolumeX size={24} /> : <Music size={24} className="animate-pulse" />}
        </button>
      )}

      {/* PHASE 0: LOGIN */}
      {!isAuthenticated && (
        <LoginPage onVerified={handleLogin} />
      )}

      {/* PHASE 3: ARTICLE */}
      {isAuthenticated && hasSaidYes && (
        <FeatureArticle name={partnerName} />
      )}

      {/* PHASE 1 & 2: MAIN FEED */}
      {isAuthenticated && !hasSaidYes && (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <MemorySection id={1} imageSrc="us1.jpg" caption="Our first date ☕" />
          <MemorySection id={2} imageSrc="us2.jpg" caption="That sunset... 🌅" />
          <MemorySection id={3} imageSrc="us3.jpg" caption="You + Me 💑" />

          <section className="h-screen w-full snap-start flex flex-col items-center justify-center bg-pink-100 text-pink-900">
            <h2 className="font-serif text-4xl mb-6">One more thing...</h2>
            <ArrowDown className="animate-bounce w-12 h-12" />
          </section>

          <ProposalSection onYes={handleYes} />
        </div>
      )}
    </main>
  );
}