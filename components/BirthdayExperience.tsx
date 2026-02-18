import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhotoProvider } from "@/contexts/PhotoContext";
import HomeButton from "@/components/HomeButton";
import Scene1Opening from "@/components/scenes/Scene1Opening";
import Scene2Reveal from "@/components/scenes/Scene2Reveal";
import Scene3Birthday from "@/components/scenes/Scene3Birthday";
import Scene4Memory1 from "@/components/scenes/Scene4Memory1";
import Scene5Memory2 from "@/components/scenes/Scene5Memory2";
import Scene6Montage from "@/components/scenes/Scene6Montage";
import Scene7Cake from "@/components/scenes/Scene7Cake";
import Scene8Message from "@/components/scenes/Scene8Message";
import Scene9Final from "@/components/scenes/Scene9Final";

const scenes = [
  Scene1Opening,
  Scene2Reveal,
  Scene3Birthday,
  Scene4Memory1,
  Scene5Memory2,
  Scene6Montage,
  Scene7Cake,
  Scene8Message,
  Scene9Final,
];

const BirthdayExperience = () => {
  const [currentScene, setCurrentScene] = useState(0);

  const nextScene = useCallback(() => {
    setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
  }, []);

  const goHome = useCallback(() => {
    setCurrentScene(0);
  }, []);

  const CurrentSceneComponent = scenes[currentScene];

  return (
    <PhotoProvider>
      <div className="fixed inset-0 overflow-hidden">
        {currentScene > 0 && <HomeButton onClick={goHome} />}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <CurrentSceneComponent onNext={nextScene} />
          </motion.div>
        </AnimatePresence>
      </div>
    </PhotoProvider>
  );
};

export default BirthdayExperience;
