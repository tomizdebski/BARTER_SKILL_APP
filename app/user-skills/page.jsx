"use client";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { UserContext } from "@components/UserContext";


const MySkills = () => {
  
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [skills, setSkills] = useState([]);
  console.log(skills)
  
  

  useEffect(() => {
    axios
    .get("http://localhost:4000/api/skills/" + userInfo.id)
    .then((response) => setSkills(response.data));
    
    
  }, [])
  
  
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
