import { motion } from "framer-motion";
import { useMemo } from "react";

const COLORS = [
  "hsl(350, 60%, 65%)",
  "hsl(40, 70%, 55%)",
  "hsl(350, 70%, 85%)",
  "hsl(40, 80%, 75%)",
  "hsl(30, 40%, 95%)",
  "hsl(10, 50%, 90%)",
];

const Confetti = ({ count = 50 }: { count?: number }) => {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: COLORS[i % COLORS.length],
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 3,
        size: 6 + Math.random() * 8,
        rotateEnd: Math.random() * 720 - 360,
        xDrift: (Math.random() - 0.5) * 200,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, window.innerHeight + 50],
            x: [0, p.xDrift],
            rotate: [0, p.rotateEnd],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
