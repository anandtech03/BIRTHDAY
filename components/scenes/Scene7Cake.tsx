import { motion } from "framer-motion";
import Confetti from "@/components/Confetti";
import Sparkles from "@/components/Sparkles";
import BirthdayCake from "@/components/BirthdayCake";
import ContinueButton from "@/components/ContinueButton";

interface SceneProps {
  onNext: () => void;
}

// Simple balloon component
const Balloon = ({ x, delay, color }: { x: number; delay: number; color: string }) => (
  <motion.div
    className="absolute bottom-0"
    style={{ left: `${x}%` }}
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: -window.innerHeight * 0.3, opacity: 1 }}
    transition={{ delay, duration: 2, ease: "easeOut" }}
  >
    <motion.div
      animate={{ x: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="w-10 h-14 rounded-full relative"
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-px h-12 bg-foreground/20" />
      </div>
    </motion.div>
  </motion.div>
);

const Scene7Cake = ({ onNext }: SceneProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-celebration relative overflow-hidden">
      <Confetti count={40} />
      <Sparkles count={15} />

      <Balloon x={10} delay={0.5} color="hsl(350, 60%, 65%)" />
      <Balloon x={25} delay={0.8} color="hsl(40, 70%, 55%)" />
      <Balloon x={75} delay={0.6} color="hsl(350, 70%, 80%)" />
      <Balloon x={90} delay={1} color="hsl(40, 80%, 70%)" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <BirthdayCake />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-romantic text-4xl md:text-5xl text-primary text-glow mt-8 mb-2"
        >
          Make a wish 🎂✨🫶🏻
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-deep-rose"
        >
          Because you deserve all the happiness, Today is your day, Stay Happy, Stay Together, LOVE YOU JAAN😘😘😘
        </motion.p>

        <ContinueButton onClick={onNext} delay={3} />
      </div>
    </div>
  );
};

export default Scene7Cake;
