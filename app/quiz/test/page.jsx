"use client";
import { useContext } from "react";
import axios from "axios";
import { UserContext } from "@components/UserContext";



const Quiz = () => {

  const { userInfo, setUserInfo } = useContext(UserContext);
  

  //const quizName = ["React", "JavaScript", "Python", "Gatsby", "Angular", "Django", "CSS", "Kotlin", "Laravel"]

  const handleClick = (e) => {};

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center">
      <div className="min-h-screen flex flex-col items-center pl-40 pr-40">
        <div className="mt-12 mb-12 head_text ">
        <span className="blue_gradient">
          Test React
        </span>
          </div>
        <div className=" bg-white rounded-lg mb-16 relative p-20">
          <div className=" flex justify-between items-center">
            <div>
              <span className="font-medium text-blue-600">01</span>
              <span className="font-medium text-green-600">/11</span>
            </div>
            
            <div className="flex">
              <div className="flex justify-center items-center">
                <img
                  src="/assets/icons/quiz/time.svg"
                  alt="timer"
                  className="h-10 w-10"
                />
                <span className="font-medium ml-2 text-red-800">9:06</span>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-10">
            <h2 className="font-medium mb-6 text-gray-900">
              In React, what is the purpose of keys in lists?
            </h2>

            <div className="max-w-[100%]">

              <div className="text-gray-800 font-normal bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300">
                <label className="p-4 flex cursor-pointer">
                  <span className="sc-hBxehG jqVsbC">A.</span>
                  
                  To provide a unique identifier for each item in the list
                </label>
              </div>

              <div className="text-gray-800 font-normal bg-white cursor-pointer border border-gray-400 rounded-lg mb-4  hover:bg-green-300">
                <label className="p-4 flex cursor-pointer">
                  <span className="sc-hBxehG jqVsbC">B.</span>
                  
                  To control the order of items in the lis
                </label>
              </div>

              <div className="text-gray-800 font-normal bg-white cursor-pointer border border-gray-400 rounded-lg mb-4  hover:bg-green-300 ">
                <label className="p-4 flex cursor-pointer">
                  <span className="sc-hBxehG jqVsbC">C.</span>
                  To enable sorting and filtering of the list
                </label>
              </div>
              <div className="text-gray-800 font-normal bg-white cursor-pointer border border-gray-400 rounded-lg mb-4  hover:bg-green-300">
                <label className="p-4 flex cursor-pointer">
                  <span className="sc-hBxehG jqVsbC">D.</span>
                  
                  To handle user interactions within the list
                </label>
              </div>
            </div>
          </div>
          <div className="flex  gap-5 items-center justify-center">
            <button className="w-48 text-blue-600 font-normal flex justify-center items-center border-2 border-blue-600 rounded-lg hover:bg-gray-300">Skip</button>
            <button className="w-48 text-blue-600 font-normal flex justify-center items-center border-2 border-blue-600 rounded-lg hover:bg-gray-300">
              Next
              <span className="ml-5 flex">
              <img
                  src="/assets/icons/quiz/next.svg"
                  alt="metamast"
                  className="h-5 w-5"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
