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
      backgroundImage: {
        gradiente:
          "linear-gradient(to bottom, rgba(1, 24, 38, 1) 0%, rgba(1, 34, 55, 0) 100px)",
        "gradiente-gold":
          "linear-gradient(to bottom, rgba(243, 213, 155, 1), rgba(171, 118, 60, 1))",
        rombo:
          "linear-gradient(to bottom, rgba(243, 213, 155, 1), rgba(171, 118, 60, 1))",
      },
      rotate: {
        180: "180deg",
      },
      customUtilities: {
        "textarea-no-scrollbar": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        "no-scroll": {
          overflow: "hidden",
        },
      },
    },
  },
  plugins: [],
};
