import React from "react";
import BannerImg from "../../assets/color.jpg";
import { motion } from "framer-motion";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300"
    >
      <div className="bg-white/20 dark:bg-black/80 duration-300">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">

           {/* Company Name */}
<div className="flex justify-center px-4">
  <p
    data-aos="fade-up"
    className="
      text-xl 
      sm:text-2xl 
      md:text-3xl 
      lg:text-4xl 
      xl:text-5xl
      font-bold 
      uppercase 
      tracking-wide 
      text-white 
      text-center
      break-words
    "
  >
    Hitek Pigments & Coatings Pvt Ltd.
  </p>
</div>



            {/* Main Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-1xl font-bold"
            >
              Start Your Color and Chemical Journey
            </h1>

            {/* Tagline */}
            <p data-aos="fade-up" data-aos-delay="500" className="text-gray-200">
              Precision pigments and coating solutions engineered for lasting performance.
            </p>

            {/* CTA */}
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once="true"
              className="primary-btn"
            >
              Get Started
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
