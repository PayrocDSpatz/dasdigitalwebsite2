/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Montserrat for the logo and headings, per the brand guide.
      fontFamily: { brand: ["var(--font-brand)", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
