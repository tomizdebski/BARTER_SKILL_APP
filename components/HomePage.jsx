import { DialogLesson } from "@components/DialogLesson";
import { Tooltip } from "@material-tailwind/react";
import shortid from "shortid";
import CategoryBtn from "@components/CategoryBtn";


const HomePage = () => {
    
    return (
        <section className="w-full flex-center flex-col bg-gray-100">
    
          <div className="bg-[url('/assets/icons/quiz/doodles.svg')] head_text text-center  shadow-2xl pb-10 pt-10">
            <span className="gray_gradient font-andika">
              Odkrywaj i wymieniaj się umiejętniościami
            </span>
    
            <br className="max-md:hidden" />
            <span className="green_gradient text-center desc font-andika">
              Czy umiesz coś czego nie umie ktoś inny?
            </span>
            
            
          </div>
          <div className="flex w-full gap-1 justify-around  p-3 flex-wrap ">
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
          </div>
    
          <div className="flex gap-4 flex-wrap mb-10 mt-10 justify-center">
    
            {lesson.map((el) => (
              <DialogLesson key={shortid.generate()} lesson={el} />
            ))}
          </div>
        </section>
      );
}

export default HomePage