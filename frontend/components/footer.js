'use client';

import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-teal-500 py-6">
      <div className="container mx-auto px-6 flex justify-center space-x-8 text-white text-2xl">
        
        {/* Instagram */}
        <a
          href="https://www.instagram.com/thegreencause/channel/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-200 transition-colors duration-200"
        >
          <FaInstagram />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/the-green-cause/about/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-200 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@thegreencause"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-200 transition-colors duration-200"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
