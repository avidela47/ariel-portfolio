// certificate data
export const certificateData = [
  {
    image: "/t-avt-5.png",
    name: "Coderhouse",
    position: "Desarrollo Full Stack",
    path: "/DesarrolloFullStack2.png",
  },
  {
    image: "/t-avt-5.png",
    name: "Coderhouse",
    position: "Desarrollo Full Stack Flex",
    path: "/DesarroloFullStackFlex.png",
  },
  {
    image: "/t-avt-5.png",
    name: "Coderhouse",
    position: "Programacion BackEnd",
    path:
      "/ProgramaciónBackend2.png",
  },
  {
    image: "/t-avt-5.png",
    name: "Coderhouse",
    position: "React Js.",
    path:
      "/ReactJs2.png",
  },
  {
    image: "/t-avt-5.png",
    name: "Coderhouse",
    position: "JavaScript",
    path:
      "/JavaScript2.png",
  },
  {
    image: "/t-avt-5.png",
    name: "Coderhouse",
    position: "Desarrolo Web",
    path:
      "/DesarrolloWeb2.png",
  },
  {
    image: "/t-avt-6.png",
    name: "XAcademy",
    position: "Desarrolo Web",
    path:
      "/DesarrolloWebProgramaAcademy.jpg",
  },
  {
    image: "/t-avt-7.png",
    name: "Argentina Programa 4.0",
    position: "Desarrollo Full Stack Jr.",
    path:
      "/SeProgramar2022_page.jpg",
  },
  {
    image: "/t-avt-7.png",
    name: "Argentina Programa 4.0",
    position: "Desarrollo Web",
    path:
      "/Primerosdesarrollofrontend.jpg",
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// next image
import Image from "next/image";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";

const CertificateSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {certificateData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 mb-6">
              {/* avatar, name, img */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* img */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-2">
                  <FaQuoteLeft class="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left xl:w-full sm:w-[200px]">
                <Image src={person.path} width={420} height={500} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CertificateSlider;
