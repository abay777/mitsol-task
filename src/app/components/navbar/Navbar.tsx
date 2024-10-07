'use client'
import React, { useState } from "react";
import logo from '@/app/assets/logo.png';
import Image from "next/image";

const Navbar = () => {
  // State to control the mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full py-3 px-4 bg-[#000000] text-white">
      <div>
        <Image
          src={logo}
          width={200}
          height={300}
          alt="Logo"
        />
      </div>
      <div className="flex gap-2 items-center md:hidden">
        <p className="m-0 p-0 text-[1.2rem] cursor-pointer">Login</p>
        <svg
          className="w-[2rem] cursor-pointer"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          stroke="white"
          strokeWidth="1.68"
          onClick={toggleMenu}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#000000] z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <Image
            src={logo}
            width={150}
            height={200}
            alt="Logo"
          />
          <svg
            className="w-[2rem] cursor-pointer"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            strokeWidth="1.68"
            onClick={toggleMenu}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col gap-4 mt-4 px-6">
          <a href="#" className="text-xl text-white">Home</a>
          <a href="#" className="text-xl text-white">About</a>
          <a href="#" className="text-xl text-white">Pricing</a>
          <a href="#" className="text-xl text-white">Contact</a>
          <button className="bg-red-600 text-white py-2 px-4 rounded-md mt-4">
            Login
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <a href="#" className="text-lg">Home</a>
        <a href="#" className="text-lg">About</a>
        <a href="#" className="text-lg">Pricing</a>
        <a href="#" className="text-lg">Contact</a>
        <button className="bg-red-600 text-white py-2 px-4 rounded-md">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
