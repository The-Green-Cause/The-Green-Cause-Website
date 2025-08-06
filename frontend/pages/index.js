import { useEffect, useRef } from 'react';
import Navbar from "../components/navbar";
import Head from "next/head";
import Link from 'next/link';
import ImageCarousel from '../components/carousel';

export default function Home() {
  const sponsorRefs = useRef([]);
  const partnerRefs = useRef([]);

  const logos = [
    'beyond_plastics.png',
    'seeds_of_caring.png',
    'sustainable_haus.png',
    'ANJEE.png',
    'climaterealityproject.png',
    'columbia.png',
    'youthify.png',
  ];

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

    [...sponsorRefs.current, ...partnerRefs.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      [...sponsorRefs.current, ...partnerRefs.current].forEach((ref) => {
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
        <div id="imagebg" className="flex flex-col lg:flex-row bg-lightTan w-full overflow-hidden">
  {/* Text + Button */}
  <div className="flex flex-col justify-center items-center text-center px-4 py-10 lg:w-1/2 z-10">
    <p className="text-emerald-700 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-6xl font-lora_semibold">
      Earth&apos;s future, <br />Our Mission
    </p>
    <p className="text-emerald-700 text-xl md:text-2xl lg:text-3xl xl:text-3xl mt-5 font-poppins max-w-2xl">
      Planting the seeds of knowledge to educate and empower generations to a thriving earth and sustainable future
    </p>
    <button className="mt-8 text-lightTan font-bold bg-brown-500 py-2 px-5 rounded font-lora_semibold">
      <Link href="/aboutus">Join Us!</Link>
    </button>
  </div>

  {/* Carousel */}
  <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[60vh] flex justify-center items-center overflow-hidden">
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

          <Link href="/aboutus#join" className="relative group">
            <div className="relative text-center p-20 font-croissant_one text-white">
              <div
                className="absolute inset-0 bg-cover bg-gray-300 opacity-30 group-hover:opacity-40 transition"
                style={{ backgroundImage: "url('join.png')" }}
              ></div>
              <div className="absolute inset-0 bg-green-700 opacity-40 group-hover:opacity-50 transition"></div>
              <span className="relative z-10 text-2xl">Join</span>
            </div>
          </Link>

          <Link href="/donate" className="relative group">
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

        {/* Our Sponsors Section */}
        <div className="flex flex-col items-center my-20 px-6 text-center">
          <h3 className="font-merriweather_italic text-3xl md:text-4xl mb-10 text-emerald-700">
            Our Sponsors
          </h3>
          <div
            ref={(el) => (sponsorRefs.current[0] = el)}
            className="flex justify-between items-center w-full opacity-0 translate-y-10 transition duration-1000 ease-in-out"
          >
            {['arch.png'].map((fileName, i) => (
              <img
                key={fileName}
                src={`/sponsors/${fileName}`}
                alt={`Sponsor ${i + 1}`}
                className="flex-1 h-36 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* Our Collaborators Section */}
        <div className="flex flex-col items-center my-20 px-4 sm:px-6 md:px-8 text-center">
          <h3 className="font-merriweather_italic text-3xl md:text-3xl mb-10 text-emerald-700">
            Our Collaborators
          </h3>

          {/* TEXT + SLIDER LAYOUT */}
          <div className="flex flex-col lg:flex-row items-center gap-10 w-full">

            {/* Slider */}
            <div className="w-full overflow-hidden">
              <div className="flex items-center gap-8 md:gap-12 lg:gap-16 animate-marquee min-w-full">
                {[...logos, ...logos].map((fileName, i) => (
                  <img
                    key={`${fileName}-${i}`}
                    src={`/partners/${fileName}`}
                    alt={`Collaborator ${i + 1}`}
                    className="h-20 md:h-28 lg:h-36 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
