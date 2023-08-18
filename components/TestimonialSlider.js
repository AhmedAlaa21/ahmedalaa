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
    image: "/t-avt-2.png",
    name: "Mohamed Galal",
    position: "Backend-developer",
    message:
      "Ahmed is a top-notch React developer who consistently exceeded our expectations. Their proficiency in crafting efficient and maintainable React components greatly contributed to the success of our project",
  },
  {
    image: "/t-avt-3.png",
    name: "Ahmed Nabout",
    position: "Customer",
    message:
      "I had the privilege of collaborating with Ahmed on a critical React-driven application, and I must say, they are a true React virtuoso",
  },
];

//next image
import Image from "next/image";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { FaArrowRight } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {testimonialData.map((person, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div>
              {/* avatar, name, position */}
              <div>
                <div>
                  {/* avatar */}
                  <div>avatar image</div>
                  {/* name */}
                  <div>name</div>
                  {/* position */}
                  <div>position</div>
                </div>
              </div>
              {/* quote - message */}
              <div>quote & message</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
