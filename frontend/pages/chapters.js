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
            <h1 class="text-4xl text-center mt-3">CHAPTERS</h1>
            <p class="text-center">New Jersey</p>
            <p class="text-center">Nigeria</p>
        
        </div>
      </div>
    </>
  )
}