"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import QuizTest from "@components/QuizTest";
import { Countdown } from "@components/CountDown";
import DonutChart from "@components/DonutChart";
import IntroQuiz from "@components/IntroQuiz";
import DonutTestowy from "@components/DonutTestowy";

const Quiz = () => {
  const [displayView, setDisplayView] = useState("intro");
  const [score, setScore] = useState(0);

  return (
    <div className="bg-[url('/assets/icons/quiz/doodles.svg')] bg-cover min-h-screen flex flex-col items-center justify-center ">
      <main className="h-viewport flex flex-col w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {
            {
              intro: (
                <IntroQuiz
                  onGoClick={() => {
                    setDisplayView("countdown");
                  }}
                />
              ),

              countdown: (
                <Countdown
                  onGoClick={() => {
                    setDisplayView("quiz");
                  }}
                />
              ),
              quiz: (
                <QuizTest
                  onGoClick={() => {
                    setDisplayView("chart");
                  }}
                  onScore = {setScore}
                />
              ),
              chart: <DonutChart score={score} />,
            }[displayView]
          }
        </AnimatePresence>
      </main>
     
    </div>
  );
};

export default Quiz;
