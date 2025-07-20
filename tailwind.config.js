/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // For `pages/` directory (Next.js default):
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // OR if using `src/` folder:
    "./src/**/*.{js,ts,jsx,tsx}",

    // For Next.js App Router (if used):
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}