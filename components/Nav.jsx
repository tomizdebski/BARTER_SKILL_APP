"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserContext } from "./UserContext";
import Search from "./Search";




const Nav = () => {
  //const [isUserLoggedIn, setIsloggedIn] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [searching, setSearching] = useState(false);
  const router = useRouter();
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log("toggle", toggleDropdown);
  console.log(userInfo);
  const URL_API = "http://localhost:4000/";

  const searchingHandler = () => {
    setSearching((prev) => !prev);
    console.log("searching", searching);
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
          <div className="dropdown">
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
        <div className="flex gap-3 md:gap-5">
          

          <Search/>
         
          

          <Link href="/basket">
            <Image
              src="/assets/icons/basket.svg"
              width={37}
              height={37}
              alt="Basket"
            />
          </Link>

          {userInfo && (
            <Link href="/create-lesson" className="outline_btn">
              Dodaj Lekcję
            </Link>
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
        ) : (
          <button
            type="button"
            onClick={() => setUserInfo("")}
            className="outline_btn"
          >
            Wyloguj
          </button>
        )}
        <Link href="/profile">
          {userInfo && (
            <>
            <Image
              src={"http://localhost:4000/"+ userInfo.avatar}
              width={60}
              height={60}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover mr-4 shadow border border-sky-500"
            />
           
            {/* <div className=" relative bottom-3 left-6 bg-green-600 w-4 h-4 rounded-full border border-sky-500"></div> */}
            </>
          )}
        </Link>
        
      </div>
     
    </nav>
  );
};

export default Nav;
