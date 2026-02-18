import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";

interface SceneProps {
  onNext: () => void;
}

const Scene9Final = ({ onNext: _ }: SceneProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dreamy relative">
      <FloatingHearts count={20} />
      <Sparkles count={25} />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold-glow) / 0.25), transparent)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 text-center px-6 flex flex-col items-center max-w-lg">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="font-romantic text-5xl md:text-7xl text-primary text-glow mb-6"
        >
          HAPPY BIRTHDAY MY LOVE ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4"
        >
          You are always my wife, Through every high and every low, you have ve been my strength, my happiness, and my calm.
seriously every moment  feels magical with you..
I am grateful for every laugh we have shared...
every silent moment we understood without words,
and every memory we are  still yet to create together....
Loving you is the easiest and most beautiful thing my heart has ever known.
On your birthday, I wish you endless smiles, dreams that come true, and a life filled with love and peace.
And I promise today, tomorrow, and always I will be right here, choosing you, supporting you, and loving you with all my heart.
Thank you for being you.
Thank you for loving me the way you do.
I love you more than words could ever express..
LOVE YOU ALWAYS....😊🫶🏻✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="mt-6 text-3xl"
        >
          💖✨💕✨💖
        </motion.div>
      </div>
    </div>
  );
};

export default Scene9Final;
