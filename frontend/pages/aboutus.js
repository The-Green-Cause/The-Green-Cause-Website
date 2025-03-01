import Navbar from "../components/navbar";
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
                    <h1 className="text-center mt-5 mb-5 text-2xl">ORIGINS</h1>
                    <p>The Green Cause started with founders Frida Ruiz and Bianca Palomino. 
                        When noticing the lack of emphasis on environmental education in her town, Frida wanted to extend the knowledge 
                        necessary to spark urgency in the young generation that will soon take charge of the future. 
                        Bianca resonated with this idea as she realized that her town had extremely limited information on the 
                        environment within the courses and activities available throughout her time in the public education system. 
                        At the peak of the pandemic, Frida and Bianca worked towards recruiting members and contacting schools within, 
                        first, their counties and soon expanding throughout all of New Jersey while also presenting at panels that 
                        advocated for the voices of youth leaders and environmental change.</p>
                </div>
                <div>
                    <h1 className="text-center mt-5 mb-5 text-2xl">OUR THREE PILARS</h1>
                    <div className="grid grid-cols-3 grid-rows-[1fr_2fr_1fr] gap-5">
                        <div className="bg-emerald-400 text-center">Engagement</div>
                        <div className="bg-emerald-400 text-center">Solution Based Learning</div>
                        <div className="bg-emerald-400 text-center">Considering the Impacts</div>
                        <div className="bg-emerald-400 text-center">We make sure all of our work including lesson presentations 
                            contain various forms of engagement. 
                            From the visuals and aesthetics of the slides to the presentation styles, we are sure our lessons can engage the proper audience. Presentations may contain excerpts from different movies and current media to introduce the topic at hand or comprehension questions scattered throughout. Most importantly, 
                            our lessons have an educational activity associated with the topic covered; 
                            such as mini demonstrations and hands-on experiments.</div>
                        <div className="bg-emerald-400 text-center">Environmental education oftentimes highlights the problems and effects caused by global warming 
                            (which are important). However, potential solutions or tangible action is not brought up as consistently. 
                            When solutions are brought up, real-life methods of implementation are rarely brought up and the gap between the potential and actually created. Thus why our work includes solutions that can be implemented catered to the target audience at hand. Ranging from presenting other environmental educational resources (i.e. websites, movies, books, etc.) 
                            to highlighting and empowering students to join other environmental youth led organizations.</div>
                        <div className="bg-emerald-400 text-center">We realize the importance of not abstracting 
                            environmental issues as many don’t realize how the effects of climate change 
                            are occurring in nearby communities; particularly underserved communities. 
                            Our lessons describe a real life event which occurred due to the particular issue covered: 
                            the people impacted, the outcome, etc. We hope to also bring to light environmental injustices that are occurring within our communities 
                            and the values of learning from other people’s experiences.</div>
                    </div>
                </div>

                <div>
            <h1>JOIN US</h1>
            <p>As we are expanding our organization to cover chapters 
              from all over, we are excited to also expand our team in order to help 
              facilitate and support our chapters’ work. Our goal is to have chapter coordinators 
              that can help cover the various timezones, geographically differences, and varying chapter needs + event opportunities. 
              If you are interested in being more involved fill out the form below! We will most likely respond to your application request 
              every two weeks or so, as this is a rolling basis application.</p>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLRDZQk9B-d8kuFSL66o5g_Gm5P0P5Z3xr3WERNX4ewrhtYA/viewform" target="_blank">
                <button className="bg-teal-400">Join us!</button>
              </a>
        
        </div>
            </div>
        </>
    )
}