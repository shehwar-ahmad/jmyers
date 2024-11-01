/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#BBDAEC",
        },
        secondary: {
          DEFAULT: "#E8D0EA",
        },
        tertiary: {
          DEFAULT: "#1F1F1F",
          100: "#545454"
        },
        green: {
          lime: "#5BAD34"
        }
      },
    },
  },
  plugins: [],
};
