import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", url: "/" },
  { title: "Menu", url: "/menu" },
  { title: "About Us", url: "/aboutus" },
  { title: "Contact", url: "/contact" },
  { title: "Book Table Online", url: "/bookatable" },
];

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {!navOpen ? (
        <button onClick={() => setNavOpen(true)}>
          <Menu size={32} color="#fff" />
        </button>
      ) : (
        <>
          <button onClick={() => setNavOpen(false)}>
            <X size={25} color="#fff" />
          </button>
          <div className="fixed top-20 left-0 w-full bg-white/60 backdrop-blur-lg border-b border-t z-80 max-h-screen overflow-y-auto">
            <ul className="flex flex-col items-center py-6 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="block text-black hover:text-white p-4"
                    onClick={() => setNavOpen(false)} // Close the menu on click
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
