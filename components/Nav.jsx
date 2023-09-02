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

  const URL_API = "http://localhost:4000/";

  const searchingHandler = () => {
    setSearching((prev) => !prev);
  };

  return (
    <nav className="flex-between w-full pt-3 glassmorphism">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo-barter.png"
          width={80}
          height={80}
          alt="Barter Logo"
          className="object-contain"
        />
      </Link>

      {/* Menu */}
      <div className="sm:flex md:hidden lg:hidden xl:hidden">
        <Image
          src="/assets/icons/menu.svg"
          width={37}
          height={37}
          alt="menu"
          className=""
          onClick={() => setToggleDropdown(!toggleDropdown)}
        />

        {toggleDropdown && (
          <div className="dropdown z-50">
            <Link
              href="/profile"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Mój profil
            </Link>
            <Link
              href="/create-lesson"
              className="dropdown_link"
              onClick={() => {
                if (!userInfo) router.push(`/auth/login`);
                setToggleDropdown(false);
              }}
            >
              Dodaj lekcję
            </Link>

            <Link
              href="/search"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Szukaj
            </Link>

            {userInfo && (
              <button
                type="button"
                onClick={() => {
                  setUserInfo("");
                  setToggleDropdown(false);
                }}
                className="mt-5 w-full black_btn"
              >
                Wyloguj
              </button>
            )}

            {!userInfo && (
              <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  router.push(`/auth/login`);
                }}
                className="mt-5 w-full black_btn"
              >
                Zaloguj
              </button>
            )}
          </div>
        )}
      </div>

      {/* desktop navigation */}
      <div className="md:flex hidden gap-3 ">
        <div className="flex gap-3 md:gap-5 ">
          <Search />

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
              className=" hover:bg-blue-100 hover:text-white rounded-lg"
            >
              <Image
                src="/assets/icons/basket.svg"
                width={37}
                height={37}
                alt="Basket"
              />
            </Link>
          </Tooltip>

          <Tooltip
            content={<p>Moje bartery</p>}
            placement="top-end"
            className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
          >
            <Link
              href="/my-barters"
              className=" hover:bg-blue-100 hover:text-white rounded-lg"
            >
              <Image
                src="/assets/icons/barter_3.svg"
                width={30}
                height={30}
                alt="Basket"
              />
            </Link>
          </Tooltip>

          {userInfo && (
            <Tooltip
              content={<p>Dodaj lekcję</p>}
              placement="top-end"
              className="text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
            >
              <Link
                href="/create-lesson"
                className=" hover:bg-blue-100 hover:text-white rounded-lg"
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
          <button
            type="button"
            onClick={() => router.push(`/auth/login`)}
            className="outline_btn"
          >
            Zaloguj
          </button>
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
