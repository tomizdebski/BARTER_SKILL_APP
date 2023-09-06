"use client";
import { useState } from "react";

import QuizTest from "@components/QuizTest";
import { Countdown } from "@components/CountDown";
import DonutChart from "react-donut-chart";

const Quiz = () => {
  const [start, setStart] = useState(false); //stsrt quiz

  const onGoClick = () => {
    setStart(true);
  };

  return (
    <div className="bg-[url('/assets/icons/quiz/doodles.svg')] bg-cover min-h-screen flex flex-col items-center justify-center ">
      {!start && <Countdown onGoClick={onGoClick} />}
      {start && <QuizTest />}
      <DonutChart
        data={[
          {
            label: "Give you up",
            value: 25,
          },
          {
            label: "",
            value: 75,
            isEmpty: true,
          },
        ]}
      />
      ;
    </div>
  );
};

export default Quiz;
