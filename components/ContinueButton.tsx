import { motion } from "framer-motion";

interface ContinueButtonProps {
  onClick: () => void;
  delay?: number;
}

const ContinueButton = ({ onClick, delay = 2 }: ContinueButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="mt-8"
    >
      <button
        onClick={onClick}
        className="px-8 py-3 rounded-full font-body text-sm tracking-widest uppercase
          bg-primary/20 text-primary border border-primary/30
          hover:bg-primary/30 hover:border-primary/50 hover:shadow-glow
          transition-all duration-300 backdrop-blur-sm cursor-pointer relative z-20"
      >
        Tap to continue →
      </button>
    </motion.div>
  );
};

export default ContinueButton;
