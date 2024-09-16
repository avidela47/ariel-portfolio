// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          img: "/selflick1.png",
          path: "https://selflick.com.ar/"
        },
        {
          title: "title",
          img: "/burger.png",
          path: "https://burger-burghs.netlify.app/"
        },
        {
          title: "title",
          img: "/bikezz1.jpeg",
          path: "https://bikezz-eta.vercel.app/"
        },
        {
          title: "title",
          img: "/masamadre.jpeg",
          path: "https://masa-madre-panaderia.netlify.app/"
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          img: "/pet.png",
          path: "https://practico-integrador-grupo5-pet-shop.vercel.app/"
        },
        {
          title: "title",
          img: "/diabolo.jpeg",
        },
        {
          title: "title",
          img: "/coffee.png",
          title: "title",
        },
        {
          title: "title",
          img: "/horus.jpeg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          img: "/saboresargentinos.png",
          path: "https://avidela47.github.io/saboresargentinos/"
        },
        {
          title: "title",
          img: "/cafenormandia.png",
          path: "https://normandiacafe.vercel.app/"
        },
        {
          title: "title",
          img: "/birmghamburger.png",
          path: "https://birmghamburger.vercel.app/"
        },
        {
          img: "/miportfolio.png",
          path: "https://ariel-videla-portfolio.vercel.app/"
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// next image
import Image from "next/image";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] sm:mt-[-100px] xl:mt-10"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid sm:flex-col sm:gap-6 sm:mt-[80px] xl:mt-0 xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <a
                      href={image.path || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center relative overflow-hidden group xl:mt-[27px] rounded-xl"
                    >
                      {/* image */}
                      <Image
                        src={image.img}
                        width={500}
                        height={300}
                        alt={image.title}
                        className="w-full xl:h-[190px] sm:h-[75px]"
                      />
                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100 sm:text-[10px]">VER</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 sm:text-[10px]">
                            PROYECTO
                          </div>
                          {/* icon */}
                          <div className="text-xl transalte-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
