'use client';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaLeaf } from 'react-icons/fa';
import Link from 'next/link';

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Leaf icon with bounce */}
        <FaLeaf className="text-green-700 w-12 h-12 mb-4 animate-bounce" />

        <h1 className="text-4xl font-fredoka text-green-800 mb-6">
          Volunteer with Us
        </h1>

        <p className="text-gray-700 mb-12 max-w-2xl">
          Join The Green Cause in making a real impact on our environment!  
          As a volunteer, you’ll help with events, community outreach, educational programs, and more.  
          Click the button below to fill out our volunteer sign-up form.
        </p>

        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brown-500 hover:bg-brown-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
        >
          Sign Up to Volunteer
        </Link>
      </main>

      <Footer />
    </div>
  );
}
