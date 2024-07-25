"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const navLinks = [
  { title: "Home", path: "#" },
  { title: "About", path: "#about" },
  { title: "Services", path: "#services" },
  { title: "Contact", path: "#contact" },
  { title: "Team", path: "#team" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (isOpen && width < 1024) {
      document.body.classList.add("overlay");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("overlay");
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="sticky z-[2] py-1 top-0 left-0 right-0 shadow-sm shadow-gray-200 bg-white/[0.85]">
      <div className="flex items-center justify-between container px-4 md:px-10 lg:px-6 py-1">
        <div
          className="flex lg:hidden items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="text-gray-500 transition-all hover:text-[#5e84aa] text-xl" />
          <span className="text-gray-500 transition-all hover:text-[#5e84aa]">
            Menu
          </span>
        </div>
        <Link href={"/"} className="">
          <Image
            src={"/assets/images/logo.png"}
            width={150}
            height={50}
            className="w-auto h-auto"
            alt="logo"
          />
        </Link>
        <div
          className={`absolute h-screen lg:h-auto lg:static z-40 lg:z-0 top-0 left-0  transition-all duration-300  bg-white shadow-xl lg:shadow-none lg:bg-transparent  lg:w-auto lg:flex items-center gap-4 lg:gap-10 
            ${isOpen ? "w-96" : "w-0  overflow-hidden"}
            `}
        >
          <div
            className="lg:hidden flex items-center gap-2 text-gray-400 transition-all hover:text-[#5e84aa] text-sm absolute top-8 left-1/2  -translate-x-1/2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaTimes className="" />
            Close
          </div>
          <div className="py-20 w-full  lg:py-0 flex flex-col lg:flex-row items-center justify-center lg:justify-normal lg:w-auto gap-8 lg:gap-10">
            {navLinks.map((link, idx) => {
              return (
                <Link
                  key={idx}
                  href={link.path}
                  className="capitalize text-gray-500 transition-all hover:text-[#5e84aa]  nav-link font-normal"
                >
                  {link.title}
                </Link>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
