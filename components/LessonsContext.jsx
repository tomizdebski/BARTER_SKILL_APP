'use client'

import {createContext, useState} from "react";

export const LessonsContext = createContext({});

export function LessonsContextProvider({children}) {
  const [lessons,setLessons] = useState([]);
  return (
    <LessonsContext.Provider value={{lessons,setLessons}}>
      {children}
    </LessonsContext.Provider>
  );
}
