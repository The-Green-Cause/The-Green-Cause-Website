import Navbar from "@/components/navbar";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>The Green Cause - Home</title>
        <meta name="description" content="The Green Cause" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar/>
        <div id='imagebg' className='flex justify-center items-center bg-green-900 w-full h-[80vh]'>
          <div className="text-center">
            <p className='text-white text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl'>Education for our nation, with the hope of spreading awareness about the world&apos;s environmental concerns</p>
            <button className='mt-10 text-black font-bold bg-white py-2 px-5 rounded'>Join Us!</button>
          </div>
        <div id='3grid'>
          <p>test2</p>
        </div>
        </div>
      </div>
    </>
  )
}
