import Navbar from "../components/navbar";
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
            <h1>CONTACT US</h1>
            <p>As we are expanding our organization to cover chapters 
              from all over, we are excited to also expand our team in order to help 
              facilitate and support our chapters’ work. Our goal is to have chapter coordinators 
              that can help cover the various timezones, geographically differences, and varying chapter needs + event opportunities. 
              If you are interested in being more involved fill out the form below! We will most likely respond to your application request 
              every two weeks or so, as this is a rolling basis application.</p>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLRDZQk9B-d8kuFSL66o5g_Gm5P0P5Z3xr3WERNX4ewrhtYA/viewform" target="_blank">
                <button>Join us!</button>
              </a>
        
        </div>
      </div>
    </>
  )
}