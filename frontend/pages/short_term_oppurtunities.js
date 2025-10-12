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

        
        <div className="max-w-5xl mx-auto mt-12 px-6 space-y-10 mb-20">
          <h1 className="text-3xl font-fredoka font-lora text-teal-600 mb-6">
            Short-Term Volunteering Opportunities
          </h1>
          <p className="text-gray-700 leading-relaxed">
            The following present some volunteering opportunities for those interested in receiving community service hours and getting involved in meaningful environmental work, while providing different options for varying levels of time commitment. Opportunities will be updated periodically, with new opportunities added depending on the time of year and the types of projects we&apos;re working on. You must fill the following volunteering form with each submission in order to receive your community service hours verification. If you have any questions please contact <a href="mailto:supyone@thegreencause.com" className="text-emerald-700 underline">supyone@thegreencause.com</a>.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 px-6 space-y-10">
          {[
            {
              title: "Contribute to our Environmental 101 Project",
              content:
                "Join our initiative to educate and inspire by contributing to our series of short articles on environmental topics. These pieces aim to simplify complex phenomena, using beginner-friendly language and featuring lesser-known, yet important issues. As a volunteer writer, you'll have the platform to explore topics of personal interest, express your passion for the environment, and share your voice with a wider audience. This is a flexible, short-term opportunity for anyone eager to make an impact by raising awareness and helping others better understand the environment we share",
                link:"/environmental101",
                color: "bg-teal-600"
            },
            {
              title: "Host an Environmental Event/Project",
              content:
                "If you're interested in leading a one-time event or initiating a local community project, The Green Cause is here to support you. We provide resources, including access to our financial grant  and guidance on how to plan, lead, and execute your events. These events can focus on stewardship, environmental education, or community engagement. Previously, we've hosted seminars at educational institutions and partnered as community booths at events worldwide. We are eager to explore your potential and have a lasting, genuine impact.",
                link:"/localProject",
                color: "bg-cyan-600"
            },
            {
              title: "Do an Environmental Action",
              content:
                "For those looking to start their journey by getting more personally involved, The Green Cause offers simple ways to take meaningful environmental action. We recognize that the greater responsibility for widescale impact lies with larger entities, but we also believe that the power of shifting our culture towards greater personal responsibility and appreciation for our planet. Every small step, whether discovering more about environmental issues, adopting sustainable habits, or incorporating mindful choices, helps build momentum. We encourage individuals who are ready to learn, grow, and make a small difference to embrace the potency of collective action.",
                link:"/environmentalAction",
                color: "bg-teal-700"
            },
            {
              title: "Promote The Green Cause",
              content:
                "Help us amplify our mission by sharing The Green Cause with your community! You can promote our flyers by posting them at school, local businesses, or other approved spaces, repost our social media content, or simply share our work with your peers and teachers. It's a simple way to learn more about our organization while making a lasting impact with small actions. Every voice counts in building awareness and inspiring accountability within our community. It can be as potent as following our social media and engaging with content to boost our algorithm.",
                link:"/promote",
                color: "bg-brown-600"
            }
          ].map((opp, i) => (
             <div
                key={i}
                className={`${opp.color} p-6 rounded-xl shadow-md text-white flex flex-col justify-between`}
            >   
            <div>
                <h2 className="text-xl font-semibold mb-3">{opp.title}</h2>
                <p className="text-sm leading-relaxed mb-4">{opp.content}</p>
            </div>

            <a
                href={opp.link}
                rel="noopener noreferrer"
                className="inline-block bg-white text-teal-700 px-5 py-2 mt-4 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
            >
                Get Involved
            </a>
    </div>
  ))}
</div>

        <Footer />
      </div>
    </>
  );
}
