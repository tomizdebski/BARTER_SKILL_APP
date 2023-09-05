"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@hooks/useCoundown";



export const Countdown = ({ onGoClick }) => {
  const countdown = useCountdown(10);

  return (
    <motion.div
      key={"countdown"}
      variants={{
        initial: {
          background: "#f4918e",
          clipPath: "circle(0% at 50% 50%)",
        },
        animate: {
          background: "#FF6A66",
          clipPath: "circle(100% at 50% 50%)",
        },
      }}
      className="w-full h-full flex justify-center items-center px-5 py-8"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-white font-bold text-[32px]">
        
        <div className="flex justify-center items-center mt-[38px] rounded-full border-8 border-white w-[100px] h-[100px] bg-transparent">
          {countdown !== 0 ? (
            <span className="text-[200px]">{countdown}</span>
          ) : (
            <span className="text-[20px] cursor-pointer" onClick={onGoClick}>
              Start
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};