import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Link from 'next/link';

export default function Donate() {
  return (
    <>
      <Head>
        <title>The Green Cause - Donate</title>
        <meta name="description" content="Donate to support The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
        <Navbar />
        
        {/* Hero Section */}
        <div className="flex justify-center items-center bg-lightTan w-full h-[60vh] overflow-hidden">
          <div className="text-center ml-22 z-10">
            <p className="text-emerald-700 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-6xl mr-1 ml-1 font-lora_semibold">
              Your Support Matters
            </p>
            <p className="text-emerald-500 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-3xl mt-5 font-poppins">
              Join us in making a difference by donating today!
            </p>
          </div>
        </div>

        {/* Donation Information Section */}
        <div className="flex flex-col items-center my-20 px-6 text-center">
          <h3 className="font-merriweather_italic text-3xl md:text-4xl mb-6 text-teal-500">
            Interested in supporting? Please donate below!
          </h3>
          <p className="max-w-4xl text-lg leading-relaxed mb-6">
            Any and all donations go towards helping our team of dedicated individuals make your experience as a supporter greater. 
            As our initiative grows, financial support is one of our most important stepping stones in reaching more people and 
            working towards our ultimate goal of spreading awareness and educating everyone on the current state of our Earth.
          </p>
          <p className="max-w-4xl text-lg leading-relaxed mb-6">
            Furthermore, our fiscal-sponsorship with The Hack Foundation means that any and all donations you make can be considered 
            for a tax write-off. Every donation counts toward our cause, and is greatly appreciated.
          </p>

          {/* Donation Button */}
          <Link href="https://hcb.hackclub.com/donations/start/the-green-cause" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-black font-bold bg-white py-3 px-8 rounded-full text-xl font-lora_semibold hover:bg-brown-500 hover:text-white transition duration-300">
            Donate Now
          </Link>
        </div>
        <Footer/>
      </div>
    </>
  );
}
