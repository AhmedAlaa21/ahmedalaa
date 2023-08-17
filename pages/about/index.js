import React, { useState } from "react";

//  components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

//data
import { aboutData } from "../../data";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-6">
        <div>text</div>
        <div>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((el, elIndex) => {
              return (
                <div
                  key={elIndex}
                  className={`${
                    index === elIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }} cursor-pointer capitalize xl:text-lg relative 
                  after:w-8 after:h-[2px] after:bg-white after:absolute 
                  after:-bottom-1 after:left-0 z-10`}
                  onClick={() => setIndex(elIndex)}
                >
                  {el.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
