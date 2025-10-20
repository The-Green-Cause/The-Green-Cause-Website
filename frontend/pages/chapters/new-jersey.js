import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import { Mail, Instagram } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function NewJerseyChapter() {
    const images = [
    "img1.jpg",
    "img2.jpg"
  ];

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

              {/* Carousel */}
              <div className="mt-auto">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="rounded-xl"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`/njslideshow/${img}`}
                        alt={`Chapter Event ${index + 1}`}
                        className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Right: About & Achievements */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">About the Chapter</h2>
              <p className="mb-6">
                 The South Brunswick Chapter of The Green Cause is run by a board of high schoolers who are focused on educating our community about environmental issues. As a chapter we have had 3 booths at local festivals and also have worked with local libraries to run workshops with young kids. Our goals are to bring people closer to the environment by shining light on reserves and parks and getting people out in nature. We promote these values through our social media. As a team we hope to hold our own fundraisers this year.
              </p>

              {/*<h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>*/}
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
