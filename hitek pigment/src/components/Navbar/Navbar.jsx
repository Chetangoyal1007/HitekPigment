import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo1.jpg";
import DarkMode from "./DarkMode";

// ✅ LOWERCASE ROUTES ONLY
export const Navlinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="relative z-50 shadow-md w-full dark:bg-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Phone */}
          <div className="hidden sm:flex items-center gap-3 text-gray-500 dark:text-gray-400">
            <BiPhoneCall className="text-primary text-2xl animate-pulse" />
            +91 7009406565
          </div>

          {/* Logo */}
         <Link to="/" className="absolute left-1/2 -translate-x-1/2">
  <img
    src={Logo}
    alt="Hitek Pigments Logo"
    className="
      w-24 h-24
      sm:w-28 sm:h-28
      md:w-32 md:h-32

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

          {/* Mobile Icon */}
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

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Navbar;
