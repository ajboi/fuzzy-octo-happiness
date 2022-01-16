import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

function StandardNavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  let router = useRouter();
  return (
    <div className="navbar flex items-center h-20 px-6 ml-auto justify-between text-lg	text-black heading-bold relative z-50">
      <div className="h-8"></div>
      <div className="ml-auto items-center hidden lg:flex">
        <Link href="/" passHref>
          <a
            className={`${
              router.pathname === "/" ? "active" : ""
            } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
          >
            Home
          </a>
        </Link>
        <Link href="/about" passHref>
          <a
            className={`${
              router.pathname === "/about" ? "active" : ""
            } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
          >
            About
          </a>
        </Link>
        <Link href="/blogs" passHref>
          <a
            className={`${
              router.pathname === "/blogs" ? "active" : ""
            } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
          >
            Blog
          </a>
        </Link>
        <Link href="/proofofwork" passHref>
          <a
            className={`${
              router.pathname === "/proofofwork" ? "active" : ""
            } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
          >
            Proof of Work
          </a>
        </Link>
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer lg:hidden"
      />
      {mobileOpen && (
        <div className="bg-white absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <Link href="/" passHref>
              <a
                className={`${
                  router.pathname === "/" ? "active" : ""
                } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
              >
                Home
              </a>
            </Link>
            <Link href="/about" passHref>
              <a
                className={`${
                  router.pathname === "/about" ? "active" : ""
                } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
              >
                About
              </a>
            </Link>
            <Link href="/blogs" passHref>
              <a
                className={`${
                  router.pathname === "/blogs" ? "active" : ""
                } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
              >
                Blog
              </a>
            </Link>
            <Link href="/proofofwork" passHref>
              <a
                className={`${
                  router.pathname === "/proofofwork" ? "active" : ""
                } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
              >
                Proof of Work
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default StandardNavMenu;
