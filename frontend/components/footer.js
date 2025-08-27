'use client';

import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-teal-500 py-6">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-4 text-white">
        
        {/* Social Icons */}
        <div className="flex space-x-8 text-2xl">
          <a
            href="https://www.instagram.com/thegreencause/channel/" // replace with your link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-200 transition-colors duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/the-green-cause/about/?viewAsMember=true" // replace with your link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-200 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.tiktok.com/@thegreencause" // replace with your link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-200 transition-colors duration-200"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-green-100">
          © 2020 The Green Cause. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
