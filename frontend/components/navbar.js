import Image from 'next/image';
import Link from 'next/link';
//test comment
export default function Navbar() {
  return (
    <header className="bg-black w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center px-5">
          <div className="h-12 w-12 bg-gray-400 rounded"><Image src="/logo.png" alt="logo" width={500} height={500}></Image></div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Home</Link>
          <Link href="/aboutus" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">About Us</Link>
          <Link href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Teams</Link>
          <Link href="/lessons" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Lessons</Link>
          <Link href="/joinus" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Join Us</Link>
          <Link href="#" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">Contact</Link>
          <Link href="/faq" className="text-white font-semibold hover:text-green-200 transition-colors duration-200">FAQs</Link>
        </div>
      </nav>
    </header> 
  );
}
