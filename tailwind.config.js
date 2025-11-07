/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // for Next.js App Router
    "./components/**/*.{js,ts,jsx,tsx}" // for components
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" } // moves half width
        }
      },
      animation: {
        scroll: "scroll 15s linear infinite", // adjust duration for speed
      }
    },
  },
  plugins: [],
};
