'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { useRouter } from "next/navigation";

const Nav = () => {
  const [isUserLoggedIn, setIsloggedIn] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();
  console.log(toggleDropdown);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
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
      <div className='sm:flex md:hidden lg:hidden xl:hidden'>
        
        <Image 
          src="/assets/icons/menu.svg" 
          width={37} 
          height={37}
          alt="menu"
          className=''
          onClick={() => setToggleDropdown(!toggleDropdown)}
      />

      {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mój profil
                </Link>
                <Link
                  href='/create-lesson'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Dodaj lekcję
                </Link>
                <Link
                  href='/search'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Szukaj
                </Link>
                {isUserLoggedIn && (
                  <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    setIsloggedIn(false);
                  }}
                  className='mt-5 w-full black_btn'
                  >
                    Wyloguj
                  </button>
                )}

                {!isUserLoggedIn && (
                  <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    router.push(`/auth/login`);
                    setIsloggedIn(true);
                  }}
                  className='mt-5 w-full black_btn'
                  >
                    Zaloguj
                  </button>
                )}  

                

              </div>
            )}
      </div>
      


      {/* desktop navigation */}
      <div className="sm:flex hidden gap-3">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link 
              href="/create-lesson"
              className="outline_btn">
              Dodaj Lekcję
            </Link>
            {/* <button type="button" onClick={signOut} className="outline_btn">
              Wyloguj
            </button> */}
          </div>
        ):(
          <div></div>
        )}
            <Link href="/search">
              <Image 
                src="/assets/icons/search.svg" 
                width={37} 
                height={37}
                alt="Search"
                
              />
            </Link>

            <Link href="/profile">
              <Image 
                src="/assets/icons/user.svg" 
                width={37} 
                height={37}
                alt="Profile"
                
              />
            </Link>
            <Link href="/basket">
              <Image 
                src="/assets/icons/basket.svg" 
                width={37} 
                height={37}
                alt="Basket"
                
              />
            </Link>
      </div>



    </nav>
  )
}

export default Nav