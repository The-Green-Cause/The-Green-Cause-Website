/** @type {import('tailwindcss').Config} */
// test comment
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
        lora_semibold: ['"Lora"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
