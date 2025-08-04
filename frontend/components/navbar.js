'use client'; // Needed if you're using useState in Next.js app router

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional: Lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-500 w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center px-5">
          <div className="h-14 w-14 rounded">
            <Image src="/logo.png" alt="logo" width={5000} height={5000} />
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-2">
          <NavLinks mobile />
        </div>
      )}
    </header>
  );
}

function NavLinks({ mobile = false }) {
  const baseStyle = "text-white font-cabin font-semibold hover:text-green-200 transition-colors duration-200";
  const mobileStyle = mobile ? "block py-2" : "";

  return (
    <>
      <Link href="/" className={`${baseStyle} ${mobileStyle}`} >Home</Link>
      <Link href="/aboutus" className={`${baseStyle} ${mobileStyle}`}>About Us</Link>
      <Link href="/chapters" className={`${baseStyle} ${mobileStyle}`}>Chapters</Link>
      <Link href="/lessons" className={`${baseStyle} ${mobileStyle}`}>Lessons</Link>
      <Link href="/media" className={`${baseStyle} ${mobileStyle}`}>Media</Link>
      <Link href="/contact" className={`${baseStyle} ${mobileStyle}`}>Contact</Link>
      <Link href="/donate" className={`${baseStyle} ${mobileStyle}`}>Donate</Link>
      <Link href="/faq" className={`${baseStyle} ${mobileStyle}`}>FAQs</Link>
    </>
  );
}
