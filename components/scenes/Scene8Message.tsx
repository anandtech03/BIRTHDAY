import { motion } from "framer-motion";
import Sparkles from "@/components/Sparkles";
import TypewriterText from "@/components/TypewriterText";
import ContinueButton from "@/components/ContinueButton";

interface SceneProps {
  onNext: () => void;
}

const Scene8Message = ({ onNext }: SceneProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dreamy relative">
      <Sparkles count={10} />

      {/* Soft ambient glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--rose-light) / 0.3), transparent)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 text-center px-6 max-w-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 text-5xl"
        >
          💕
        </motion.div>

        <h1 className="font-romantic text-4xl md:text-5xl text-primary text-glow mb-6">
          <TypewriterText text="Thank you for being YOU" delay={0.5} speed={0.08} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          For loving, caring, and standing by me, Need you Always...😘😘😘
        </motion.p>

        <ContinueButton onClick={onNext} delay={4.5} />
      </div>
    </div>
  );
};

export default Scene8Message;
