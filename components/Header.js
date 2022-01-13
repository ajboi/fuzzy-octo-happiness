import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function StandardNavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex items-center h-20 px-6 ml-auto justify-between text-lg	text-black relative z-50">
      <div className="h-8"></div>
      <div className="ml-auto items-center hidden lg:flex">
        <a
          href="#"
          className="transition duration-300 no-underline px-2 mr-3 font-medium hover:text-red"
        >
          Home
        </a>
        <a
          href="#"
          className="transition duration-300 no-underline px-2 mr-3 font-medium hover:text-red"
        >
          About
        </a>
        <a
          href="#"
          className="transition duration-300 no-underline px-2 mr-3 font-medium hover:text-red"
        >
          Blog
        </a>
        <a
          href="#"
          className="transition duration-300 no-underline px-2 mr-3 font-medium hover:text-red"
        >
          Proof of Work
        </a>
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer lg:hidden"
      />
      {mobileOpen && (
        <div className="bg-white absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <a
              href="#"
              className="transition duration-200 no-underline px-2 my-2 font-medium hover:text-red"
            >
              Home
            </a>
            <a
              href="#"
              className="transition duration-200 no-underline px-2 my-2 font-medium hover:text-red"
            >
              About
            </a>
            <a
              href="#"
              className="transition duration-200 no-underline px-2 my-2 font-medium hover:text-red"
            >
              Blog
            </a>
            <a
              href="#"
              className="transition duration-200 no-underline px-2 my-2 font-medium hover:text-red"
            >
              Proof of Work
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default StandardNavMenu;
