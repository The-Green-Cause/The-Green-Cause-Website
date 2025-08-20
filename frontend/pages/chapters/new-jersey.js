import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import { Mail, Instagram } from "lucide-react";

export default function NewJerseyChapter() {
  return (
    <>
      <Head>
        <title>New Jersey Chapter | The Green Cause</title>
        <meta name="description" content="New Jersey Chapter of The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow bg-gray-50 p-6">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">

            {/* Left: Chapter Lead & Contact */}
            <div className="bg-green-100 p-8">
              <h2 className="text-2xl font-bold mb-4">Chapter Lead</h2>
              <p className="mb-4"><strong>President:</strong> Harshanna Prasanna</p>

              <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
              <div className="flex space-x-6 mt-4">
                <a href="mailto:itsharshanna@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail size={28} className="text-green-800 hover:text-green-900" />
                </a>
                <a href="https://www.instagram.com/sb_greencause" target="_blank" rel="noopener noreferrer">
                  <Instagram size={28} className="text-pink-600 hover:text-pink-800" />
                </a>
              </div>
            </div>

            {/* Right: About & Achievements */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">About the Chapter</h2>
              <p className="mb-6">
                The New Jersey Chapter is our domestic branch, located in South Brunswick. We&apos;re empowering local youth to lead sustainability efforts through education, events, and grassroots movements.
              </p>

              <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
              <ul className="space-y-4">
                
              </ul>
            </div>

          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
