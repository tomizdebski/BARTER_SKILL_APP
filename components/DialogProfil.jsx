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
  Tooltip,
} from "@material-tailwind/react";
import { UserContext } from "./UserContext";
import { useRouter } from "next/navigation";
import Search from "./Search";

export function DialogProfil() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  console.log(userInfo);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      {userInfo ? (
        <Image
          src={process.env.NEXT_PUBLIC_URL_API + "/" + userInfo?.avatar}
          width={60}
          height={60}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover  shadow-xxl border border-primary-gray hover:scale-125"
          onClick={handleOpen}
        />
      ) : (
        <Image
          src={"/assets/icons/menu.svg"}
          width={60}
          height={60}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover mr-4  hover:scale-125"
          onClick={handleOpen}
        />
      )}

      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between font-saira">
          {userInfo && (
            <Image
              src={process.env.NEXT_PUBLIC_URL_API + "/" + userInfo?.avatar}
              width={60}
              height={60}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover  shadow  "
              onClick={handleOpen}
            />
          )}

          {!userInfo ? (
            <Typography variant="h6" color="blue-gray" className="font-saira">
              Jesteś nie zalogowany !!!
            </Typography>
          ) : (
            <Typography variant="h6" color="blue-gray" className="font-saira">
              {userInfo?.firstName + " " + userInfo?.lastName}
            </Typography>
          )}

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

        {userInfo ? (
          <DialogBody className="overflow-y-scroll pr-2">
            <div className="mb-6">
              <Typography
                variant="small"
                color="gray"
                className="font-semibold font-saira opacity-70"
              >
                Mój profil
              </Typography>

              <ul className="mt-1 -ml-2 flex flex-col gap-1">

              <MenuItem className="flex items-center gap-3">
                  <img
                    src="/assets/icons/add.svg"
                    alt="metamast"
                    className="h-6 w-6"
                  />
                  <Link href="/create-lesson" onClick={handleOpen}>
                    <Typography color="blue-gray" variant="h6" className="font-saira">
                      Dodaj lekcję
                    </Typography>
                  </Link>
                </MenuItem>

                <MenuItem className="flex items-center gap-3">
                  <img
                    src="/assets/icons/barter_3.svg"
                    alt="metamast"
                    className="h-6 w-6"
                  />
                  <Link href="/my-barters" onClick={handleOpen}>
                    <Typography color="blue-gray" variant="h6" className="font-saira">
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
                    <Typography color="blue-gray" variant="h6" className="font-saira">
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
                    <Typography color="blue-gray" variant="h6" className="font-saira">
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
                  <Link href="/quiz/" onClick={handleOpen}>
                    <Typography color="blue-gray" variant="h6" className="font-saira">
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
                className="font-semibold opacity-70 font-saira"
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
                  <Typography color="blue-gray" variant="h6" className="font-saira">
                    Powiadomienia
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <img
                    src="/assets/icons/settings.svg"
                    alt="metamast"
                    className="h-7 w-7 rounded-md border border-blue-gray-50"
                  />
                  <Typography color="blue-gray" variant="h6" className="font-saira">
                    Ustawienia
                  </Typography>
                </MenuItem>
              </ul>
            </div>
          </DialogBody>
        ) : (
          <DialogBody className="overflow-y-scroll pr-2">
            <div className="mb-6">
              <ul className="mt-1 -ml-2 flex flex-col gap-1">
                <MenuItem className="flex items-center gap-3">
                  <img
                    src="/assets/icons/quiz.svg"
                    alt="metamast"
                    className="h-6 w-6 rounded-md"
                  />
                  <Link href="/quiz/" onClick={handleOpen}>
                    <Typography color="blue-gray" variant="h6" className="font-saira">
                      Przetestuj się - Quiz
                    </Typography>
                  </Link>
                  
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <Search />
                </MenuItem>

              </ul>
            </div>

            {userInfo && (
              <div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-semibold opacity-70 font-saira"
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
                    <Typography color="blue-gray" variant="h6" className="font-saira">
                      Powiadomienia
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-3">
                    <img
                      src="/assets/icons/settings.svg"
                      alt="metamast"
                      className="h-7 w-7 rounded-md border border-blue-gray-50"
                    />
                    <Typography color="blue-gray" variant="h6" className="font-saira">
                      Ustawienia
                    </Typography>
                  </MenuItem>
                </ul>
              </div>
            )}
          </DialogBody>
        )}

        <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
          {userInfo && (
            <button
              size="sm"
              className="outline_btn"
              onClick={() => {
                setUserInfo(false);
                window.localStorage.clear();
              }}
            >
              Wyloguj
            </button>
          )}
          {!userInfo && (<>
          <button
            size="sm"
            className="primary_btn"
            onClick={() => {
              router.push(`/auth/login`);
              handleOpen();
            }}
          >
            Zaloguj
          </button>
          <button
            size="sm"
            className="outline_btn"
            onClick={() => {
              router.push(`/auth/register`);
              handleOpen();
            }}
          >
            Zarejestruj
          </button>
          </>)}

        </DialogFooter>
      </Dialog>
    </>
  );
}
