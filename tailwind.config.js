/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/images/hero-image.png')",
      },
      colors: {
        1: "#221518",
        2: "#F7E1BC",
        3: "#54372B",
      },
    },
    fontFamily: {
      leiko: ["leiko"],
    },
  },
  plugins: [],
};
