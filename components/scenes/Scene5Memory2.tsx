import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import ContinueButton from "@/components/ContinueButton";
import PhotoUploadButton from "@/components/PhotoUploadButton";
import { usePhotos } from "@/contexts/PhotoContext";

interface SceneProps {
  onNext: () => void;
}

const Scene5Memory2 = ({ onNext }: SceneProps) => {
  const { photos } = usePhotos();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-romantic relative">
      <FloatingHearts count={10} />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-golden border-2 border-accent/30 relative">
            <img
              src={photos.memory2}
              alt="Memory"
              className="w-full h-full object-cover"
            />
            <PhotoUploadButton slot="memory2" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-romantic text-3xl md:text-4xl text-primary text-glow mb-2"
        >
          Every memory with you…
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-muted-foreground"
        >
          I want to keep forever 😊🫶🏻✨
        </motion.p>

        <ContinueButton onClick={onNext} delay={2.5} />
      </div>
    </div>
  );
};

export default Scene5Memory2;
