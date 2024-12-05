/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{njk,html,js}",
    "./_site/**/*.{njk,html,js}",
    "./.eleventy.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
