import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-black w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center px-5">
          <div className="h-12 w-12 bg-gray-400 rounded"></div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Home</a>
          <a href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">About Us</a>
          <a href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Teams</a>
          <a href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">The Bulletin</a>
          <a href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Join Us</a>
          <a href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Contact</a>
          <a href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Donate</a>
          <a href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">FAQs</a>
        </div>
      </nav>
    </header>
  );
}
