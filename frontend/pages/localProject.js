import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Link from "next/link";

export default function localProject() {
  return (
    <>
      <Head>
        <title>The Green Cause - Local Project</title>
        
      </Head>

      <Navbar />

      <div className="max-w-4xl mx-auto mt-12 px-6 mb-20">
        <h1 className="text-3xl font-fredoka font-lora text-cyan-600 mb-6 text-center">
          Host a Local Environmental Project
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Help bring environmental action to your community by hosting a local education or stewardship (volunteering oriented) event that aligns with The Green Cause&apos;s mission. Start by joining our Slack and select the #communityevents channel, then share your idea for a small event you&apos;d like to lead. Whether it&apos;s a park clean-up, tree planting, recycling drive, or another creative initiative, we encourage volunteers to make an impact close to home. We will provide resources and financial aid for event related costs. 
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
                href="https://join.slack.com/t/thegreencause/shared_invite/zt-g376q3zk-EN8vM9bk26fjduNDU8r54A"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
            >
                Join our Slack
            </a>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
            To earn volunteer hours, you&apos;ll need to send us relevant pictures or short videos along with a description of the event and attendance numbers. Videos do not need to show your face, but if they do, you&apos;ll also submit a social media consent form with your materials. 
        </p>


        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
                href="https://docs.google.com/forms/d/1fZF3RnjzvrLT88wbid-i6hORU6FiUddyKaz88yn1QwY/prefill"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
            >
                Submit your Hours
            </a>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
            Once you&apos;ve joined the slack, given a brief introduction in the #communityevents channel, and submitted your proposal, a team representative will review everything and get back to you with next steps.
            Fill out the following form to get started! 
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
                href="https://forms.gle/T9zv2ZVKJrrowMQJA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
            >
                Submit your Proposal
            </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
