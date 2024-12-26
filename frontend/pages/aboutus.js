import Navbar from "@/components/navbar";
import Head from "next/head";

export default function AboutUs(){
    return(
        <>
            <Head>
                <title>The Green Cause - Home</title>
                <meta name="description" content="The Green Cause" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div>
                <Navbar />
                <div>
                    <h1>ORIGINS</h1>
                </div>
                <div>
                    <h1>OUR THREE PILARS</h1>
                    <div className="grid grid-cols-3 grid-rows-2">
                        <div className="bg-gray-200">Engagement</div>
                        <div className="bg-gray-200">Solution Based Learning</div>
                        <div className="bg-gray-200">Considering the Impacts</div>
                        <div className="bg-gray-200">We make sure all of our work including lesson presentations 
                            contain various forms of engagement. 
                            From the visuals and aesthetics of the slides to the presentation styles, we are sure our lessons can engage the proper audience. Presentations may contain excerpts from different movies and current media to introduce the topic at hand or comprehension questions scattered throughout. Most importantly, 
                            our lessons have an educational activity associated with the topic covered; 
                            such as mini demonstrations and hands-on experiments.</div>
                        <div className="bg-gray-200">Environmental education oftentimes highlights the problems and effects caused by global warming 
                            (which are important). However, potential solutions or tangible action is not brought up as consistently. 
                            When solutions are brought up, real-life methods of implementation are rarely brought up and the gap between the potential and actually created. Thus why our work includes solutions that can be implemented catered to the target audience at hand. Ranging from presenting other environmental educational resources (i.e. websites, movies, books, etc.) 
                            to highlighting and empowering students to join other environmental youth led organizations.</div>
                        <div className="bg-gray-200">We realize the importance of not abstracting 
                            environmental issues as many don’t realize how the effects of climate change 
                            are occurring in nearby communities; particularly underserved communities. 
                            Our lessons describe a real life event which occurred due to the particular issue covered: 
                            the people impacted, the outcome, etc. We hope to also bring to light environmental injustices that are occurring within our communities 
                            and the values of learning from other people’s experiences.</div>
                    </div>
                </div>
            </div>
        </>
    )
}