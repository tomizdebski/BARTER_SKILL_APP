"use client";
import { useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { LessonBasketContext } from "@components/LessonBasketContext";
import { UserContext } from "@components/UserContext";
import { LessonsContext } from "@components/LessonsContext";
import { Tooltip } from "@material-tailwind/react";

const MySkills = () => {
  const { basket, setBasket } = useContext(LessonBasketContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { lessons, setLessons } = useContext(LessonsContext);
  
  
  return (
    <div className=" bg-gray-100 pt-20 w-full">
      <h1 className="head_text text-center p-5 blue_gradient">
        Moje umiejętności
      </h1>
      <div className="h-[60vh]">

      </div>
      
    </div>
  );
};

export default MySkills;
