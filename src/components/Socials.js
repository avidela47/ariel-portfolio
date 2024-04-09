// links
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg xl:mt-0 sm:mt-[-120px] md:mt-[-180px] sm:ml-[-120px] xl:mr-[75px]">
      <Link href={"https://linkedin.com/in/ariel-videla-5b246b223"} className="hover:text-accent transition-all duration-300" target={"_blank"}>
        <RiLinkedinLine />
      </Link>
      <Link href={"https://github.com/avidela47"} className="hover:text-accent transition-all duration-300" target={"_blank"}>
        <RiGithubLine />
      </Link>
      <Link href={"https://www.instagram.com/ariel__videla/"} className="hover:text-accent transition-all duration-300" target={"_blank"}>
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.facebook.com/arielvidela43"} className="hover:text-accent transition-all duration-300" target={"_blank"}>
        <RiFacebookBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
