import Image from "next/image";

const Footer = () => {
  return (
    <div className=" flex flex-col flex-center h-40 justify-between bg-black">
      <div className="desc text-center">©2023 izdebski.dev. All rights reserved.</div>
      <div className="flex flex-center gap-4 p-10">
        <Image src="/assets/icons/facebook.png" width={20} height={20} className="opacity-80" alt="Facebook" />
        <Image src="/assets/icons/twitter.svg" width={40} height={40} className="opacity-80" alt="Twitter" />
        <Image src="/assets/icons/instagram.png" width={20} height={20} className="opacity-80" alt="Instagram" />
        <Image src="/assets/icons/youtube.png" width={20} height={20} className="opacity-80" alt="Youtube" />
      </div>
    </div>
  );
};

export default Footer;