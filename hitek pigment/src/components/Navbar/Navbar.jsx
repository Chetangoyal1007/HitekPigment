import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo1.jpg";
import DarkMode from "./DarkMode";

export const Navlinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showIntro, setShowIntro] = useState(() => {
  return !sessionStorage.getItem("introPlayed");
});


  // Remove intro after animation
  useEffect(() => {
  if (!showIntro) return;

  const timer = setTimeout(() => {
    setShowIntro(false);
    sessionStorage.setItem("introPlayed", "true");
  }, 1800);

  return () => clearTimeout(timer);
}, [showIntro]);


  return (
    <>
      {/* 🔥 FULL SCREEN LOGO INTRO */}
      {showIntro && (
        <div className="
  fixed inset-0 z-[9999] flex items-center justify-center
  bg-gradient-to-br from-fuchsia-700 via-violet-600 to-cyan-500
">
  <img
            src={Logo}
            alt="Intro Logo"
            className="
              w-72 h-72
              sm:w-80 sm:h-80
              rounded-full
              object-cover
              shadow-2xl
              animate-logoShrink
            "
          />
        </div>
      )}

      {/* 🔥 NAVBAR */}
      <header className="relative z-50 w-full shadow-md bg-white dark:bg-black dark:text-white">
        <div className="container mx-auto px-4">
          <div className="relative flex justify-between items-center h-44 sm:h-48">

            {/* Phone */}
            <div className="hidden sm:flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <BiPhoneCall className="text-primary text-6xl animate-pulse" />
              +91 7009406565
            </div>

            {/* Navbar Logo */}
            <Link
              to="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src={Logo}
                alt="Hitek Pigments Logo"
                className="
                  w-40 h-40
                  sm:w-44 sm:h-44
                  md:w-48 md:h-48
                  rounded-full
                  object-cover
                  shadow-2xl
                "
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {Navlinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="text-lg font-semibold hover:text-primary transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <DarkMode />
              </ul>
            </nav>

            {/* Mobile Menu */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1 size={30} onClick={() => setShowMenu(false)} />
              ) : (
                <HiMenuAlt3 size={30} onClick={() => setShowMenu(true)} />
              )}
            </div>

          </div>
        </div>

        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </header>
    </>
  );
};

export default Navbar;
