import { motion } from "framer-motion";

const BirthdayCake = () => {
  const candles = [0, 1, 2, 3, 4];

  return (
    <div className="relative mx-auto w-48 h-56 flex flex-col items-center justify-end">
      {/* Candles */}
      <div className="flex gap-6 mb-1 relative z-10">
        {candles.map((i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Flame */}
            <motion.div
              className="w-3 h-4 rounded-full mb-0.5"
              style={{
                background: "radial-gradient(ellipse, hsl(40, 100%, 70%), hsl(30, 100%, 50%), transparent)",
                filter: "blur(0.5px)",
              }}
              animate={{
                scaleY: [1, 1.15, 0.95, 1.05, 1],
                scaleX: [1, 0.9, 1.05, 0.95, 1],
                opacity: [1, 0.85, 1, 0.9, 1],
              }}
              transition={{
                duration: 0.6 + i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Wick */}
            <div className="w-0.5 h-6 bg-foreground/40 rounded-full" />
          </div>
        ))}
      </div>

      {/* Cake layers */}
      <motion.div
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full flex flex-col items-center"
      >
        {/* Top layer */}
        <div
          className="w-32 h-10 rounded-t-lg relative"
          style={{ background: "linear-gradient(180deg, hsl(350, 70%, 80%), hsl(350, 60%, 70%))" }}
        >
          <div className="absolute top-1 left-2 right-2 h-1.5 rounded-full bg-primary-foreground/30" />
        </div>
        {/* Middle layer */}
        <div
          className="w-40 h-12 relative"
          style={{ background: "linear-gradient(180deg, hsl(40, 70%, 75%), hsl(40, 60%, 65%))" }}
        >
          <div className="absolute top-2 left-3 right-3 h-1.5 rounded-full bg-primary-foreground/20" />
          <div className="absolute bottom-2 left-3 right-3 h-1.5 rounded-full bg-primary-foreground/20" />
        </div>
        {/* Bottom layer */}
        <div
          className="w-48 h-14 rounded-b-lg relative"
          style={{ background: "linear-gradient(180deg, hsl(350, 60%, 75%), hsl(350, 50%, 65%))" }}
        >
          <div className="absolute top-2 left-4 right-4 h-1.5 rounded-full bg-primary-foreground/20" />
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdayCake;
