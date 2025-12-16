import React from "react";
import Logo from "../../assets/logo1.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

export const Navlinks = [
  {
    id: 1,
    name: "Products",
    link: "/products",
  },
  {
    id: 2,
    name: "About Us",
    link: "/#about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <footer className="py-12 w-full bg-gray-100 dark:bg-dark dark:text-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">

          {/* Logo & Social */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Hitek Pigments Logo" className="w-16" />
              <h2 className="text-lg font-bold">
                Hitek Pigments & Coatings
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left max-w-xs">
              Delivering high-performance pigments and coating solutions with
              consistency, precision, and trust.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <FaLocationArrow className="text-primary" />
              <p className="text-sm">
                Patiala, Punjab, India
              </p>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <FaMobileAlt className="text-primary" />
              <p className="text-sm">
                +91 7009406565
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden sm:block">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="text-sm font-medium hover:text-primary duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hitek Pigments & Coatings Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
