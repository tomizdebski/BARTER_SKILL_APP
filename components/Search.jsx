import Image from "next/image";



const Search = () => {
  return (
    <div className="relative flex w-full gap-2 md:w-max border-px ">
          <input
            type="text"
            placeholder="Wpisz czego szukasz..."
            className="search_input"
            
          />
          <Image
          src="/assets/icons/search.svg"
          width={44}
          height={44}
          alt="menu"
          className=" hover:bg-blue-100 hover:text-white rounded-lg"
          onClick={null}
        />
        </div>
  )
}

export default Search