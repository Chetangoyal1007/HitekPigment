import React from "react";
import BannerImg from "../../assets/color.jpeg";
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
      <div className="bg-white/30 dark:bg-black/80 duration-300">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">

           {/* Company Name */}
<div className="flex justify-center px-4">
  <div
  data-aos="fade-up"
  className="
    inline-block
    px-4 sm:px-6 py-3
    bg-white/30 backdrop-blur-md
    rounded-sm
    overflow-visible
  "
>

<p
  className="
    text-center
    font-black
    uppercase

    text-[clamp(1.2rem,6vw,3.8rem)]
    leading-tight

    tracking-[0.06em]

    bg-gradient-to-r
    from-orange-500 via-red-500 to-pink-500
    bg-clip-text
    text-transparent

    drop-shadow-[0_6px_20px_rgba(0,0,0,1)]
  "
>
  <span className="block">HITEK PIGMENTS</span>
  <span className="block">& COATINGS</span>
  <span className="block text-[0.7em] tracking-[0.2em]">PVT LTD</span>
</p>


  </div>
</div>



            {/* Main Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-2xl md:text-1xl font-bold"
            >
              Start Your Color and Chemical Journey
            </h1>

            {/* Tagline */}
            <p data-aos="fade-up" data-aos-delay="500" className="text-gray-200">
              
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
