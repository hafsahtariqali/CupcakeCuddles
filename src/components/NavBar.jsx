"use client";
import { useState } from "react";
import React from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);// State to store the current user

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const defaultClasses = "transition-all absolute inset-0 -z-1";
  const navBarClasses = scrolled ? `${defaultClasses} border-b border-black/10 bg-[#CC9966]/85 backdrop-blur-lg` : `${defaultClasses} bg-[#CC9966]`;

  return (
    <div className="fixed inset-x-0 top-0 w-full z-30">
      <div className={navBarClasses}></div>
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12 relative">
        <div className="flex items-center justify-between py-3">
          <div>
            <Link to="/" className="font-spartan text-[25px] sm:text-[29px] text-white font-bold">cupcake cuddles.</Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex flex-row space-x-6 font-roboto p-4">
              <li>
                <Link to="/" className="text-white/80 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-white/80 hover:text-white">Menu</Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-white/80 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
          <Link to="/bookatable">
              <button
                className="font-spartan font-bold text-[18px] bg-[#66311E] px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-[#4A0404]"
              >
                Book Table Online
              </button>
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;