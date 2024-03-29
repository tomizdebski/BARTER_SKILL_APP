import { useContext, useState } from "react";
import { LessonBasketContext } from "@components/LessonBasketContext";
import { UserContext } from "./UserContext";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";

export function DialogLesson({ lesson }) {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  const { basket, setBasket } = useContext(LessonBasketContext);
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <>
      <Card
        className="w-full  md:w-[370px] cursor-pointer overflow-hidden shadow-xl  border-gray-600 transition-opacity hover:opacity-90 bg-gray-400 hover:border-2"
        onClick={handleOpen}
      >
        <img
          alt="photo"
          className="h-48 w-auto object-cover object-center"
          src={process.env.NEXT_PUBLIC_URL_API + "/" + lesson.photo}
        />
        <h4 className="text-l font-semibold text-gray-900 mt-1 text-center font-saira ">
          {lesson.name}{" "}
        </h4>
        <small className="text-sm text-gray-700 text-center mb-1 font-saira">
          {" "}
          {lesson.instructor.firstName}
        </small>
      </Card>
      <Dialog size="md" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt="avatar"
              src={
                process.env.NEXT_PUBLIC_URL_API + "/" + lesson.instructor.avatar
              }
            />
            <div className="mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium font-saira"
              >
                {lesson.instructor.firstName + " " + lesson.instructor.lastName}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal font-saira"
              >
                {lesson.category.name}
              </Typography>
            </div>
          </div>
          <div></div>
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              size="sm"
              color={isFavorite ? "red" : "blue-gray"}
              onClick={handleIsFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
          </div>
        </DialogHeader>
        <DialogBody className="p-0">
          <img
            alt="photo"
            className="h-[20rem] w-full object-cover object-center"
            src={process.env.NEXT_PUBLIC_URL_API + "/" + lesson.photo}
          />
          <div className="flex flex-col flex-center gap-2 pt-2">
            <Typography
              variant="h4"
              color="blue-gray"
              className="font-medium font-saira"
            >
              {lesson.name}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium font-saira" 
            >
              {lesson.content}
            </Typography>
          </div>
        </DialogBody>
        <DialogFooter className="justify-center">
          <div className="flex items-center">
            <div>
              {/* <Typography variant="small" color="gray" className="font-normal">
                Liczba lekcji
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                44
              </Typography> */}
            </div>
            <div>
              {/* <Typography variant="small" color="gray" className="font-normal">
                Oceny
              </Typography> */}
              {/* <Typography color="blue-gray" className="font-medium">
                &#10031; &#10031; &#10031;
              </Typography> */}
            </div>
          </div>

          {userInfo && (
            <button
              
              className="outline_btn gap-2"
              onClick={() => {
                setBasket((prev) => [...prev, lesson]);
                setOpen(false);
              }}
            >
              <Image
                src="/assets/icons/basket.svg"
                width={20}
                height={20}
                alt="Basket"
              />
              Dodaj do koszyka
            </button>
          )}
          {/* <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                clipRule="evenodd"
              />
            </svg>
            Udostępnij
          </Button> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}
