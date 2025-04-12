/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 4s linear infinite",
        "pop-blob": "pop-blob 8s infinite",
      },
      keyframes: { 
       shine: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
      },
    },
    colors: {
      filter: {
     "blur-20": "blur(20px)",
     "blur-25": "blur(25px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
 
}
}