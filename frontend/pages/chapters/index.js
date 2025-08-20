import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";

export default function Chapters() {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 7) + 1;
    setRandomImage(`/nigeriaslideshow/img${randomNum}.jpg`);
  }, []);

  const chapters = {
    nigeria: {
      name: "Nigeria",
      location: "Oyo, Nigeria",
      description:
        "Empowering students to lead sustainability efforts across Africa.",
      image: randomImage || "/nigeriaslideshow/img1.jpg", // fallback
    },
    "new-jersey": {
      name: "New Jersey",
      location: "South Brunswick, NJ",
      description:
        "Driving environmental change in the heart of the garden state.",
      image: "/images/chapters/new-york.jpg",
    },
    // Add more chapters here
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <h1 className="text-4xl font-fredoka text-center mb-10">Our Chapters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(chapters).map(([slug, chapter]) => (
            <div
              key={slug}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={chapter.image}
                alt={`${chapter.name} chapter`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{chapter.name}</h2>
                <p className="text-sm text-gray-600 mb-3">{chapter.location}</p>
                <p className="text-gray-700 mb-4">{chapter.description}</p>
                <Link
                  href={`/chapters/${slug}`}
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
