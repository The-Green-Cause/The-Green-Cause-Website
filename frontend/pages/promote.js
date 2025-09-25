import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

export default function Promote() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>The Green Cause - Promote</title>
      </Head>

      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-3xl sm:text-4xl font-fredoka font-lora text-teal-600 mb-8 text-center">
          Promote The Green Cause
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8 text-center sm:text-left">
          Help spread awareness about The Green Cause by sharing our message in your community! You can print and post our updated flyers, posters, or promotional materials (with permission) around your school, town, or other local spaces to earn 0.5 hours of community service. Once you&apos;ve completed your outreach, simply submit proof through our form, and a team representative will confirm your hours.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <a
            href="https://forms.gle/1LTMmbaBaeah4jkF7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
          >
            Submit Proof Here
          </a>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 text-center sm:text-left">
          To earn your community service hours, you must submit photos of your outreach or detail why this may not be applicable. We do not require you to show your face for the submission and it isn&apos;t recommended.
        </p>
      </main>

      <Footer />
    </div>
  );
}
