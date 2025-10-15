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

          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Join Our Internal Team
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for passionate individuals who want to make a 
            difference in environmental advocacy and sustainability! As part of our internal 
            team, you&apos;ll help  <span className="font-semibold">lead initiatives, support 
            local chapters, and contribute to our mission </span> of creating a greener 
            future. You can either apply to be a team lead to join one of our two internal
            teams, our environmental education or social media teams. Start by filling out
            one of the two forms depending on how you want to be involved: 
          </p>

          <Link href="https://forms.gle/3FY6khB5ETa25iHu7 " 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-brown-500 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors" 
          > 
            Internal Team Member Application 
          </Link> 
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8"> 
            As team lead, you will be able to gain leadership experience and help create the 
            vision of our organization. 
          </p> 
            
          <Link href="​​https://forms.gle/C38xCoVV9MFvTS4q8 " 
            target="_blank" rel="noopener noreferrer" 
            className="inline-block bg-brown-500 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors" 
          > 
            Internal Team Lead Application 
          </Link> 
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8"> 
            As a team member, you get the chance to create content that will receive engagement 
            from schools, educators, STEM programs, camps, public events, and our online audiences! 
            Creating social media content and our environmental educational curriculum is vital to 
            growing our organization. 
          </p>
         
        
        </main>
        <Footer />
      </div>
    </>
  );
}
