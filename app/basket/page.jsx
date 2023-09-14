"use client";
import { useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { LessonBasketContext } from "@components/LessonBasketContext";
import { UserContext } from "@components/UserContext";
import { Tooltip } from "@material-tailwind/react";

const Basket = () => {
  const { basket, setBasket } = useContext(LessonBasketContext);
  const { userInfo, setUserInfo } = useContext(UserContext);


  // const handleSave = () => {
  //   axios
  //   .patch(`http://localhost:4000/api/lesson/${}`)
  // }

  return (
    <div className="h-screen bg-gray-100 pt-20 w-full">
      <h1 className="head_text text-center p-5 blue_gradient">Koszyk</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {basket.map((el) => (
            <div key={el.id} className="justify-between mb-6 rounded-full p-6 shadow-md sm:flex sm:justify-start bg-gradient-to-r from-green-200 to-white">
              <Tooltip
                content={"Instruktor " + el.instructor.firstName + " " + el.instructor.lastName}
                placement="top-end"
                className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_URL_API + "/" + el.instructor.avatar}
                  width={80}
                  height={80}
                  alt="Avatar"
                  className="h-12 w-12 rounded-full object-cover mr-4 shadow border border-sky-500"
                />
              </Tooltip>
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{el.name}</h2>
                  <p className="mt-1 text-xs text-gray-700">{el.content}</p>
                  <p className="text-sm">{el.instructor.firstName}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex  space-x-4 ">
                    <Tooltip
                      content="Dopisanie do listy studentów"
                      placement="top-end"
                      className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
                    >
                      <button className="outline_btn bg-deep-orange-900 mt-5" onClick={()=>{
                        console.log('patch--', el.id, userInfo.id)
                        console.log(el)
                        axios.patch(process.env.NEXT_PUBLIC_URL_API + `/api/lesson/${el.id}`, {"studentId": userInfo.id})
            
                      }}>
                        Zapisz
                      </button>
                    </Tooltip>

                    <Tooltip
                      content="Usuń z koszyka"
                      placement="top-end"
                      className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 "
                        onClick={() => {
                          const delItems = basket.filter(
                            (item) => item.id !== el.id
                          );
                          setBasket(delItems);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
