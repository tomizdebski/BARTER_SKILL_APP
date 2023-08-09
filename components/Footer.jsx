import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col flex-center h-10 justify-between">
      <div className="desc text-center">©2023 izdebski.dv. All rights reserved.</div>
      <div className="flex flex-center gap-2">
        <Image src="/assets/icons/facebook.png" width={20} height={20} className="opacity-60" alt="Facebook" />
        <Image src="/assets/icons/twitter.png" width={20} height={20} className="opacity-60" alt="Twitter" />
        <Image src="/assets/icons/instagram.png" width={20} height={20} className="opacity-60" alt="Instagram" />
        <Image src="/assets/icons/youtube.png" width={20} height={20} className="opacity-60" alt="Youtube" />
      </div>
    </div>
  );
};

export default Footer;