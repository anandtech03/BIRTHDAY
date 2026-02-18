import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import TypewriterText from "@/components/TypewriterText";
import ContinueButton from "@/components/ContinueButton";

interface SceneProps {
  onNext: () => void;
}

const Scene1Opening = ({ onNext }: SceneProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dreamy relative">
      <FloatingHearts count={12} />
      <Sparkles count={15} />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <span className="text-6xl">💖</span>
        </motion.div>

        <h1 className="font-romantic text-5xl md:text-7xl text-primary text-glow mb-6">
          <TypewriterText text="Hey Love..." delay={0.5} speed={0.1} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="font-body text-xl md:text-2xl text-muted-foreground font-light"
        >
          Today, 19 feb  A beautiful day for ME...
        </motion.p>

        <ContinueButton onClick={onNext} delay={3.5} />
      </div>
    </div>
  );
};

export default Scene1Opening;
