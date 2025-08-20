import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>The Green Cause - Home</title>
                <meta name="description" content="The Green Cause" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div>
                <Navbar />
                <div className="max-w-2xl mx-auto text-center mt-10 px-6">
                    <h1 className="text-3xl font-fredoka font-lora text-emerald-700 mb-6">
                        ORIGINS
                    </h1>
                    <p className="text-gray-700 leading-relaxed">
                        The Green Cause was founded by Frida Ruiz and Bianca Palomino.
                        When Frida noticed the lack of environmental education in her town, she aimed to
                        provide young people with the knowledge necessary to spark urgency for the future.
                        Bianca resonated with this mission, realizing that her town also lacked environmental
                        awareness in public education.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        During the peak of the pandemic, Frida and Bianca worked to recruit members and
                        connect with schools—first within their counties, then expanding across New Jersey.
                        They also presented at panels advocating for youth leadership and environmental change.
                    </p>
                </div>

                <div className="text-center mt-10 px-6">
                    <h1 className="text-3xl font-fredoka font-lora mb-10 text-emerald-600">
                        OUR THREE PILLARS
                    </h1>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Engagement",
                                content:
                                    "We ensure our presentations are engaging through visuals, aesthetics, and interactive styles. Lessons include excerpts from media, comprehension questions, and hands-on activities like mini demonstrations and experiments."
                            },
                            {
                                title: "Solution-Based Learning",
                                content:
                                    "Environmental education often focuses on problems, but solutions and tangible actions are less emphasized. Our work bridges this gap by showcasing practical solutions, environmental resources, and youth-led initiatives."
                            },
                            {
                                title: "Considering the Impacts",
                                content:
                                    "We emphasize real-world impacts of climate change, particularly on underserved communities. Lessons highlight actual events, affected people, and environmental injustices to foster awareness and action."
                            }
                        ].map((pillar, index) => (
                            <div
                                key={index}
                                className="bg-emerald-600 text-white p-6 rounded-xl shadow-lg"
                            >
                                <h2 className="text-xl font-semibold mb-3">{pillar.title}</h2>
                                <p className="text-sm leading-relaxed">{pillar.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* JOIN US Section */}
                <div id="join" className="bg-emerald-700 text-white mt-16 py-16 px-6">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                        {/* Left Text Block */}
                        <div className="md:w-1/2 text-center">
                            <h1 className="text-3xl font-semibold font-lora mb-6">JOIN US</h1>
                            <p className="leading-relaxed text-lg mb-4">
                                As we expand our organization across different chapters, we are excited to grow our team!
                                Our goal is to have chapter coordinators who can support various time zones, geographical
                                differences, and chapter-specific needs.
                            </p>
                            <p className="leading-relaxed text-lg">
                                If you’re interested in getting more involved, fill out the form below!
                                We review applications on a rolling basis and typically respond every two weeks.
                            </p>
                        </div>

                        {/* Right Button Block */}
                        <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdLRDZQk9B-d8kuFSL66o5g_Gm5P0P5Z3xr3WERNX4ewrhtYA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-white text-emerald-700 text-xl font-bold px-10 py-5 rounded-xl shadow-xl hover:bg-gray-100 transition-all">
                                    Join Us!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
