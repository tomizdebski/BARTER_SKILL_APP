"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useContext } from "react";
import { LessonsContext } from "@components/LessonsContext";
import shortid from "shortid";
import { DialogLesson } from "@components/DialogLesson";

const Search = () => {
  const searchParams = useSearchParams();
  const { lessons, setLessons } = useContext(LessonsContext);

  const search = searchParams.get("q");

  const searchingLesson = lessons.filter(
    (el) =>
      el.name.toLowerCase().includes(search.toLowerCase()) ||
      el.content.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <section className="w-full flex-center flex-col min-h-[900px]">

      <div className="head_text pb-10 pt-10">
        <span className="gray_gradient font-saira font-bold">
          Wynik Wyszukiwania
        </span>
      </div>
      {/* <div className="flex w-full gap-1 justify-around  p-3 flex-wrap ">
        {categories.map((el) => (
          <Tooltip
            content={
             "Kategoria - click cofa filtrowanie"
            }
            placement="top-end"
            className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
            key={shortid.generate()}
          >
            <CategoryBtn setCat={handleClickCategory} value={el.name} />
            
          </Tooltip>
        ))}
      </div> */}

      <div className="flex gap-4 flex-wrap mb-10 mt-10 justify-center">

        {searchingLesson.map((el) => (
          <DialogLesson key={shortid.generate()} lesson={el} />
        ))}
      </div>
    </section>
  );
};

export default Search;
