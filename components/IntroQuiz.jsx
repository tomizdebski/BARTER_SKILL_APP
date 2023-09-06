"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";


const IntroQuiz = ({onGoClick}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((response) => setCategories(response.data));
  }, []);
  
  
 

  

  return (
    <div className=" bg-white min-h-screen flex-col items-center py-5 px-10 justify-center shadow-xl">
     
      <h2 className="text-3xl font-bold mb-5 text-center blue_gradient head_text">
        Witaj w quiz
      </h2>
      <p class="font-medium text-xl leading-7 text-center green_gradient">
        Wybierz temat i przetestuj się.
      </p>
      <div className="flex flex-wrap justify-center mt-10 mb-12 gap-4">
        {categories.map((el) => (
          <div
            className="flex flex-wrap justify-center mt-10 mb-12 cursor-pointer border-2 border-green-200 rounded-xl p-3 hover:bg-blue-gray-100"
            value="React"
            onClick={onGoClick}
          >

            <span className=" text-lg font-semibold ml-2">{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroQuiz;
