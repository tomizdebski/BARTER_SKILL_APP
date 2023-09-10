'use client'
import { useEffect } from "react";
import { formatTime } from "@utils/formatTime";
import { shuffle } from "./QuizTest";


const QuizTestCard = ({counter, currentQuestion, countdown, setAnswer, onGoClick, handleClick}) => {




  let arrayQuestions = [
    "Answer",
    "Distractor1",
    "Distractor2",
    "Distractor3",
  ];

  useEffect(() => {
    arrayQuestions = shuffle(arrayQuestions);
    console.log('pytania',arrayQuestions);
  }, [])
  



  return (
    <div className="">
       
          <div className=" flex items-center place-content-between pb-10">
            <div>
              <span className="font-medium text-blue-600">{counter}</span>
              <span className="font-medium text-green-600">/10</span>
            </div>

            <div className="flex">
              <div className="flex  items-center">
                <img
                  src="/assets/icons/quiz/time.svg"
                  alt="timer"
                  className="h-10 w-10"
                />
                <span className="font-medium ml-2 text-red-800">{`${formatTime(countdown)}`}</span>
              </div>
            </div>
          </div>
          <h2 className="font-bold mb-6 text-gray-900 wrap">
            {currentQuestion.Question}
          </h2>
         
          <button
            className="text-gray-800 font-normal w-[100%]  bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300 focus:bg-blue-gray-500"
            onClick={() => setAnswer(currentQuestion[arrayQuestions[0]])}
          >
            <label className="p-4 flex cursor-pointer ">
              {`A. ${currentQuestion[arrayQuestions[0]]}`}
            </label>
          </button>
          <button
            className="text-gray-800 font-normal  w-[100%] bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300 focus:bg-blue-gray-500"
            onClick={() => setAnswer(currentQuestion[arrayQuestions[1]])}
          >
            <label className="p-4 flex cursor-pointer ">
              {`B. ${currentQuestion[arrayQuestions[1]]}`}
            </label>
          </button>
          <button
            className="text-gray-800 font-normal w-[100%]  bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300 focus:bg-blue-gray-500"
            onClick={() => setAnswer(currentQuestion[arrayQuestions[2]])}
          >
            <label className="p-4 flex cursor-pointer ">
              {`C. ${currentQuestion[arrayQuestions[2]]}`}
            </label>
          </button>
          <button
            className="text-gray-800 font-normal w-[100%] bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300 focus:bg-blue-gray-500"
            onClick={() => setAnswer(currentQuestion[arrayQuestions[3]])}
          >
            <label className="p-4 flex cursor-pointer ">
              {`D. ${currentQuestion[arrayQuestions[3]]}`}
            </label>
          </button>
          
          
          <button
            onClick={handleClick}
            className=" text-gray-800 w-[100%] font-normal flex justify-center items-center border border-blue-600 rounded-lg hover:bg-gray-300 p-4 bg-blue-200"
          >
            Następne
          </button>
          {counter === 10 && <button onClick={onGoClick}>Koniec</button>}
        
    </div>
  )
}

export default QuizTestCard
