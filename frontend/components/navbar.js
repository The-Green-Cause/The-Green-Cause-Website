'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile main menu
  const [openDropdown, setOpenDropdown] = useState(null); // Track which mobile dropdown is open
  const [hoverDropdown, setHoverDropdown] = useState(null); // Track which desktop dropdown is hovered
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (key) => {
    clearTimeout(hoverTimeout.current);
    setHoverDropdown(key);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoverDropdown(null);
    }, 150);
  };

  return (
    <header className="bg-teal-500 w-full relative z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center px-5">
          <div className="h-14 w-14 rounded">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={5000} height={5000} />
            </Link>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks
            desktop
            hoverDropdown={hoverDropdown}
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
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        </div>
      )}
    </header>
  );
}

function NavLinks({
  mobile = false,
  desktop = false,
  openDropdown,
  setOpenDropdown,
  hoverDropdown,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const baseStyle =
    'text-white font-cabin font-semibold hover:text-green-200 transition-colors duration-200';
  const mobileStyle = mobile ? 'block py-2' : '';

  return (
    <>
      <Link href="/" className={`${baseStyle} ${mobileStyle}`}>
        Home
      </Link>

      {/* About Us with 1 dropdown link */}
      <DropdownWrapper
        label="About Us"
        href="/aboutus"
        mobile={mobile}
        desktop={desktop}
        dropdownKey="about"
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        hoverDropdown={hoverDropdown}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      >
        <Link
          href="/ourTeam"
          className="block px-4 py-2 text-white hover:bg-green-400 transition-colors duration-200"
        >
          Our Team
        </Link>
      </DropdownWrapper>

      {/* Join with 3 dropdown links */}
      <DropdownWrapper
        label="Join"
        href="/joinus"
        mobile={mobile}
        desktop={desktop}
        dropdownKey="join"
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        hoverDropdown={hoverDropdown}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      >
        <Link

          href="/volunteer_opportunities"
          className="block px-4 py-2 text-white hover:bg-green-400 transition-colors duration-200"
        >
          Volunteer
        </Link>
        <Link
          href="/apply"
          className="block px-4 py-2 text-white hover:bg-green-400 transition-colors duration-200"
        >
          Apply for Our Team
        </Link>
        <Link
          href="/chapters"
          className="block px-4 py-2 text-white hover:bg-green-400 transition-colors duration-200"
        >
          Chapters
        </Link>
      </DropdownWrapper>
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

function DropdownWrapper({
  label,
  href,
  children,
  mobile,
  desktop,
  dropdownKey,
  openDropdown,
  setOpenDropdown,
  hoverDropdown,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const baseStyle =
    'text-white font-cabin font-semibold hover:text-green-200 transition-colors duration-200';
  const mobileStyle = mobile ? 'block py-2' : '';

  return (
    <div
      className={`relative ${mobile ? '' : 'group'}`}
      onMouseEnter={desktop ? () => handleMouseEnter(dropdownKey) : undefined}
      onMouseLeave={desktop ? handleMouseLeave : undefined}
    >
      <Link href={href} className={`${baseStyle} ${mobileStyle} flex items-center gap-1`}>
        {label}
      </Link>

      {/* Mobile arrow toggle */}
      {mobile && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
          }}
          className="text-white ml-1"
        >
          <ChevronDown
            size={16}
            className={`${
              openDropdown === dropdownKey ? 'rotate-180' : ''
            } transition-transform`}
          />
        </button>
      )}

      {/* Desktop Dropdown */}
      {desktop && hoverDropdown === dropdownKey && (
        <div
          className="absolute left-0 top-full mt-2 bg-teal-600 shadow-lg rounded animate-fadeIn w-40 z-[9999]"
          onMouseEnter={() => handleMouseEnter(dropdownKey)}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      )}

      {/* Mobile Dropdown */}
      {mobile && openDropdown === dropdownKey && (
        <div className="pl-4 animate-fadeIn">{children}</div>
      )}
    </div>
  );
}
