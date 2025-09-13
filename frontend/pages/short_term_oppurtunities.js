import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Link from "next/link";

export default function Opportunities() {
  return (
    <>
      <Head>
        <title>The Green Cause - Opportunities</title>
        <meta name="description" content="Short-term volunteering opportunities at The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
        <Navbar />

        
        <div className="max-w-5xl mx-auto mt-10 px-6 text-center">
          <h1 className="text-3xl font-fredoka font-lora text-emerald-700 mb-6">
            Short-Term Volunteering Opportunities
          </h1>
          <p className="text-gray-700 leading-relaxed">
            The following opportunities allow you to earn community service hours while 
            engaging in meaningful environmental work. Each option fits different levels 
            of time commitment, and new opportunities will be added throughout the year. 
            To receive verification, you must fill out the volunteering form with each submission. 
            Questions? Email <a href="mailto:supyone@thegreencause.com" className="text-emerald-700 underline">supyone@thegreencause.com</a>.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 px-6 space-y-10">
          {[
            {
              title: "Contribute to our Environmental 101 Project",
              content:
                "Help us educate and inspire by writing beginner-friendly articles on environmental topics. As a volunteer writer, you’ll simplify complex issues, highlight lesser-known topics, and share your voice with a wider audience."
            },
            {
              title: "Host an Environmental Event/Project",
              content:
                "Lead a one-time event or project in your community. We’ll provide resources, financial support, and guidance. Past events include school seminars, cleanups, and international community booths."
            },
            {
              title: "Do an Environmental Action",
              content:
                "Take meaningful personal steps like composting, reducing waste, or joining a cleanup. Small changes build collective impact and help spread sustainable culture."
            },
            {
              title: "Promote The Green Cause",
              content:
                "Support us by spreading the word! Post flyers, share on social media, or talk with peers and teachers. Every voice helps amplify our mission."
            }
          ].map((opp, i) => (
            <div
              key={i}
              className="bg-[#c5cfad] p-6 rounded-xl shadow-md text-white"
            >
              <h2 className="text-xl font-semibold mb-3">{opp.title}</h2>
              <p className="text-sm leading-relaxed">{opp.content}</p>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
