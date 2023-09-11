"use client";

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { LessonsContext } from "@components/LessonsContext";
import { DialogLesson } from "@components/DialogLesson";
import { Tooltip } from "@material-tailwind/react";
import { CardInstructors } from "@components/Instructors";
import shortid from "shortid";

///socket
// import socketIO from "socket.io-client"
// const socket = socketIO.connect("http://localhost:4000")
///socket

const Home = () => {
  const [lesson, setLesson] = useState([]);
  const { lessons, setLessons } = useContext(LessonsContext);
  const [baseLesson, setBaseLesson] = useState([]);
  const [categories, setCategories] = useState([]);

  

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((response) => setCategories(response.data));

    fetch("http://localhost:4000/api/lessons")
      .then((response) => response.json())
      .then((data) => {
        setLesson(data);
        setLessons(data);
        setBaseLesson(data);
       
      });
  }, []);

  const handleClickCategory = (e) => {
    
    if(baseLesson === lesson){
      const result = baseLesson.filter(
        (el) => el.category.name === e.target.value
      );
      setLesson(result);
    } else {setLesson(baseLesson)}
    };

    

  // const filterInstructor = (instructorId) => {
    
  //   const result = baseLesson.filter(
  //     (el) => el.instructorId === instructorId
  //   );

  //   setLesson(result);
  // };

  // const all = () => {
  //   setLesson(baseLesson);
  // };



  



  return (
    <section className="w-full flex-center flex-col bg-gray-100">

      <div className="bg-[url('/assets/icons/quiz/doodles.svg')] head_text text-center  shadow-2xl pb-10 pt-10 ">
        <span className="gray_gradient font-andika">
          Odkrywaj i wymieniaj się umiejętniościami
        </span>

        <br className="max-md:hidden" />
        <span className="green_gradient text-center desc font-andika">
          Czy umiesz coś czego nie umie ktoś inny?
        </span>
        
      </div>
      <div className="flex w-full gap-1 justify-center  p-3 flex-wrap ">
        {categories.map((el) => (
          <Tooltip
            content={
             "Kategoria - click cofa filtrowanie"
            }
            placement="top-end"
            className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
            key={shortid.generate()}
          >
            <button
              key={el.id + el.name}
              type="button"
              className=" gray_btn mt-5 shadow-2xl "
              value={el.name}
              onClick={handleClickCategory}
              onDoubleClick={() => setLesson(baseLesson)}
            >
              {el.name}
            </button>
          </Tooltip>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap mb-10 mt-10 justify-center">
        {lesson.map((el) => (
          <DialogLesson key={shortid.generate()} lesson={el} />
        ))}
      </div>
    </section>
  );
};

export default Home;
