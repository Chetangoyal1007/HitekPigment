import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between
      bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black
      transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        {/* User Info */}
        <div className="flex items-center gap-3 mb-10">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <p className="text-sm text-slate-500">Premium user</p>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="inline-block hover:text-primary transition"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-sm">
        Made with ❤ by{" "}
        <a
          href="https://dilshad-ahmed.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Dilshad
        </a>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
