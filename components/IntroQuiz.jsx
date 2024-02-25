"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import shortid from "shortid";


const IntroQuiz = ({onGoClick, onThemeSet}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_URL_API + "/api/categories")
      .then((response) => setCategories(response.data));
  }, []);
  
  console.log(categories)
  
 

  

  return (
    <div className=" bg-white min-h-screen flex-col items-center py-5 px-10 justify-center shadow-xl">
      {!categories && (<Image
              src={"assets/icons/loader.svg"}
              width={50}
              height={50}
              alt="Instructor"
              className="w-20 h-20 rounded-full object-cover mr-4 shadow border-2 border-gray-700"
            />)}
     
      <h2 className="text-3xl font-bold mb-5 text-center gray_gradient head_text">
        Witaj w quiz
      </h2>
      <p className="font-medium text-xl leading-7 text-center green_gradient">
        Wybierz temat i przetestuj się.
      </p>
      <div className="flex flex-wrap justify-center mt-10 mb-12 gap-4">
        {categories.map((el) => (
          <div
          key={shortid.generate()}
          className="outline_btn"
            value={el.name}
            onClick={()=> {
              onThemeSet(el.name)
              onGoClick()
            }}
          >

            <span className=" text-lg font-semibold ml-2">{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroQuiz;
