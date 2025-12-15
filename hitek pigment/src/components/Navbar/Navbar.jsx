import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo1.jpg";
import DarkMode from "./DarkMode";
import { BiPhoneCall } from "react-icons/bi";

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Products",
    link: "/Products",
  },
  {
  id: 3,
  name: "CONTACT US",
  link: "/contact",
}

];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
            +91 7009406565
          </div>
          <div>
  <img
    src={Logo}
    alt="Hitek Pigments Logo"
    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 
               absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 
               m-2 sm:m-0 rounded-full object-cover shadow-lg"
  />
</div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold  hover:text-primary duration-300  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
