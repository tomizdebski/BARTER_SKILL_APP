"use client";
import Feed from "@components/Feed";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { LessonsContext } from "@components/LessonsContext";
import { DialogLesson } from "@components/DialogLesson";
import { Tooltip } from "@material-tailwind/react";
import { CardInstructors } from "@components/Instructors";

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
    

    const result = baseLesson.filter(
      (el) => el.category.name === e.target.value
    );

    setLesson(result);
  };

  return (
    <section className="w-full flex-center flex-col bg-gray-100">
      <div className="head_text text-center p-5 ">
        <span className="blue_gradient">
          Odkrywaj i wymieniaj się umiejętniościami
        </span>

        <br className="max-md:hidden" />
        <span className="green_gradient text-center">
          Czy umiesz coś czego nie umię ktoś inny?
        </span>
        <CardInstructors/>
      </div>
      <div className="flex w-full  justify-between gap-3 p-3 flex-wrap ">
        {categories.map((el) => (
          <Tooltip
            content={
             "Kategoria - doubleclick cofa filtrowanie"
            }
            placement="top-end"
            className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
            key={el.id}
          >
            <button
              key={el.id + el.name}
              type="button"
              className="outline_btn bg-deep-orange-900 mt-5"
              value={el.name}
              onClick={handleClickCategory}
              onDoubleClick={() => setLesson(baseLesson)}
            >
              {el.name}
            </button>
          </Tooltip>
        ))}
      </div>

      <div className="flex gap-10 flex-wrap mb-10 mt-10 justify-around">
        {lesson.map((el) => (
          <DialogLesson key={el.id} lesson={el} />
        ))}
      </div>
    </section>
  );
};

export default Home;
