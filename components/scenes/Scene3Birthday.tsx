import { motion } from "framer-motion";
import Confetti from "@/components/Confetti";
import FloatingHearts from "@/components/FloatingHearts";
import ContinueButton from "@/components/ContinueButton";

interface SceneProps {
  onNext: () => void;
}

const Scene3Birthday = ({ onNext }: SceneProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-celebration relative">
      <Confetti count={60} />
      <FloatingHearts count={8} />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="font-romantic text-6xl md:text-8xl text-primary text-glow mb-4"
        >
          HAPPY BIRTHDAY SWEETU
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-5xl mb-6"
        >
          🥳🎂❤️
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-body text-xl md:text-2xl text-deep-rose font-medium animate-glow-pulse"
        >
          My safe place, My Happiness, My World 😊🫶🏻
        </motion.p>

        <ContinueButton onClick={onNext} delay={2.5} />
      </div>
    </div>
  );
};

export default Scene3Birthday;
