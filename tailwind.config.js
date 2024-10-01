/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        LightGreen: "#64CCC5",
        LightGray: "#F4F4F4",
        LightBlack: "#0C0C0C",
        DarkGray: "#DFDFDF",
      },
      fontSize: {
        h1: ["80px"],
        h2: ["77px"],
        h3: ["64px"],
        h4: ["45px"],
        h5: ["30px"],
        h6: ["20px"],
        Bodytext: ["18px"],
        bodysmall: ["16px"],
      },
      fontWeight: {
        h1: "600", // Semi-bold
        h2: "700",
        h3: "600",
        h4: "700",
        h5: "600",
      },
      fontFamily: {
        roboto: ["var(--font-roboto-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
