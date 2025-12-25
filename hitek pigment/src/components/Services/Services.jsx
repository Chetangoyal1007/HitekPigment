import React from "react";
import { FaPaintRoller } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineColorLens } from "react-icons/md";
import { Link } from "react-router-dom";


const skillsData = [
  {
  name: "Paints & Inks",
  icon: (
    <FaPaintRoller className="text-5xl text-primary group-hover:text-black duration-300" />
  ),
  description: [
    "High color strength with excellent tinting performance.",
    "Superior dispersion for smooth and uniform finishes.",
    "Outstanding opacity and coverage across formulations.",
    "Durable pigments suitable for paints, coatings, and printing inks.",
  ],
  aosDelay: "0",
},

 {
  name: "Pharma & Rubber",
  icon: (
    <GiChemicalDrop className="text-5xl text-primary group-hover:text-black duration-300" />
  ),
  description: [
    "Pharma-grade chemicals with high purity and safety compliance.",
    "Excellent chemical and thermal stability.",
    "Non-toxic, non-migrating, and contamination-safe formulations.",
    "Widely used in rubber goods, medical products, and pharmaceuticals.",
  ],
  aosDelay: "400",
},

  {
  name: "Plastics & Masterbatches",
  icon: (
    <MdOutlineColorLens className="text-5xl text-primary group-hover:text-black duration-300" />
  ),
  description: [
    "High-performance pigments for plastic processing.",
    "Excellent dispersion and compatibility with polymers.",
    "Superior color strength, brightness, and opacity.",
    "Ideal for masterbatches, molded plastics, films, and fibers.",
  ],
  aosDelay: "800",
},

];

const Services = () => {
  return (
    <>
      <span id="applications"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              Our <span className="text-primary">Applications</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-center text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto"
            >
              Delivering high-performance pigments and color solutions across
              decorative, industrial, and specialty applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-4 sm:space-y-6 p-6 sm:py-14 bg-gray-200 dark:bg-dark hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group"
              >
                <div className="grid place-items-center">{skill.icon}</div>

                <h1 className="text-2xl font-bold">{skill.name}</h1>

                {skill.description.map((desc, index) => (
                  <p key={index} className="text-sm leading-relaxed">
                    {desc}
                  </p>
                ))}

                <Link
  to="/products"
  className="primary-btn mt-4 group-hover:scale-105 duration-200 inline-block"
>
  Learn More
</Link>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
