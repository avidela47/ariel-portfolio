// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Social from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 xl:mt-0 sm:mt-[-10px]">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={420}
            height={48}
            alt=""
            priority={true}
            className="sm:mt-[-120px] sm:ml-[-60px] xl:mt-6 xl:ml-0 md:mt-[-160px]"
          />
        </Link>
        {/* Socials */}
        <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;

