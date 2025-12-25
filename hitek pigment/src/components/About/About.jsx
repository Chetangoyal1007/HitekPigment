import React from "react";
import BannerImg from "../../assets/pigment.jpg";

const About = () => {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary"></p>
                  <h1 className="text-2xl sm:text-4xl font-bold">Pigment for Paints</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Hitek Pigments Pvt. Ltd., officially Hitek Pigments And Coatings India Private Limited, 
                is an active private company in Patiala, Punjab, India, incorporated 
                in April 2021, that manufactures and supplies various chemical products like pigments, dyes, resins, and metal powders for industries such as paints and coatings. The company is known for providing a range of industrial coloring agents and chemicals and has listings on B2B platforms like IndiaMART and Justdial. 
              </p>
            
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
