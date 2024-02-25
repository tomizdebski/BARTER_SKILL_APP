import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex flex-col flex-center h-80 justify-between bg-gray-500">
      <Link className=" pt-5 text-center" href="https://tizdebski.pl">©2023 tizdebski.pl All rights reserved.</Link>
      <div className="flex flex-center gap-4 p-10">
        <Image src="/assets/icons/facebook.png" width={20} height={20} className="opacity-80" alt="Facebook" />
        <Image src="/assets/icons/twitter.png" width={20} height={20} className="opacity-80" alt="Twitter" />
        <Image src="/assets/icons/instagram.png" width={20} height={20} className="opacity-80" alt="Instagram" />
        <Image src="/assets/icons/youtube.png" width={20} height={20} className="opacity-80" alt="Youtube" />
      </div>
    </div>
  );
};

export default Footer;