import { motion } from "framer-motion";
import { Home } from "lucide-react";

interface HomeButtonProps {
  onClick: () => void;
}

const HomeButton = ({ onClick }: HomeButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={onClick}
      className="fixed top-4 left-4 z-50 p-2.5 rounded-full 
        bg-primary/15 border border-primary/25 backdrop-blur-md
        hover:bg-primary/25 hover:border-primary/40 hover:shadow-glow
        transition-all duration-300"
      aria-label="Go home"
    >
      <Home className="w-4 h-4 text-primary" />
    </motion.button>
  );
};

export default HomeButton;
