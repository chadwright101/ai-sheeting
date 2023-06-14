/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "425px",
      tablet: "650px",
      tabletLarge: "900px",
      desktopSmall: "1100px",
      desktop: "1400px",
    },
    fontWeight: {
      200: "200",
      300: "300",
      350: "350",
      500: "500",
      700: "700",
    },
    fontSize: {
      heading: "2rem",
      subheading: "1.125rem",
      paragraph: "1rem",
    },
    fontFamily: {
      Open_Sans: ["Open Sans", "sans-serif"],
    },
    colors: {
      blue: "#0C50BE",
      black: "#1E1E1E",
      orange: "#F27C27",
      white: "#FFFFFF",
      linkBlue: "#3366CC",
    },
    extend: {},
  },
  plugins: [],
};
