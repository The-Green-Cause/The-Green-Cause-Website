import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";

export default function Chapters() {
  // State to hold a random image for Nigeria chapter
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 7
    setRandomImage(`/nigeriaslideshow/img${randomNum}.jpg`);
  }, []);

  // Chapters data
  const chapters = {
    nigeria: {
      name: "Nigeria",
      location: "Oyo, Nigeria",
      description:
        "Empowering students to lead sustainability efforts across Africa.",
      image: randomImage || "/nigeriaslideshow/img1.jpg", // fallback image
    },
    "new-jersey": {
      name: "New Jersey",
      location: "South Brunswick, NJ",
      description:
        "Driving environmental change in the heart of the garden state.",
      image: "/images/chapters/new-york.jpg",
    },
    // Add more chapters here as needed
  };

  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-12 px-6">
        {/* Intro Section */}
        <section className="max-w-6xl mx-auto mb-12">
          <h1 className="text-5xl font-fredoka text-green-800 text-center mb-6">Chapters</h1>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, The Green Cause is an environmental nonprofit organization based around promoting environmental activism among the youth and larger communities through the making of various content, such as lessons and social media posts. To strengthen our impact, we have recently launched our brand new chapter structure, which allows people to spread environmental awareness in their own communities as part of The Green Cause. This gives many individuals a chance to connect with their cities more closely and form a strong team to combat climate change. Individuals who are involved in a chapter have the autonomy to do what they think is best to fit the interests of their community in hopes to educate and inspire more people to join the cause. We, as the board of The Green Cause, truly believe that the involvement of every person is so crucial to create change in this world, which is what we hope to accomplish with this launch. We hope that you too can be a leader, and work with us to change the world for the better.
          </p>
        </section>

        {/* Why Create a Chapter Section */}
        <section className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl font-fredoka mb-6">
            Why should I create a chapter?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Starting a chapter for The Green Cause serves as an opportunity to work with your community to address climate change. This allows you to connect with city and/or school officials, create events & projects, and bring together a coalition of like-minded students. You will be able to learn & apply many important leadership development skills that will help you with your future endeavors. You will be able to have autonomy to make decisions for your own chapter and create a vision for The Green Cause with all the resources and support provided by us. All of this while learning more about the environmental field and earning community service hours for your hard work! 
          </p>
        </section>

        {/* Chapters Grid Section */}
        <section>
          <h2 className="text-4xl font-fredoka text-center mb-10">
            Our Chapters
          </h2>

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
                  <h3 className="text-2xl font-semibold mb-2">{chapter.name}</h3>
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

          {/* Create Chapter CTA */}
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              Don’t see your city, school, etc represented?{" "}
              <Link
                href="https://drive.google.com/drive/folders/1wWS01B5VmggHvTITm4K-qjUldgvqTYq8?usp=sharing"
                className="text-green-600 font-semibold hover:underline"
                target="_blank"
              >
                Create a Chapter!
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
