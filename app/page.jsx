"use client";
import Feed from "@components/Feed";
import axios from "axios";
import { useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { RatingWithText } from "@components/Rating";
import { DialogWithImage } from "@components/DialogImage";
import { Tooltip } from "@material-tailwind/react";

///socket
// import socketIO from "socket.io-client"
// const socket = socketIO.connect("http://localhost:4000")
///socket

const Home = () => {
  const [lesson, setLesson] = useState([]);
  const [baseLesson, setBaseLesson] = useState([]);
  const [categories, setCategories] = useState([]);

  console.log(baseLesson);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((response) => setCategories(response.data));

    fetch("http://localhost:4000/api/lessons")
      .then((response) => response.json())
      .then((data) => {
        setLesson(data);
        setBaseLesson(data);
      });
  }, []);

  const handleClickCategory = (e) => {
    console.log(e.target.value);
    console.log(lesson);

    const result = baseLesson.filter(
      (el) => el.category.name === e.target.value
    );

    setLesson(result);
  };

  return (
    <section className="w-full flex-center flex-col z-0 bg-gray-100">
      <div className="head_text text-center p-5 ">
        <span className="blue_gradient">
          Odkrywaj i wymieniaj się umiejętniościami
        </span>

        <br className="max-md:hidden" />
        <span className="green_gradient text-center">
          Czy umiesz coś czego nie umię ktoś inny?
        </span>
      </div>
      <div className="flex w-full  justify-between gap-3 p-3 flex-wrap ">
        {categories.map((el) => (
          <Tooltip
            content={
             "Kategoria - doubleclick cofa filtrowanie"
            }
            placement="top-end"
            className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
          >
            <button
              key={el.id}
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
          <DialogWithImage key={el.id} lesson={el} />
        ))}
      </div>
    </section>
  );
};

export default Home;
