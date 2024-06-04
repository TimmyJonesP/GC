/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        golden: "#F3D59B",
        ultrablue: "#011826",
        subtitle: "#E5D6D6",
      },
    },
  },
  plugins: [],
};
