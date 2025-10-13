import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Link from "next/link";

export default function environmentalAction() {
  return (
    <>
      <Head>
        <title>The Green Cause - Environmental Action</title>
        
      </Head>

      <Navbar />

      <div className="max-w-4xl mx-auto mt-12 px-6 mb-20">
        <h1 className="text-3xl font-fredoka font-lora text-teal-700 mb-6 text-center">
          Do an Environmental Action
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Submit an Environmental Action to earn community service hours while engaging more environmentally through actions like reducing waste, composting, biking instead of driving, or joining a local clean-up. To earn community service hours, you must submit photos or short videos of your action along with a brief explanation of what you did, why you chose it, and what you learned on the following google form.  
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="https://forms.gle/Hs813rXHqwAM41329"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
            >
                Submission Form
            </a>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about what counts  for community service please contact {" "}
            <a
              href="mailto:supyone@thegreencause.com"
              className="text-emerald-700 underline hover:text-emerald-900"
            >
              supyone@thegreencause.com
              </a>{" "}
            as we may not be able to accept all actions. Please look at the following guiding document for a list of some actions that may or may not be part of this opportunity. {" "}
        </p>


        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="Not sure what to do?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
            >
              Environmental Action Guide
            </a>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Videos and images do not need to show your face but if they do, you need to submit a social media consent form alongside your submission to earn your hours. We will notify you if we decide to post your action on our social media platforms. 

        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="https://docs.google.com/forms/d/1fZF3RnjzvrLT88wbid-i6hORU6FiUddyKaz88yn1QwY/prefill"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
            >
              Social Media Consent Form
            </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
