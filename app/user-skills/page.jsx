"use client";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { UserContext } from "@components/UserContext";
import shortid from "shortid";
import { Background } from "victory";

const MySkills = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [skills, setSkills] = useState([]);
  console.log(skills);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_URL_API + "/api/skills/" + userInfo.id)
      .then((response) => {
        let res = response.data;
        let resp = res.filter(el => el.user.id === userInfo.id)
        const dataChart = resp.map((el) => ({
          name: el.skill.name,
          level: el.skill.level,
        }));
        setSkills(dataChart);
      });
  }, []);

  return (
    <div className=" bg-gray-100 pt-20 w-full min-h-[900px] font-saira">
      <h1 className="head_text text-center p-5 gray_gradient">
        Moje umiejętności
      </h1>
      <div className="">
        <div className="rounded-2xl md:w-full">
          <div className="mt-5 mb-5   pt-5 pb-5 pr-5 pl-5    opacity-80">
            <div className="justify-between mb-6 rounded-lg p-6  sm:flex sm:justify-start bg-gradient-to-r from-primary-blue to-white shadow-2xl shadow-black">
              <Image
                src={process.env.NEXT_PUBLIC_URL_API + "/" + userInfo.avatar}
                width={80}
                height={80}
                alt="Avatar"
                className="h-12 w-12 rounded-full object-cover mr-4 shadow border border-primary-gray"
              />
              <div>
                {skills.map((el) => (
                  <div key={shortid()} className="flex p-5">
                    <div className=" w-40 allign-center ml-5 mr-5 cursor-pointer bg-gray-200 border-2 border-gray-400 rounded-full p-3 hover:bg-blue-gray-100">
                      <span className=" text-lg font-semibold ml-2">
                        {el.name}
                      </span>
                    </div>
                  <div className="flex flex-center">
                    {Array(el.level).fill(
                      <Image
                        src="/assets/icons/star.svg"
                        width={10}
                        height={10}
                        alt="star"
                        className="h-8 w-8 rounded object-cover mr-1"
                      />
                    )}
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
