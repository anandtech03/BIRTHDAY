import { motion } from "framer-motion";
import Sparkles from "@/components/Sparkles";
import TypewriterText from "@/components/TypewriterText";
import ContinueButton from "@/components/ContinueButton";

interface SceneProps {
  onNext: () => void;
}

const Scene2Reveal = ({ onNext }: SceneProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-night relative">
      <Sparkles count={30} />

      {/* Soft glow orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold-light)), transparent)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-romantic text-4xl md:text-6xl text-gold-light mb-6">
          <TypewriterText text="Because today is the day..." delay={0.3} speed={0.08} />
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8, type: "spring" }}
        >
          <p className="font-romantic text-5xl md:text-7xl text-gold text-glow-gold">
            YOU were born ✨
          </p>
        </motion.div>

        <ContinueButton onClick={onNext} delay={4.5} />
      </div>
    </div>
  );
};

export default Scene2Reveal;
