import Head from "next/head";
import Navbar from "../components/navbar"; 
import Footer from "../components/footer";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

export default function Apply() {
  return (
    <>
      <Head>
        <title>The Green Cause - Apply</title>
        <meta name="description" content="The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Content Section */}
        <main className="flex-grow container mx-auto px-6 py-12 text-center">
          {/* Icon */}
          <FaUsers className="text-green-700 w-12 h-12 mx-auto mb-4 animate-bounce" />

          <h1 className="text-3xl md:text-4xl font-fredoka text-green-800 mb-6">
            Apply to Join Our Team
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for passionate individuals who want to make a
            difference in environmental advocacy and sustainability. As a team
            member of <span className="font-semibold">The Green Cause</span>, 
            you&apos;ll help lead initiatives, support local chapters, and contribute 
            to our mission of creating a greener future.
          </p>

          <Link
            href="https://forms.gle/Au6DcWvYAs8iWJvy7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown-500 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
          >
            Apply Now
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
