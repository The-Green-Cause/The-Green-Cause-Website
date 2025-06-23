import Navbar from "../components/navbar";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>The Green Cause - Contact</title>
        <meta name="description" content="The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
        <Navbar />
        <div className="flex flex-col items-center px-4">
          <h1 className="text-center text-5xl mt-6 mb-10 font-lora_semibold text-emerald-700">
            CONTACT US
          </h1>

          <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-emerald-800">General and Media Inquiries</h2>
              <p className="text-gray-700">thegreencauseinitiative@gmail.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-800">Chapter Inquiries</h2>
              <p className="text-gray-700">soniagarg@thegreencause.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-800">Partner/School Collaborations</h2>
              <p className="text-gray-700">fridaruiz@thegreencause.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
