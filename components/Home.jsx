"use client";
import Feed from "@components/Feed";
import axios from "axios";
import { useEffect, useState } from "react";
import { formatISO9075 } from "date-fns";
import { RatingWithText } from "@components/Rating";
import { DialogWithImage } from "@components/DialogLesson";

const Home = ({ category, lesson }) => {
  const [lessons, setLessons] = useState([]);
  const [baseLesson, setBaseLesson] = useState([]);
  const [categories, setCategories] = useState([]);

  console.log(baseLesson);
  useEffect(() => {
    setCategories(category);
    setLessons(lesson);
    setBaseLesson(lesson);
  }, []);

  const handleClickCategory = (e) => {
    

    const result = baseLesson.filter(
      (el) => el.category.name === e.target.value
    );

    setLessons(result);
  };

  return (
    <section className="w-full flex-center flex-col z-0">
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
        ))}
      </div>

      <div className="flex gap-10 flex-wrap mb-10 mt-10 justify-around">
        {lessons.map((el) => (
          <DialogWithImage key={el.id} lesson={el} />
        ))}
      </div>
    </section>
  );
};

export default Home;
