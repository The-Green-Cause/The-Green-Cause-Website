import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from 'next/link';
import ImageCarousel from '../components/carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Green Cause - Home</title>
        <meta name="description" content="The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Navbar/>
        <div id="imagebg" className="flex justify-center items-center bg-green-900 w-full h-[60vh] overflow-hidden">
          <div className="text-center ml-24">
            <p className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-6xl">
              Earth's future, Our Mission
            </p>
            <p className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-4xl">
              Planting the seeds of knowledge to educate and empower generations to a thriving earth and sustainable future
            </p>
            <button className="mt-10 text-black font-bold bg-white py-2 px-5 rounded">Join Us!</button>
          </div>
          <div className="relative w-full h-[60vh] flex justify-center items-center overflow-hidden">
          <div className="absolute w-full h-full">
            <ImageCarousel />
          </div>
        </div>
        </div>
        <div className="flex flex-col items-center my-7">
        <h3 className="font-merriweather_italic text-2xl md:text-3xl text-center mb-6">Who We Are</h3>
        <div className="max-w-5xl self-center text-center">
        The Green Cause is a youth-led environmental organization dedicated to promoting sustainability and environmental awareness. 
        Through engaging educational workshops, community initiatives, and our chapters, we empower the youth and communities to take 
        action in protecting our planet. Our mission is rooted in collaboration, innovation, and inspiring the next generation to lead 
        sustainable lifestyles and create lasting impact.
        </div>
        <div className="grid grid-cols-3 gap-24 my-7">
            {/* Partner With Us */}
            <div className="relative text-center p-28 font-croissant_one">
              <div
                className="absolute inset-0 bg-cover bg-gray-300 opacity-30"
                style={{ backgroundImage: "url('partner.png')" }}
              ></div>
              <div className="absolute inset-0 bg-green-700 opacity-40"></div>
              <Link href="#" className="relative z-10">Partner With Us</Link>
            </div>

            {/* Join */}
            <div className="relative text-center p-28 font-croissant_one">
              <div
                className="absolute inset-0 bg-cover bg-gray-300 opacity-30"
                style={{ backgroundImage: "url('join.png')" }}
              ></div>
              <div className="absolute inset-0 bg-green-700 opacity-40"></div>
              <Link href="#" className="relative z-10">Join</Link>
            </div>

            {/* Contribute */}
            <div className="relative text-center p-28 font-croissant_one">
              <div
                className="absolute inset-0 bg-cover bg-gray-300 opacity-30"
                style={{ backgroundImage: "url('contribute.png')" }}
              ></div>
              <div className="absolute inset-0 bg-green-700 opacity-40"></div>
              <Link href="#" className="relative z-10">Contribute</Link>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}
