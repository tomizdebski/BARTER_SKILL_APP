'use client'
import Image from "next/image";
import { useState } from "react";




const Search = () => {

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  console.log("input_search", input);



  return (
    <div className="hidden gap-2  border-px  lg:flex xl:flex">
          <input
            type="text"
            placeholder="Wpisz czego szukasz..."
            className="search_input hover:scale-105"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <Image
          src="/assets/icons/search.svg"
          width={44}
          height={44}
          alt="menu"
          className=" hover:bg-gray-300 hover:text-white rounded-lg hover:scale-125"
          onClick={()=> setQuery()}
        />
        </div>
  )
}

export default Search