// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Manal Mohamed",
    position: "Customer",
    message:
      "I had the pleasure of working with Ahmed on a complex web application project",
  },
  {
    image: "/t-avt-3.png",
    name: "Mohamed Galal",
    position: "Backend-developer",
    message:
      "Ahmed is a top-notch React developer who consistently exceeded our expectations. Their proficiency in crafting efficient and maintainable React components greatly contributed to the success of our project",
  },
  {
    image: "/t-avt-3.png",
    name: "Ahmed Nabout",
    position: "Senior Game Developer",
    message:
      "I had the privilege of collaborating with Ahmed on a critical React-driven application, and I must say, they are a true React virtuoso",
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";

//next image
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div
              className="flex flex-col items-center md:flex-row gap-x-8 h-full
            px-16"
            >
              {/* avatar, name, position */}
              <div
                className="w-full max-w-[300px] flex flex-col xl:justify-center 
              items-center relative mx-auto xl:mx-0"
              >
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto ">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt="testimonial avatar"
                    />{" "}
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extraLight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote - message */}
              <div
                className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20
              xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
              >
                {/* quote icons */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
