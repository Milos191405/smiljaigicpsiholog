"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Pocetna" },
  { to: "/O_meni", label: "O meni" },
  { to: "/Psihoterapija", label: "Psihoterapija" },
  { to: "/Blog", label: "Blog" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show/hide navbar on scroll
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Show/hide scroll-to-top button
      setShowScrollToTop(currentScrollPos > 10); // Show when scrolled 300px down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-background shadow-lg z-50 h-[80px] lg:h-[100px] lg:flex lg:justify-between lg:items-center lg:px-20 transition-transform duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        {/* Navbar Container */}
        <div className="relative flex justify-center items-center px-6 py-4 lg:px-0">
          {/* Logo always on center */}
          <Link
            href="/"
            className="text-2xl font-bold transition-all duration-300 md:text-3xl lg:text-2xl hover:text-text-secondary text-center"
          >
           <h1>Smilja Igić</h1>
            <p className="text-sm">Vaš Psihoterapeut</p>
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
              <Link href={to} className="hover:text-text-secondary">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/Kontakt" className="hidden lg:flex">
          <button className="border p-2  text-background bg-text-secondary rounded-xl  hover:text-text-primary hover:bg-background">
            Kontakt
          </button>
        </Link>

        {/* Mobile Menu */}
        <div
          className={`h-screen  fixed top-0 left-0 w-full  bg-background flex flex-col items-center transition-all duration-500 ease-in-out 
          ${nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
        >
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold mt-6 md:text-3xl text-center">
            <h1>Smilja Igić</h1>
            <p className="text-sm">Vaš Psihoterapeut</p>
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setNav(false)}
            className="absolute top-6 right-6 cursor-pointer text-3xl text-foreground"
          >
            <FaTimes />
          </button>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col gap-6 text-xl text-foreground mt-auto mb-auto">
            {navLinks.map(({ to, label }) => (
              <li key={to} onClick={() => setNav(false)}>
                <Link href={to} className="hover:text-text-secondary">
                  {label}
                </Link>
              </li>
            ))}

            {/* "Kontakt" Button - Only on Mobile */}
            <li className="lg:hidden " onClick={() => setNav(false)}>
              <Link href="/Kontakt">
                <button className="border p-2 text-text-secondary rounded-2xl bg-background-secondary hover:text-text-primary hover:border-text-primary">
                  Kontakt
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-text-primary text-background rounded-full shadow-lg hover:text-orange-300 transition duration-200"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
