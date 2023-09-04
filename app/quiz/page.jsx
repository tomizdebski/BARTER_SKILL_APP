"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Quiz = () => {
  const router = useRouter();

  const quizName = [
    "React",
    "JS",
    "Python",
    "Gatsby",
    "Angular",
    "Django",
    "CSS",
    "Kotlin",
    "Laravel",
  ];

  const handleClick = (e) => {
    router.push(`/quiz/test/`)
  };

  return (
    <div className="bg-white min-h-screen flex-col items-center py-5 px-10 justify-center shadow-xl">
      <h2 className="text-3xl font-bold mb-5 text-center blue_gradient head_text">
        Witaj w quiz
      </h2>
      <p class="font-medium text-xl leading-7 text-center green_gradient">
        Wybierz temat i przetestuj się.
      </p>
      <div className="flex flex-wrap justify-center mt-10 mb-12 gap-4">
        {quizName.map((el) => (
          <div
            className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3 hover:bg-blue-gray-100"
            value="React"
            onClick={handleClick}
          >
            <Image
              src={`/assets/icons/quiz/${el.toLowerCase()}.svg`}
              width={10}
              height={10}
              alt="Instructor"
              className="w-12 h-12 rounded-full  mr-4 "
            />
            <span className="sc-kMjNwy text-lg font-semibold ml-2">{el}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
