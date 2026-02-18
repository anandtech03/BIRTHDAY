import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";
import Sparkles from "@/components/Sparkles";
import ContinueButton from "@/components/ContinueButton";
import { usePhotos } from "@/contexts/PhotoContext";

interface SceneProps {
  onNext: () => void;
}

const Scene6Montage = ({ onNext }: SceneProps) => {
  const { montagePhotos, addMontagePhotos, removeMontagePhoto } = usePhotos();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-slide
  useEffect(() => {
    if (montagePhotos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % montagePhotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [montagePhotos.length]);

  // Keep index in bounds
  useEffect(() => {
    if (currentIndex >= montagePhotos.length) {
      setCurrentIndex(Math.max(0, montagePhotos.length - 1));
    }
  }, [montagePhotos.length, currentIndex]);

  const handleAddPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const urls = Array.from(files).map((f) => URL.createObjectURL(f));
    addMontagePhotos(urls);
    e.target.value = "";
  };

  const handleRemove = () => {
    if (montagePhotos.length <= 1) return;
    removeMontagePhoto(currentIndex);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dreamy relative">
      <Sparkles count={18} />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleAddPhotos}
      />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Photo frame */}
        <div
          className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-glow border-2 border-primary/15 mb-4 relative cursor-pointer"
          onClick={() => setShowControls((v) => !v)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={montagePhotos[currentIndex]}
              alt={`Memory ${currentIndex + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Controls overlay */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-foreground/30 backdrop-blur-sm z-20 flex items-center justify-center gap-4"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="p-3 rounded-full bg-background/80 border border-primary/30 hover:bg-background transition-colors"
                  aria-label="Add photos"
                >
                  <Plus className="w-5 h-5 text-primary" />
                </button>
                {montagePhotos.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove();
                    }}
                    className="p-3 rounded-full bg-background/80 border border-destructive/30 hover:bg-background transition-colors"
                    aria-label="Remove this photo"
                  >
                    <Trash2 className="w-5 h-5 text-destructive" />
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 max-w-[80%] flex-wrap justify-center">
            {montagePhotos.length <= 20
              ? montagePhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-primary/90 w-4"
                        : "bg-background/50"
                    }`}
                  />
                ))
              : (
                <span className="text-xs font-body text-background/80 bg-foreground/30 rounded-full px-2 py-0.5 backdrop-blur-sm">
                  {currentIndex + 1} / {montagePhotos.length}
                </span>
              )}
          </div>
        </div>

        {/* Photo count + add button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="font-body text-sm text-muted-foreground">
            {montagePhotos.length} photo{montagePhotos.length !== 1 ? "s" : ""}
          </span>
          {montagePhotos.length < 50 && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body
                bg-primary/15 text-primary border border-primary/25
                hover:bg-primary/25 transition-colors"
            >
              <Plus className="w-3 h-3" />
              Add photos
            </button>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-romantic text-3xl md:text-4xl text-primary text-glow mb-3"
        >
          Laughs, love, madness…
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm"
        >
          With you, everything feels perfect 😊🫶🏻💫
        </motion.p>

        <ContinueButton onClick={onNext} delay={2} />
      </div>
    </div>
  );
};

export default Scene6Montage;
