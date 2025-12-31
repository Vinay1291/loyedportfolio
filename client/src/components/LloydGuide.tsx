import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import lloydGuide from '@assets/generated_images/anime_character_lloyd_frontera_style_tour_guide_pointing.png';
import { X } from 'lucide-react';

const dialogues = [
  "Welcome to my humble estate! I built this with my own two hands... and some code.",
  "Looking for a developer? You've found the greatest one in the kingdom!",
  "My Flutter skills are as solid as a fortress wall. No bugs get past me!",
  "Scroll down! The architecture only gets better from here.",
  "Need a shovel? ...I mean, a mobile app? I'm your guy!",
];

export default function LloydGuide() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentDialogue, setCurrentDialogue] = useState(0);

  // Cycle dialogues every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDialogue((prev) => (prev + 1) % dialogues.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end p-2 sm:p-4 md:p-8 pointer-events-none max-w-[100vw] overflow-hidden">
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDialogue}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          className="pointer-events-auto relative mr-4 sm:mr-8 md:mr-12 mb-2 sm:mb-4 max-w-[200px] sm:max-w-[250px] bg-card text-card-foreground p-3 sm:p-4 rounded-2xl shadow-xl border-2 border-secondary speech-bubble text-xs sm:text-sm"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 hover:bg-red-600 transition-colors z-10"
          >
            <X size={12} />
          </button>
          <p className="font-medium font-sans leading-relaxed">
            {dialogues[currentDialogue]}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Character Image */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative h-[200px] w-[160px] sm:h-[300px] sm:w-[250px] pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300 origin-bottom"
        onClick={() => setCurrentDialogue((prev) => (prev + 1) % dialogues.length)}
      >
        <img 
          src={lloydGuide} 
          alt="Lloyd Frontera Guide" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
