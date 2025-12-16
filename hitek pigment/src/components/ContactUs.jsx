import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_35pjvl7",
        "template_ow8aknm",
        formRef.current,
        "CQ3KK95E8K76-bs8J"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white"
    >
      <div className="container px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
              Us
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base"
          >
            Get in touch with Hitek Pigments & Coatings Pvt. Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">

          {/* Contact Info */}
          <div data-aos="fade-right" className="space-y-6 sm:space-y-7">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-400">
              Reach Us
            </h2>

            <div className="flex items-start sm:items-center gap-4">
              <FaLocationArrow className="text-sky-400 text-lg sm:text-xl mt-1 sm:mt-0" />
              <p className="text-gray-300 text-sm sm:text-base">
                Patiala, Punjab, India
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-4">
              <FaPhoneAlt className="text-sky-400 text-lg sm:text-xl mt-1 sm:mt-0" />
              <p className="text-gray-300 text-sm sm:text-base">
                +91 7009406565
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-4">
              <FaEnvelope className="text-sky-400 text-lg sm:text-xl mt-1 sm:mt-0" />
              <p className="text-gray-300 text-sm sm:text-base break-all">
                Madhupaintapatiala@gmail.com
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
              We specialize in high-performance pigments, coatings, and
              customized color solutions for industrial and decorative
              applications.
            </p>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            data-aos="fade-left"
            className="bg-slate-900/70 backdrop-blur-xl
            p-6 sm:p-10
            rounded-xl sm:rounded-2xl
            shadow-2xl space-y-4 sm:space-y-6
            border border-white/10"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 text-sm sm:text-base rounded-md
              bg-black/60 border border-gray-700 text-white
              focus:border-sky-400 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 text-sm sm:text-base rounded-md
              bg-black/60 border border-gray-700 text-white
              focus:border-sky-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 text-sm sm:text-base rounded-md
              bg-black/60 border border-gray-700 text-white
              focus:border-sky-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 text-base sm:text-lg font-semibold rounded-md
              bg-gradient-to-r from-sky-400 to-indigo-600
              hover:from-indigo-600 hover:to-sky-400
              transition-all duration-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
