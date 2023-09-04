"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
  Tooltip
} from "@material-tailwind/react";
import { UserContext } from "./UserContext";
import { useRouter } from "next/navigation";

export function DialogProfil() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  console.log(userInfo);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Image
        src={"http://localhost:4000/" + userInfo.avatar}
        width={60}
        height={60}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover mr-4 shadow border border-sky-500"
        onClick={handleOpen}
      />

      <Dialog size="xs" open={open} handler={handleOpen} >
        <DialogHeader className="justify-between">
          
          
          <Image
            src={"http://localhost:4000/" + userInfo.avatar}
            width={60}
            height={60}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover  shadow  p-1"
            onClick={handleOpen}
          />

          <Typography variant="h6" color="blue-gray">
            {userInfo.firstName + " " + userInfo.lastName}
          </Typography>
          

          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>

        <DialogBody className="overflow-y-scroll pr-2">
          <div className="mb-6">
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              Mój profil
            </Typography>

            <ul className="mt-1 -ml-2 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/assets/icons/barter_3.svg"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Link href="/my-barters" onClick={handleOpen}>
                  <Typography color="blue-gray" variant="h6">
                    Moje bartery
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem className="flex items-center gap-3">
                <img
                  src="/assets/icons/basket.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Link href="/basket" onClick={handleOpen}>
                  <Typography color="blue-gray" variant="h6">
                    Mój koszyk
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem className="flex items-center gap-3">
                <img
                  src="/assets/icons/skill.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Link href="/user-skills" onClick={handleOpen}>
                  <Typography color="blue-gray" variant="h6">
                    Umiejętności
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem className="flex items-center gap-3">
                <img
                  src="/assets/icons/quiz.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Link href="/quiz" onClick={handleOpen}>
                  <Typography color="blue-gray" variant="h6">
                    Przetestuj się - Quiz
                  </Typography>
                </Link>
              </MenuItem>
              
            </ul>

          </div>

          <div>
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              Więcej
            </Typography>
            <ul className="mt-1 -ml-2.5 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/assets/icons/message.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Powiadomienia
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/assets/icons/settings.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Ustawienia
                </Typography>
              </MenuItem>
            </ul>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
          <button size="sm" className="outline_btn" onClick={()=> setUserInfo(false)}>
            Wyloguj
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}