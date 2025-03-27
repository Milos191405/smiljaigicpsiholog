"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Pocetna" },
  { to: "/O_meni", label: "O meni" },
  { to: "/Psihoterapija", label: "Psihoterapija" },
  { to: "/Blog", label: "Blog" },
  { to: "/Kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false); // State for menu visibility
  const handleClick = () => setNav(!nav); // Toggle menu visibility
  const closeMenu = () => setNav(false); // Close menu on link click

  return (
    <nav className="fixed  top-0 left-0 w-full bg-background shadow-lg z-50 lg:h-[100px]  lg:flex lg:justify-between lg:items-center lg:px-6">
      {/* Navbar Container */}
      <div className="relative flex justify-center items-center px-6 py-4 lg:px-0">
        {/* Logo - Always Centered */}
        <Link
          href="/"
          className="text-2xl font-bold transition-all duration-300 md:text-3xl lg:text-2xl hover:text-orange-300"
        >
          Porodični terapeut
        </Link>

        {/* Hamburger Icon (Right Side) */}
        <button
          onClick={handleClick}
          className="absolute right-6 lg:hidden z-50 cursor-pointer"
          aria-controls="mobile-menu"
          aria-expanded={nav ? "true" : "false"}
          aria-label="Toggle navigation menu"
        >
          {!nav ? <FaBars size={20} /> : null}
        </button>
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className="hidden lg:flex justify-between gap-6 text-lg lg:text-xl">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link href={to} className="hover:text-orange-300">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu - Centered on Screen */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-background flex flex-col items-center  transition-all duration-500 ease-in-out ${
          nav ? "translate-y-0 opacity-100 " : "-translate-y-full opacity-0 "
        }`}
      >
        {/* Logo at the Top of the Menu */}
        <Link
          href="/"
          className="text-2xl font-bold  mt-6 md:text-3xl"
        >
          Porodični terapeut
        </Link>

        {/* Close Menu Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 cursor-pointer  text-3xl text-gray-700"
        >
          <FaTimes />
        </button>

        {/* Mobile Menu Links (Centered) */}
        <ul className="flex flex-col gap-6 text-2xl text-gray-700 mt-auto mb-auto">
          {navLinks.map(({ to, label }) => (
            <li key={to} onClick={closeMenu}>
              <Link href={to} className="hover:text-red-500">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
