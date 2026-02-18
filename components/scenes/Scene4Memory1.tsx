import { motion } from "framer-motion";
import Sparkles from "@/components/Sparkles";
import ContinueButton from "@/components/ContinueButton";
import PhotoUploadButton from "@/components/PhotoUploadButton";
import { usePhotos } from "@/contexts/PhotoContext";

interface SceneProps {
  onNext: () => void;
}

const Scene4Memory1 = ({ onNext }: SceneProps) => {
  const { photos } = usePhotos();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dreamy relative">
      <Sparkles count={12} />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-glow border-2 border-primary/20 relative">
            <img
              src={photos.memory1}
              alt="Memory"
              className="w-full h-full object-cover"
            />
            <PhotoUploadButton slot="memory1" />
          </div>
          <motion.div
            className="absolute -inset-4 rounded-3xl pointer-events-none -z-10"
            style={{
              background: "radial-gradient(circle, hsl(var(--rose-glow) / 0.15), transparent 70%)",
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-romantic text-3xl md:text-4xl text-primary text-glow mb-2"
        >
          This smile always gives happiness....💖
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-muted-foreground"
        >
          God Bless You, JAAN..😊🫶🏻
        </motion.p>

        <ContinueButton onClick={onNext} delay={2.5} />
      </div>
    </div>
  );
};

export default Scene4Memory1;
