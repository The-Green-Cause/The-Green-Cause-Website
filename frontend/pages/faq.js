import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
  const faqs = [
    {
      question: "How do we ensure the quality of our lessons?",
      answer: `Not only do our Environmental Education leads ensure every lesson follows The Three Pillars, 
      but we are also forming a teacher advisory council to review and fact-check our lessons.`,
      linkText: "If you’re a formal educator interested in joining the advisory council, fill out this form.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScXy6WIhomRQlooGNpMdYMmiI-_TOCDyklPf516s4R9xWu3Kg/viewform"
    },
    {
      question: "Are the lessons and presentations free?",
      answer: `Yes! Our goal is to make environmental education accessible to all. 
      Our content is completely free for teachers, and our members receive community service hours for their hard work.`
    },
    {
      question: "Are you solely New Jersey-based?",
      answer: `Although we started in New Jersey, we welcome collaborations with schools from anywhere!`
    },
    {
      question: "Why are high school students creating the lessons?",
      answer: `We want to empower high school students to make an impact in their communities by not only learning 
      about the environment but also educating younger students. Younger kids tend to look up to older students, 
      and teachers have noted that this peer-to-peer learning model is effective.

      Additionally, volunteers gain valuable skills in presentation making, which benefits them in college and their careers.`
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>The Green Cause - Home</title>
        <meta name="description" content="The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow max-w-3xl mx-auto mt-10 px-6 w-full">
          <h1 className="font-merriweather italic text-3xl text-center mb-8 text-emerald-700">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-2">
                <button
                  className="w-full text-left font-semibold text-lg flex justify-between items-center py-3 text-emerald-700"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                  {faq.link && (
                    <p className="mt-2">
                      <a
                        href={faq.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline"
                      >
                        {faq.linkText}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
