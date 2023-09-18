'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useContext } from 'react';
import { LessonsContext } from "@components/LessonsContext";



const Search = () => {

  const searchParams = useSearchParams()
  const { lessons, setLessons } = useContext(LessonsContext);
 
  const search = searchParams.get('q');




  return (
    <div className='h-[80vh]'>Search param q {search}</div>
  )
}

export default Search