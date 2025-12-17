import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function TeamPage() {
    const teamMembers = [
        {
            name: "Frida Ruiz",
            role: "Founder, Executive Director",
            bio: "Frida has been involved in the environmental sector for more than 5 years by leading environmental initiatives through her involvement at her University's Office of Sustainability, multiple NJ environmental groups, and The Green Cause. Currently, Frida is part of a two-year fellowship program with the Open Space Institute and works part-time at the Tenafly Nature Center.",
            image: "/team/frida.png",
        },
        {
           name: "Gabby Warren",
            role: "Lead Coordinator",
            bio: "Gabby is an undergraduate at the University of South Florida and has been with The Green Cause since 2023. As a lead coordinator, she is passionate about policy, community engagement, and educating the youth on environmental importance and inspiring sustainable habits.",
            image: "/team/gabby.jpg",
        },
        {
           name: "Sonia Garg",
            role: "Lead Coordinator",
            bio: "Sonia is an honors undergraduate at the University of Toledo pursuing medicine that integrates environmental and social determinants of health. She joined the Green Cause in 2022. As lead coordinator, she empowers youth and broader communities to address sustainability and environmental challenges.",
            image: "/team/sonia.jpg",
        },
        {
           name: "Leah Matheson",
            role: "Administrative Lead",
            bio: "Leah is a student deeply passionate about law, civic engagement, and global policy. She enjoys contributing to initiatives that promote sustainability, raise awareness, and amplify youth voices. Outside of academics, she spends her time playing volleyball, tennis, and going shopping.",
            image: "/team/leah.png",
        },
        {
           name: "Su Pyone",
            role: "External & Environmental Content Coordinator",
            bio: "Su, The Green Cause's External and Environmental Content Coordinator (joined in 2022), is passionate about crafting compelling stories on sustainability and environmental action. She is excited to connect with members and help the organization succeed",
            image: "/team/su.png",
        },
        {
           name: "Yogesh Jaganathan",
            role: "Webmaster",
            bio: "Yogesh is a high school senior from New Jersey with a strong interest in the intersection of technology and environmental sustainability. As the webmaster for The Green Cause, Yogesh manages the organization’s Next.js-based website and supports digital outreach efforts.",
            image: "/team/yogesh.png",
        },
        {
           name: "Mitali Deshmukh",
            role: "Website Trainee",
            bio: "Mitali supports The Green Cause team as an intern, managing website updates and helping maintain clear, accessible communication for the organization. Outside of academics, she enjoys reading and exploring new places with her puppy.",
            image: "/team/mitali.png",
        }
    ]
    return (
  <>
    <Head>
      <title>The Green Cause - Opportunities</title>
      <meta
        name="description"
        content="Short-term volunteering opportunities at The Green Cause"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
    </Head>

    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-fredoka text-center text-teal-700 mb-12">
          Meet Our Team
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group bg-white shadow-lg rounded-2xl overflow-hidden transition hover:shadow-xl"
            >
              <div className="relative w-full h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-teal-800/80 text-white flex items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-m">{member.bio}</p>
                </div>
              </div>
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-teal-700">
                  {member.name}
                </h2>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  </>
);
}

    