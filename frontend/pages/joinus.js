"use client";

import { HeartHandshake, Users, Flag } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function JoinUsPage() {
  const items = [
    {
      title: "Volunteer",
      icon: HeartHandshake,
      blurb:
        "Pitch in at events, help with outreach, or lend your skills remotely—flexible commitments welcome.",
      cta: { label: "Sign up to Volunteer", href: "/volunteer" },
    },
    {
      title: "Join the Internal Team",
      icon: Users,
      blurb:
        "Apply to our core team and help run programs, operations, design, tech, and more.",
      cta: { label: "Apply to the Team", href: "/apply" },
    },
    {
      title: "Start a Chapter",
      icon: Flag,
      blurb:
        "Bring our mission to your school or city. We’ll share a starter kit, training, and ongoing support.",
      cta: { label: "Launch a Chapter", href: "/chapters/start" },
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-4xl flex-1 px-6 py-16 lg:px-8">
        <h1 className="text-center text-4xl font-fredoka text-green-800">
          Join Us
        </h1>
        <p className="mt-6 text-lg leading-7 text-center text-slate-700">
          The Green Cause offers three simple ways for you to get involved in spreading
          environmental education and making a difference. Whether you’d like to contribute your time
          directly, help shape the organization, or bring our mission to your community, there’s a role
          for you.
        </p>

        <div className="mt-12 space-y-12">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center">
                <div className="flex justify-center">
                  <div className="rounded-full bg-green-100 p-4">
                    <Icon className="h-8 w-8 text-green-700" aria-hidden="true" />
                  </div>
                </div>
                <h2 className="mt-4 text-2xl font-fredoka text-green-800">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-slate-700">
                  {item.blurb}
                </p>
                <div className="mt-4">
                  <Link
                    href={item.cta.href}
                    className="rounded-md bg-brown-500 px-5 py-2 text-sm font-medium text-white shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    {item.cta.label}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-700">
            Not sure where to start? <Link href="/contact" className="text-green-700 underline underline-offset-4">Talk to us</Link>
            {" "}and we’ll help you choose the best fit.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
