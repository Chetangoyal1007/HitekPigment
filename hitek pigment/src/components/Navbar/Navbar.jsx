import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo1.jpg";

// ✅ Corrected routes (lowercase)
export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="relative z-50 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Left: Phone */}
          <div className="hidden sm:flex items-center gap-3 font-semibold text-gray-500 dark:text-gray-400">
            <BiPhoneCall className="text-primary text-2xl animate-pulse" />
            +91 7009406565
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img
                src={Logo}
                alt="Hitek Pigments Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className="text-lg font-semibold hover:text-primary transition duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile Nav */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                size={30}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            ) : (
              <HiMenuAlt3
                size={30}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Navbar;
