import Navbar from "../components/navbar";
import Head from "next/head";
import Form from 'next/form';
import { useState, useEffect } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "96beffce-b2dd-4e64-98f9-ebacdc5eed66");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }

    // Simulate form submission
    setMessage("Your message has been sent!"); 

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);

    // Optionally, reset the form
    event.target.reset()
  }

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
        <div className="flex flex-col items-center px-4">
          <h1 className="text-center text-5xl mt-6 mb-6 font-lora_semibold text-emerald-700">
            CONTACT US
          </h1>

          <Form onSubmit={handleSubmit} className="flex flex-col max-w-md w-full bg-white p-6 rounded-lg shadow-md">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              className="mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required 
              className="mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <textarea 
              name="message" 
              rows="5" 
              placeholder="Enter Text" 
              autoComplete="off" 
              required 
              className="mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
            
            <button 
              type="submit" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Submit
            </button>
          </Form>

          {/* Show success message if present */}
          {message && (
            <div className="bg-green-500 text-white p-3 mt-4 rounded-lg shadow-md transition-opacity duration-500">
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  )
}