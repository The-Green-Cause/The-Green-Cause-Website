'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile main menu
  const [isAboutOpen, setIsAboutOpen] = useState(false); // Mobile About dropdown
  const [isAboutHover, setIsAboutHover] = useState(false); // Desktop hover state
  const hoverTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setIsAboutHover(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsAboutHover(false);
    }, 150);
  };

  return (
    <header className="bg-teal-500 w-full relative z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center px-5">
          <div className="h-14 w-14 rounded">
            <Image src="/logo.png" alt="logo" width={5000} height={5000} />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks
            desktop
            isAboutOpen={isAboutOpen}
            setIsAboutOpen={setIsAboutOpen}
            isAboutHover={isAboutHover}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-2">
          <NavLinks
            mobile
            isAboutOpen={isAboutOpen}
            setIsAboutOpen={setIsAboutOpen}
          />
        </div>
      )}
    </header>
  );
}

function NavLinks({
  mobile = false,
  desktop = false,
  isAboutOpen,
  setIsAboutOpen,
  isAboutHover,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const baseStyle =
    "text-white font-cabin font-semibold hover:text-green-200 transition-colors duration-200";
  const mobileStyle = mobile ? "block py-2" : "";

  return (
    <>
      <Link href="/" className={`${baseStyle} ${mobileStyle}`}>
        Home
      </Link>

        {/* About Us with Dropdown */}
        <div
          className={`relative ${mobile ? "" : "group"}`}
          onMouseEnter={desktop ? handleMouseEnter : undefined}
          onMouseLeave={desktop ? handleMouseLeave : undefined}
        >
          {/* Main link */}
          <Link href="/aboutus" className={`${baseStyle} ${mobileStyle} flex items-center gap-1`}>
            About Us
          </Link>

          {/* Mobile arrow toggle */}
          {mobile && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsAboutOpen(!isAboutOpen);
              }}
              className="text-white ml-1"
            >
              <ChevronDown size={16} className={`${isAboutOpen ? "rotate-180" : ""} transition-transform`} />
            </button>
          )}

          {/* Desktop Dropdown */}
          {desktop && isAboutHover && (
            <div
              className="absolute left-0 top-full mt-2 bg-teal-600 shadow-lg rounded animate-fadeIn w-40 z-[9999]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <DropdownLinks />
            </div>
          )}

          {/* Mobile Dropdown */}
          {mobile && isAboutOpen && (
            <div className="pl-4 animate-fadeIn">
              <DropdownLinks mobile />
            </div>
          )}
        </div>


      <Link href="/chapters" className={`${baseStyle} ${mobileStyle}`}>
        Chapters
      </Link>
      <Link href="/lessons" className={`${baseStyle} ${mobileStyle}`}>
        Lessons
      </Link>
      <Link href="/media" className={`${baseStyle} ${mobileStyle}`}>
        Media
      </Link>
      <Link href="/contact" className={`${baseStyle} ${mobileStyle}`}>
        Contact
      </Link>
      <Link href="/donate" className={`${baseStyle} ${mobileStyle}`}>
        Donate
      </Link>
      <Link href="/faq" className={`${baseStyle} ${mobileStyle}`}>
        FAQs
      </Link>
    </>
  );
}

function DropdownLinks({ mobile = false }) {
  const baseStyle =
    "block px-4 py-2 text-white hover:bg-green-400 transition-colors duration-200";
  return (
    <div>
      <Link href="#" className={baseStyle}>
        Volunteer
      </Link>
      <Link href="#" className={baseStyle}>
        Join
      </Link>
      <Link href="#" className={baseStyle}>
        Chapters
      </Link>
    </div>
  );
}
