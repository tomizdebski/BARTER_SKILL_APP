import { useContext, useState } from "react";
import { LessonBasketContext } from "@components/LessonBasketContext"
import { UserContext } from "./UserContext";
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

export function DialogWithImage({ lesson }) {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  const {basket, setBasket} = useContext(LessonBasketContext);
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <>
      <Card
        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          alt="photo"
          className="h-48 w-96 object-cover object-center"
          src={"http://localhost:4000/" + lesson.photo}
        />
        <h2 className="text-lg font-semibold text-gray-900 mt-1 text-center">
          {lesson.name}{" "}
        </h2>
        <small className="text-sm text-gray-700 text-center mb-1">
          {" "}
          {lesson.instructor.firstName}
        </small>
      </Card>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src={"http://localhost:4000/" + lesson.instructor.avatar}
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                {lesson.instructor.firstName + " " + lesson.instructor.lastName}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                {lesson.category.name}
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant="h1" color="blue-gray" className="font-medium">
              {lesson.name}
            </Typography>
          </div>
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
        <DialogBody divider={true} className="p-0">
          <div className="flex flex-center p-5">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {lesson.content}
            </Typography>
          </div>
          <img
            alt="photo"
            className="h-[48rem] w-full object-cover object-center"
            src={"http://localhost:4000/" + lesson.photo}
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Liczba lekcji
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                44
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Oceny
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                &#10031; &#10031; &#10031;
              </Typography>
            </div>
          </div>

          {userInfo && (<Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
            onClick={()=> {
              setBasket(prev => [...prev, lesson])
            }}
          >
            
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                stroke="currentColor"
                strokeWidth="1.5"
                strokmiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokmiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokmiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 8H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokmiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Dodaj do koszyka
          </Button>)}
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
            Share
          </Button> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}
