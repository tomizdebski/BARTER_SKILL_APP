"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserContext } from "./UserContext";
import { LessonBasketContext } from "@components/LessonBasketContext";
import { DialogProfil } from "./DialogProfil";

import Search from "./Search";
import { Tooltip } from "@material-tailwind/react";

const Nav = () => {
  //const [isUserLoggedIn, setIsloggedIn] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [searching, setSearching] = useState(false);
  const router = useRouter();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { basket, setBasket } = useContext(LessonBasketContext);

  const URL_API = process.env.NEXT_PUBLIC_URL_API + "/";

  useEffect(() => {
    setUserInfo(JSON.parse(window.sessionStorage.getItem("user")));
  }, []);

  const searchingHandler = () => {
    setSearching((prev) => !prev);
  };

  return (
    <nav className="flex-between w-full pt-3 glassmorphism">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={200}
          height={25}
          alt="Barter Logo"
          className="object-contain"
        />
      </Link>
      <Search />

      {/* Menu */}
      <div className="sm:flex md:hidden lg:hidden xl:hidden">
        <Search />
        <DialogProfil />

        {/* <Image
          src="/assets/icons/menu.svg"
          width={37}
          height={37}
          alt="menu"
          className=""
          onClick={() => setToggleDropdown(!toggleDropdown)}
        /> */}

        {toggleDropdown && <DialogProfil />}
      </div>

      {/* desktop navigation */}
      <div className="md:flex hidden gap-3 ">
        <div className="flex gap-3 md:gap-5 items-center">
          <Tooltip
            content={<p>Sprawdź się w quiz</p>}
            placement="top-end"
            className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
          >
            <Link
              href="/quiz/"
              className=" hover:bg-gray-300 hover:text-white rounded-lg hover:scale-125 animate-pulse"
            >
              <Image
                src="/assets/icons/quiz1.svg"
                width={30}
                height={30}
                alt="Basket"
              />
            </Link>
          </Tooltip>

          <Tooltip
            content={
              basket.length > 0 ? (
                <ul>
                  W koszyku są:
                  {basket.map((el, index) => (
                    <li>{index + 1 + ". " + el.name}</li>
                  ))}
                </ul>
              ) : (
                <p>Koszyk jest pusty</p>
              )
            }
            placement="top-end"
            className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
          >
            <Link
              href="/basket"
              className=" hover:bg-gray-300 hover:text-white rounded-lg hover:scale-110"
            >
              <Image
                src="/assets/icons/basket.svg"
                width={37}
                height={37}
                alt="Basket"
              />
            </Link>
          </Tooltip>

          {userInfo && (
            <Tooltip
              content={<p>Moje bartery</p>}
              placement="top-end"
              className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
            >
              <Link
                href="/my-barters"
                className=" hover:bg-gray-300 hover:text-white rounded-lg hover:scale-125"
              >
                <Image
                  src="/assets/icons/barter_3.svg"
                  width={30}
                  height={30}
                  alt="Bartert"
                />
              </Link>
            </Tooltip>
          )}

          {userInfo && (
            <Tooltip
              content={<p>Moje umiejętności</p>}
              placement="top-end"
              className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
            >
              <Link
                href="/user-skills"
                className=" hover:bg-gray-300 hover:text-white rounded-lg hover:scale-125"
              >
                <Image
                  src="/assets/icons/skill.svg"
                  width={30}
                  height={30}
                  alt="Basket"
                />
              </Link>
            </Tooltip>
          )}

          {userInfo && (
            <Tooltip
              content={<p>Dodaj lekcję</p>}
              placement="top-end"
              className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
            >
              <Link
                href="/create-lesson"
                className=" hover:bg-gray-300 hover:text-white rounded-lg hover:scale-125"
              >
                <Image
                  src="/assets/icons/add.svg"
                  width={30}
                  height={30}
                  alt="Basket"
                />
              </Link>
            </Tooltip>
          )}
        </div>

        {!userInfo ? (
          <>
            <button
              type="button"
              onClick={() => router.push(`/auth/register`)}
              className="outline_btn"
            >
              Zarejestruj
            </button>
            <button
              type="button"
              onClick={() => router.push(`/auth/login`)}
              className="primary_btn"
            >
              Zaloguj
            </button>
          </>
        ) : null}

        {userInfo && (
          <>
            <DialogProfil />

            {/* <div className=" relative bottom-3 left-6 bg-green-600 w-4 h-4 rounded-full border border-sky-500"></div> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
