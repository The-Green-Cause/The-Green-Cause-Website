import Navbar from "../../components/navbar";
import Head from "next/head";
import { Mail, Instagram } from "lucide-react"; // Add more icons as needed

export default function NewJerseyChapter() {
  return (
    <>
      <Head>
        <title>New Jersey Chapter | The Green Cause</title>
      </Head>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          
          {/* Left: Chapter Lead & Contact */}
          <div className="bg-green-100 p-8">
            <h2 className="text-2xl font-bold mb-4">Chapter Lead</h2>
            <p className="mb-4"><strong>Name:</strong> Harshanna Prasanna</p>

            <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
            <div className="flex space-x-6 mt-4">
              <a href="mailto:itsharshanna@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail size={28} className="text-green-800 hover:text-green-900" />
              </a>
              <a href="https://www.instagram.com/sb_greencause" target="_blank" rel="noopener noreferrer">
                <Instagram size={28} className="text-pink-600 hover:text-pink-800" />
              </a>
              {/* Add more icons if needed */}
            </div>
          </div>

          {/* Right: About & Achievements */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">About the Chapter</h2>
            <p className="mb-6">
              The New Jersey Chapter is our first branch, located in Union. We&apos;re empowering local youth to lead sustainability efforts through education, events, and grassroots movements.
            </p>

            <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">March 11, 2025 – Tree Planting Campaign</p>
                <p>One of the chapter leaders, Roy Odusote, at the University of Ibadan hosted a workshop with about 175 students in attendance at the community high school in Ajaba, Oyo State. The content of the workshop was focused on eco-restoration and branched into discussing the ecological state in Nigeria and its multidimensional impact on their community (i.e climate and weather patterns, soil quality and degradation, biodiversity and pest management, water availability and quality, and human health). This was the first of many workshops that this chapter plans to host over the next couple of months. The funding from Arch Foundation will help improve the quality and impact of these workshops. </p>
              </li>
              <li>
                <p className="font-semibold">February 15, 2025 – Sustainability Workshop</p>
                <p>We hosted our first workshop in the botanical garden at the University of Ibadan. The funding for this project included reserving the space to host over 300 community members and deliver an impactful presentation about eco-restoration. 
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
