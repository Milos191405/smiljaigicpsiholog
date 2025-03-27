"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Pocetna" },
  { to: "/O_meni", label: "O meni" },
  { to: "/Psihoterapija", label: "Psihoterapija" },
  { to: "/Blog", label: "Blog" },
  // { to: "/Kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint (1024px)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Navbar hide/show on scroll (only for large screens by default)
  useEffect(() => {
    if (!isLargeScreen) return; // Prevent scroll behavior on mobile

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isLargeScreen]);

  // Navbar hide/show on scroll (only for mobile)
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-background shadow-lg z-50 lg:h-[100px] lg:flex lg:justify-between lg:items-center lg:px-6 transition-transform duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Navbar Container */}
      <div className="relative flex justify-center items-center px-6 py-4 lg:px-0">
        {/* Logo always on center*/}
        <Link
          href="/"
          className="text-2xl font-bold transition-all duration-300 md:text-3xl lg:text-2xl hover:text-orange-300"
        >
          Porodični terapeut
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setNav(!nav)}
          className="absolute right-6 lg:hidden z-50 cursor-pointer"
          aria-controls="mobile-menu"
          aria-expanded={nav ? "true" : "false"}
          aria-label="Toggle navigation menu"
        >
          {nav ? <FaTimes size={20} className="hidden" /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-between gap-6 text-lg lg:text-xl">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link href={to} className="hover:text-orange-300">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/Kontakt" className="hidden lg:flex">
        <button className="border p-2 text-white rounded-xl bg-foreground hover:text-orange-300 hover:border-foreground">
          Kontakt
        </button>
      </Link>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-background flex flex-col items-center transition-all duration-500 ease-in-out 
          ${nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold mt-6 md:text-3xl">
          Porodični terapeut
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setNav(false)}
          className="absolute top-6 right-6 cursor-pointer text-3xl text-gray-700"
        >
          <FaTimes />
        </button>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col gap-6 text-2xl text-foreground mt-auto mb-auto">
          {navLinks.map(({ to, label }) => (
            <li key={to} onClick={() => setNav(false)}>
              <Link href={to} className="hover:text-red-500">
                {label}
              </Link>
            </li>
          ))}

          {/* "Kontakt" Button - Only on Mobile */}
          <li className="lg:hidden mt-6" onClick={() => setNav(false)}>
            <Link href="/Kontakt">
              <button className="border p-2 text-white rounded-xl bg-foreground hover:text-orange-300 hover:border-foreground">
                Kontakt
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
