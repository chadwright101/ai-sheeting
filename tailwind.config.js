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
      tablet: "750px",
      tabletLarge: "1050px",
      desktop: "1450px",
    },
    fontWeight: {
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      700: "700",
    },
    fontSize: {
      heading: [
        "2rem",
        {
          fontWeight: "700",
        },
      ],
      subheading: [
        "1.125rem",
        {
          fontWeight: "600",
        },
      ],
      paragraph: "1rem",
    },
    fontFamily: {
      Open_Sans: ["Open Sans", "sans-serif"],
      Ovo: ["Ovo", "serif"],
    },
    colors: {
      blue: "#0C50BE",
      black: "#1E1E1E",
      orange: "#F27C27",
      white: "#FFFFFF",
      linkBlue: "#3366CC",
    },
    extend: {
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
