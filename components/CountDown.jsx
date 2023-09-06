"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@hooks/useCoundown";



export const Countdown = ({ onGoClick }) => {
  const countdown = useCountdown(3);

  return (
    <motion.div
      key={"countdown"}
      variants={{
        initial: {
          background: "#f4918e",
          clipPath: "circle(0% at 50% 50%)",
        },
        animate: {
          background: "#f20505",
          clipPath: "circle(100% at 50% 50%)",
        },
      }}
      className="w-[100vh] h-[100vh] flex justify-center items-center px-20 py-20"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col
       items-center text-white font-bold text-[60px] justify-center ">
        <h1 className="text-center ">Quiz</h1>
        
        <div className="flex justify-center items-center mt-[38px] rounded-full border-8 border-white w-[196px] h-[196px] bg-transparent">
          {countdown !== 0 ? (
            <span className="text-[40px]">{countdown}</span>
          ) : (
            <span className="text-[60px] cursor-pointer" onClick={onGoClick}>
              Start
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};