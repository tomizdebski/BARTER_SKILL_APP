"use client";
import { useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { LessonBasketContext } from "@components/LessonBasketContext";
import { UserContext } from "@components/UserContext";
import { LessonsContext } from "@components/LessonsContext";
import { Tooltip } from "@material-tailwind/react";

const Quiz = () => {
  const { basket, setBasket } = useContext(LessonBasketContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { lessons, setLessons } = useContext(LessonsContext);

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
              <span className="sc-jrcTuL iwrhaC">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.87178 9.51297C6.8998 9.29313 6.8998 9.07068 6.87178 8.85084C6.82715 8.50072 6.65947 8.10978 6.17068 7.50115C5.6675 6.87459 4.92386 6.13514 3.83978 5.06068L1.1686 2.41324C0.72285 1.97144 0.71964 1.25195 1.16143 0.806192C1.60323 0.360437 2.32273 0.357229 2.76848 0.799023L5.48779 3.49417C6.51199 4.50923 7.34907 5.33885 7.94271 6.07805C8.56003 6.84672 9.0069 7.62694 9.12627 8.56348C9.17861 8.97412 9.17861 9.38969 9.12627 9.80033C9.0069 10.7369 8.56003 11.5171 7.94271 12.2858C7.34906 13.025 6.51198 13.8546 5.48777 14.8697L2.76848 17.5648C2.32273 18.0066 1.60323 18.0034 1.16143 17.5576C0.71964 17.1119 0.72285 16.3924 1.1686 15.9506L3.83977 13.3031C4.92386 12.2287 5.6675 11.4892 6.17068 10.8627C6.65947 10.254 6.82715 9.86309 6.87178 9.51297Z"
                    fill="#9fa3a9"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
