import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function StandardNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex items-center h-20 px-6 justify-between border-b border-gray-300 bg-blue-800 text-black relative z-50">
      <div className="flex-1 ml-10 items-center hidden lg:flex">
        <a
          href="#"
          className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
        >
          Home
        </a>
        <a
          href="#"
          className="no-underline px-2 mr-3 font-medium hover:text-blue-400"
        >
          Dogs
        </a>
        <a
          href="#"
          className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
        >
          Bones
        </a>
        <a
          href="#"
          className="no-underline px-2 mr-3 text-gray-200 font-medium hover:text-blue-400"
        >
          Settings
        </a>
      </div>
      <div className="items-center hidden lg:flex">
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="ml-6 text-2xl cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="ml-6 text-2xl cursor-pointer"
        />
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-white text-3xl cursor-pointer lg:hidden"
      />
      {mobileOpen && (
        <div className="bg-blue-800 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <a
              href="#"
              className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              Dogs
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
            >
              Bones
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
            >
              Settings
            </a>
            <div className="my-2 flex justify-center">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-2xl mx-2 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faBell}
                className="text-2xl mx-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StandardNav;
