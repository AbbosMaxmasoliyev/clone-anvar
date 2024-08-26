/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {

        'dm': ['DM Sans', "sans-serif"],
        'ar': ['Arvo', "sans-serif"],
        'syn': ['Syne', "sans-serif"],
        'os': ['Oswald', "sans-serif"],
      },
      boxShadow: {
        'btn': '0px 7px 0px 0px rgba(82, 71, 41, 1)',
      }
    },

  },
  darkMode: "class",
  plugins: [],
};
