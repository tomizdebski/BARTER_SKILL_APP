import Image from "next/image";



const Search = () => {
  return (
    <div className="relative flex w-full gap-2 md:w-max border-px ">
          <input
            type="text"
            placeholder="Wpisz czego szukasz..."
            className="rounded-full border-solid border-2  border-green-600 pl-3 pr-3 poi"
            
          />
          <Image
          src="/assets/icons/search.svg"
          width={37}
          height={37}
          alt="menu"
          className=" hover:bg-blue-100 hover:text-white rounded-lg"
          onClick={null}
        />
        </div>
  )
}

export default Search