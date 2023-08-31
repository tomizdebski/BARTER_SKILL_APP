'use client'

import {createContext, useState} from "react";

export const LessonBasketContext = createContext({});

export function LessonBasketContextProvider({children}) {
  const [basket,setBasket] = useState([]);
  return (
    <LessonBasketContext.Provider value={{basket,setBasket}}>
      {children}
    </LessonBasketContext.Provider>
  );
}
