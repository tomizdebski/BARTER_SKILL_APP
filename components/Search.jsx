'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push("/search?q=" + input);
    }
  };

  return (
    <div className="flex gap-2  border-px">
      <div className="relative flex gap-2">
        <input
          type="text"
          placeholder="Wpisz czego szukasz..."
          className="search_input "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Dodaj obsługę zdarzenia onKeyDown
        />
        <Image
          src="/assets/icons/search.svg"
          width={20}
          height={20}
          alt="menu"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer hover:opacity-70"
          onClick={() => router.push("/search?q=" + input)}
        />
      </div>
    </div>
  );
};

export default Search;
