/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FE7A36",
        dark: "#280274",
        secondary: "#3652AD",
        third: "#E9F6FF",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
