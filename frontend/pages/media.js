import Navbar from "../components/navbar"; // Adjust path as needed
import Image from "next/image"
import Link from "next/link"

const mediaPosts = [
  {
    title: "2025 Seeds of Caring's Kids as Planet Protectors: An Earth Day Celebration",
    description: `Green Cause was thrilled to be a part of the 2025 Seeds of Caring's Kids as Planet Protectors, an inspiring and collaborative Earth Day celebration that welcomed nearly 600 kids and grown-ups to join forces to bring KIND to the Earth.

At our interactive community booth, young changemakers got hands-on with sustainability—decorating reusable snack bags and learning through a sorting game how simple swaps like plastic vs glass straws or paper napkins vs reusable towels can make a difference.

Kids explored earth-friendly items like beeswax wraps, dryer balls, and plantable seed paper, and left with a sense of curiosity and responsibility. We can’t wait to return next year!`,
    link: "https://youtu.be/L7Mmq5gUauI",
    location: "Columbus, Ohio",
    date: null,
    image: null, 
  },
  {
    title: "🌿 Empowering the Next Generation: Sustainable Living at Brooklyn Prospect Sunset Yards",
    description: `One of our lead coordinators, Sonia Garg, led three sustainability workshops at Brooklyn Charter schools, engaging students in an immersive experience on how to live more consciously and care for our planet and health. 

Through an interactive presentation, students explored the reality of climate change, consequences of waste, and importance of everyday choices—from reducing plastic use to supporting sustainable diets. They learned how small habits, like using reusable bags, eating seasonal produce, conserving water, and air-drying clothes, can make a powerful impact.

We wrapped up the day by designing posters for recycling, composting, and trash to help students visually understand how to sort waste responsibly. It is always a pleasure to inspire curiosity and commitment towards a sustainable future. We are excited to continue our work for a greener future, one classroom at a time.`,
    link: null,
    location: "Brooklyn, NY",
    date: "December 18, 2024",
    image: null, 
  },
]

export default function MediaPage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4 text-green-700">Media Features</h1>
        <p className="text-gray-600 mb-10">
          Explore highlights of our community outreach and environmental action.
        </p>

        <div className="grid gap-10">
          {mediaPosts.map((post, index) => (
            <MediaCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
              link={post.link}
              location={post.location}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function MediaCard({ title, description, image, link, location, date }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      {image && (
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-6">
        {title && (
          <h2 className="text-2xl font-semibold text-green-800 mb-2">{title}</h2>
        )}

        {date && (
          <p className="text-sm text-gray-500 mb-2">📅 {date}</p>
        )}

        {location && (
          <p className="text-sm text-gray-500 mb-2">📍 {location}</p>
        )}

        {description && (
          <p className="text-gray-700 whitespace-pre-line mb-4">{description}</p>
        )}

        {link ? (
          <Link
            href={link}
            className="text-green-600 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More →
          </Link>
        ) : (
          <p className="text-gray-400 italic">No media link available</p>
        )}
      </div>
    </div>
  )
}
