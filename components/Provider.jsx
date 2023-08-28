'use client'
import {ThemeProvider } from "@material-tailwind/react";

const Provider = ({children}) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
    
  )
}

export default Provider