import { useRef } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { type PhotoSlot, usePhotos } from "@/contexts/PhotoContext";

interface PhotoUploadButtonProps {
  slot: PhotoSlot;
}

const PhotoUploadButton = ({ slot }: PhotoUploadButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setPhoto } = usePhotos();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhoto(slot, url);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onClick={() => inputRef.current?.click()}
        className="absolute top-2 right-2 z-20 p-2 rounded-full
          bg-background/70 border border-primary/30 backdrop-blur-sm
          hover:bg-background/90 hover:border-primary/50
          transition-all duration-200"
        aria-label="Upload your own photo"
      >
        <Camera className="w-4 h-4 text-primary" />
      </motion.button>
    </>
  );
};

export default PhotoUploadButton;
