/** @type {import('tailwindcss').Config} */
//test
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather_italic: ['"Merriweather"', "sans-serif"],
        croissant_one: ['"Croissant One"', '"Merriweather"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}