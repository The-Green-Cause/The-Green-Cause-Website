import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Link from "next/link";

export default function Environmental101() {
  return (
    <>
      <Head>
        <title>The Green Cause - Environmental 101 Project</title>
        <meta name="description" content="Volunteer for The Green Cause Environmental 101 Project" />
      </Head>

      <Navbar />

      <div className="max-w-4xl mx-auto mt-12 px-6 mb-20">
        <h1 className="text-3xl font-fredoka font-lora text-teal-600 mb-6 text-center">
          Contribute to our Environmental 101 Project
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Be part of our Environmental 101 Project, where volunteers create accessible resources to help communities better understand today&apos;s most pressing environmental issues. To get started, join our Slack workspace and fill out the form below.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
                href="https://join.slack.com/t/thegreencause/shared_invite/zt-g376q3zk-EN8vM9bk26fjduNDU8r54A"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
            >
                Join our Slack
            </a>

            <a
                href="https://forms.gle/AcTQRgfnvFkS4yEY6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition w-full md:w-auto text-center"
            >
                Fill Out the Form
            </a>
        </div>


        <p className="text-gray-700 leading-relaxed mb-6">
            To fill out the form, you should have a research{" "}
            <a
                href="https://google.com"
                className="text-emerald-700 underline hover:text-emerald-900"
            >
                outline
            </a>{" "}
            prepared, including your topic of interest and a general outline of the article with sources. You&apos;ll research your chosen subject and write an engaging article that not only explains the issue but also highlights how readers can take action. Once you submit the form, join the slack, and give a brief introduction in the #environmental101project channel, a team representative will reach out to you for next steps.{" "}
        </p>

        <p className="text-gray-700 leading-relaxed">
            Not sure what topic to write on? Check out our topic ideas {""}
            <a
                href="https://google.com"
                className="text-emerald-700 underline hover:text-emerald-900"
            >
                outline
            </a>{" "} 
            for inspiration{" "}.
        </p>
      </div>

      <Footer />
    </>
  );
}
