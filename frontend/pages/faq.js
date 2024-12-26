import Navbar from "@/components/navbar";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>The Green Cause - Home</title>
        <meta name="description" content="The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Navbar/>
        <div>
          <h1 className="font-merriweather_italic text-2xl md:text-3xl text-center mb-6 mt-6">Frequently Asked Questions</h1>
            <p>Q: How do we ensure the quality of our lessons?

A: *Not only do our Environmental Education leads understand and ensure every lesson includes The Three Pillars, but we’re also forming a teacher advisory council that has access to all our lessons and checks through them to fact check and provide any feedback. <br />

If you’re a formal educator interested in joining the advisory council fill this form<br />

Q: Are the lessons and presentations free?<br />

A: Yes! Our entire purpose is to make environmental education accessible, hence we want to make our content free to all teachers. Our members receive community service hours for their hard work and contributions. <br />

Q: Are you solely New Jersey based? <br />

A: Although we originated in New Jersey, we are more than willing to collaborate with schools outside New Jersey. <br />

Q: Why are high school students creating the lessons? <br />

A: We want to give a platform for high school students to make an impact in their community by not only learning about the environment, but also having the opportunity to educate younger kids. As previous teachers have mentioned, younger students tend to listen and look up to older students. Moreover, the volunteers will gain presentation making experience, which will benefit them in college and their professional careers. </p>

        
        </div>
      </div>
    </>
  )
}