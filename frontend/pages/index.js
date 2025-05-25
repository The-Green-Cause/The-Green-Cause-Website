import { useEffect, useRef } from 'react';
import Navbar from "../components/navbar";
import Head from "next/head";
import Link from 'next/link';
import ImageCarousel from '../components/carousel';

export default function Home() {
  const partnerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );

    partnerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      partnerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>The Green Cause - Home</title>
        <meta name="description" content="The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Navbar />
        <div id="imagebg" className="flex justify-center items-center bg-emerald-700 w-full h-[60vh] overflow-hidden">
          <div className="text-center ml-22 z-10">
            <p className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-6xl mr-1 ml-1 font-lora_semibold">
              Earth&apos;s future, <br />Our Mission
            </p>
            <p className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-3xl mt-5 font-poppins">
              Planting the seeds of knowledge to educate and empower generations to a thriving earth and sustainable future
            </p>
            <button className="mt-8 text-black font-bold bg-white py-2 px-5 rounded font-lora_semibold">Join Us!</button>
          </div>
          <div className="relative w-full h-[60vh] flex justify-center items-center overflow-hidden">
            <div className="absolute w-full h-full">
              <ImageCarousel />
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="flex flex-col items-center my-10 px-6 text-center">
          <h3 className="font-merriweather_italic text-3xl md:text-3xl mb-6 text-emerald-700">
            Who We Are
          </h3>
          <p className="max-w-4xl text-lg leading-relaxed">
            The Green Cause is a youth-led environmental organization dedicated 
            to promoting sustainability and environmental awareness. Through engaging 
            educational workshops, community initiatives, and our chapters, we empower 
            youth and communities to take action in protecting our planet. Our mission 
            is rooted in collaboration, innovation, and inspiring the next generation 
            to lead sustainable lifestyles and create lasting impact.
          </p>
        </div>

        {/* Action Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-10">
          {/* Partner With Us */}
          <Link href="/contact" className="relative group">
            <div className="relative text-center p-20 font-croissant_one text-white">
              <div
                className="absolute inset-0 bg-cover bg-gray-300 opacity-30 group-hover:opacity-40 transition"
                style={{ backgroundImage: "url('partner.png')" }}
              ></div>
              <div className="absolute inset-0 bg-green-700 opacity-40 group-hover:opacity-50 transition"></div>
              <span className="relative z-10 text-2xl">Partner With Us</span>
            </div>
          </Link>

          {/* Join */}
          <Link href="/joinus" className="relative group">
            <div className="relative text-center p-20 font-croissant_one text-white">
              <div
                className="absolute inset-0 bg-cover bg-gray-300 opacity-30 group-hover:opacity-40 transition"
                style={{ backgroundImage: "url('join.png')" }}
              ></div>
              <div className="absolute inset-0 bg-green-700 opacity-40 group-hover:opacity-50 transition"></div>
              <span className="relative z-10 text-2xl">Join</span>
            </div>
          </Link>

          {/* Donate */}
          <Link href="#" className="relative group">
            <div className="relative text-center p-20 font-croissant_one text-white">
              <div
                className="absolute inset-0 bg-cover bg-gray-300 opacity-30 group-hover:opacity-40 transition"
                style={{ backgroundImage: "url('contribute.png')" }}
              ></div>
              <div className="absolute inset-0 bg-green-700 opacity-40 group-hover:opacity-50 transition"></div>
              <span className="relative z-10 text-2xl">Donate</span>
            </div>
          </Link>
        </div>

      {/* Our Partners Section */}
<div className="flex flex-col items-center my-20 px-6 text-center">
  <h3 className="font-merriweather_italic text-3xl md:text-4xl mb-10 text-emerald-700">
    Our Partners
  </h3>
  <div
    ref={(el) => (partnerRefs.current[0] = el)}
    className="flex justify-between items-center w-full opacity-0 translate-y-10 transition duration-1000 ease-in-out"
  >
    {['beyond_plastics.png', 'seeds_of_caring.png', 'sustainable_haus.png'].map((fileName, i) => (
      <img
        key={fileName}
        src={`/partners/${fileName}`}
        alt={`Partner ${i + 1}`}
        className="flex-1 h-36 w-auto object-contain"
      />
    ))}
  </div>
</div>







      </div>
    </>
  );
}
