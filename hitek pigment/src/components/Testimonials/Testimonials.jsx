import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Paint Manufacturer",
    text: "Hitek Pigments consistently delivers high-quality pigments with excellent color strength and batch consistency. Their products have improved the finish and durability of our paints.",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Ankit Verma",
    role: "Industrial Coatings Supplier",
    text: "We trust Hitek Pigments for their reliable formulations and technical support. Their pigments perform exceptionally well even in demanding industrial applications.",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    name: "Mohammad Irfan",
    role: "Quality Control Manager",
    text: "The consistency and purity of Hitek pigments help us maintain strict quality standards. Their team is responsive and technically sound.",
    img: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: 4,
    name: "Suresh Patel",
    role: "Plastic & Ink Manufacturer",
    text: "Excellent color dispersion and long-lasting performance. Hitek Pigments has become our preferred partner for specialty pigment solutions.",
    img: "https://i.pravatar.cc/100?img=18",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-14 my-14 dark:bg-black">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            What Our <span className="text-primary">Clients Say</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-sm text-gray-600 dark:text-gray-400 mt-3"
          >
            Trusted by manufacturers and industrial partners across India.
          </p>
        </div>

        {/* Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-3">
                <div className="flex flex-col gap-5 shadow-lg py-8 px-6 rounded-xl dark:bg-dark bg-primary/10 relative min-h-[260px]">

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black/80 dark:text-white">
                        {data.name}
                      </h3>
                      <p className="text-sm text-primary">{data.role}</p>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {data.text}
                  </p>

                  {/* Quote */}
                  <span className="text-primary/20 text-8xl font-serif absolute top-2 right-4 select-none">
                    “
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
