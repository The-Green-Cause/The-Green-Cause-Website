import Footer from "../components/footer";
import Navbar from "../components/navbar"; 
import Image from "next/image"
import Link from "next/link"

const mediaPosts = [
  {
    title: "2025 Seeds of Caring's Kids as Planet Protectors: An Earth Day Celebration",
    description: `Green Cause was thrilled to be a part of the 2025 Seeds of Caring's Kids as Planet Protectors, an inspiring and collaborative Earth Day celebration that welcomed nearly 600 kids and grown-ups to join forces to bring KIND to the Earth.

At our interactive community booth, young changemakers got hands-on with sustainability—decorating reusable snack bags and learning through a sorting game how simple swaps like plastic vs glass straws or paper napkins vs reusable towels can make a difference.

Kids explored earth-friendly items like beeswax wraps, dryer balls, and plantable seed paper, and left with a sense of curiosity and responsibility. We can’t wait to return next year!`,
    links: ["https://youtu.be/L7Mmq5gUauI"],
    link_texts: ["View More"],
    location: "Columbus, Ohio",
    date: null,
    image: null, 
  },
  {
    title: "🌿 Empowering the Next Generation: Sustainable Living at Brooklyn Prospect Sunset Yards",
    description: `One of our lead coordinators, Sonia Garg, led three sustainability workshops at Brooklyn Charter schools, engaging students in an immersive experience on how to live more consciously and care for our planet and health. 

Through an interactive presentation, students explored the reality of climate change, consequences of waste, and importance of everyday choices—from reducing plastic use to supporting sustainable diets. They learned how small habits, like using reusable bags, eating seasonal produce, conserving water, and air-drying clothes, can make a powerful impact.

We wrapped up the day by designing posters for recycling, composting, and trash to help students visually understand how to sort waste responsibly. It is always a pleasure to inspire curiosity and commitment towards a sustainable future. We are excited to continue our work for a greener future, one classroom at a time.`,
    links: null,
    link_texts: null,
    location: "Brooklyn, NY",
    date: "December 18, 2024",
    image: null, 
  },
  {
    title: "📺 In The Know Climate Changemakers: Docuseries ",
    description: null,
    links: ["https://youtu.be/6Ggb7QJJHVI?si=DSQ0nypGK331Y_Zs"],
    link_texts: ["View More"],
    location: null,
    date: null,
    image: null, 
  },
  {
    title: "2021 Blue Ridge Eco Fair",
    description: null,
    links: ["https://www.youtube.com/watch?v=9gMcSEi2LtY"],
    link_texts: ["View More"],
    location: null,
    date: null,
    image: null, 
  },
  {
    title: "NY & NJ Climate Education Youth Summit in 2021",
    description: null,
    links: ["https://blogs.cuit.columbia.edu/edsdcsd/2021/01/25/ny-nj-climate-education-youth-summit/", "https://www.youtube.com/watch?v=9yD717ApGeQ", "https://gogreenbk.org/day-1-ny-nj-climate-education-youth-summit/"],
    link_texts: ["Columbia Blog", "YouTube Video", "Go Green Brooklyn"],
    location: null,
    date: null,
    image: null, 
  },
  {
    title: "NJ Climate Education Summit 2022",
    description: null,
    links: ["https://blogs.cuit.columbia.edu/edsdcsd/2022/01/18/new-jersey-climate-education-summit-2022/"],
    link_texts: ["View More"],
    location: null,
    date: null,
    image: null, 
  },
  {
    title: "International Conference for Sustainable Development (ICSD) 2020",
    description: null,
    links: ["https://ic-sd.org/events/icsd-2020/"],
    link_texts: ["View More"],
    location: null,
    date: null,
    image: null, 
  },
  
]

export default function MediaPage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4 text-green-700 text-center">Media Features</h1>
        <p className="text-gray-600 mb-10 text-center">
          These are some of the events that The Green Cause participated in, ranging from classroom presentations to speaking engagements like festivals (both in person and virtual). If you are interested in The Green Cause participating in your event or other media inquiries, contact us at thegreencauseinitiative@gmail.com. 
        </p>

        <div className="grid gap-10">
          {mediaPosts.map((post, index) => (
            <MediaCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
              links={post.links}
              link_texts={post.link_texts}
              location={post.location}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

function MediaCard({ title, description, image, links, link_texts, location, date }) {
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

        {links && links.length > 0 ? (
          <div className="flex flex-col gap-2">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link}
                className="text-green-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link_texts && link_texts[i] ? link_texts[i] : `View More ${i + 1}`} →
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic">No media link available</p>
        )}
      </div>
      
    </div>
  )
}
