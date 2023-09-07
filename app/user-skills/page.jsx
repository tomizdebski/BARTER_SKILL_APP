"use client";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { UserContext } from "@components/UserContext";
import shortid from "shortid";
import { Rating } from "@material-tailwind/react";

const MySkills = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [skills, setSkills] = useState([]);
  console.log(skills);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/skills/" + userInfo.id)
      .then((response) => setSkills(response.data));
  }, []);

  return (
    <div className=" bg-gray-100 pt-20 w-full">
      <h1 className="head_text text-center p-5 blue_gradient">
        Moje umiejętności
      </h1>
      <div className="h-[60vh]">
        <div className="rounded md:w-full">
          <div className="mt-5 mb-5  bg-blue-gray-200  pt-10 pb-5 pr-10 pl-10 rounded shadow-2xl shadow-black  opacity-80">
            <Image
              src={"http://localhost:4000/" + userInfo.avatar}
              width={80}
              height={80}
              alt="Avatar"
              className="h-12 w-12 rounded object-cover mr-4 shadow border border-sky-500"
            />
            {skills.map((el) => (
              <div className="justify-between mb-6 rounded p-6 shadow-md sm:flex sm:justify-start bg-gradient-to-r from-green-200 to-white shadow-2xl shadow-black">
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {el.skill.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      {el.skill.level}
                    </p>
                    <Rating value={5} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
