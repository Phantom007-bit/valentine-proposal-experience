"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, Heart } from "lucide-react";

interface LoginProps {
  onVerified: (name: string) => void; // <--- Fix: Now accepts a name string
}

export const LoginPage = ({ onVerified }: LoginProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    // Check for password "1402" or "red"
    if (password === "1402" || password.toLowerCase() === "red") {
      // FIX: Send the typed name. If empty, default to "My Love"
      onVerified(name || "My Love"); 
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-pink-200 via-pink-100 to-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/50"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-pink-100 p-4 rounded-full">
            <Lock className="w-8 h-8 text-pink-500" />
          </div>
        </div>

        <h1 className="text-3xl font-serif text-center text-red-900 mb-2">Log In</h1>
        <p className="text-center text-gray-500 mb-8 flex items-center justify-center gap-2">
          Please verify your identity to enter <Heart size={16} className="text-red-500 fill-red-500" />
        </p>

        <div className="space-y-4">
          {/* NAME FIELD */}
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Your beautiful name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-pink-100 bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input 
              type="password"
              placeholder="Passcode (hint: 1402)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-pink-100 bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center font-bold"
            >
              Wrong passcode! Try "1402" ❤️
            </motion.p>
          )}

          <button 
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 mt-4"
          >
            Unlock My Heart
          </button>
        </div>
      </motion.div>
    </div>
  );
};