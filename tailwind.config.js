/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        frame: "url('/src/data/frame.png')",
      },
    },
  },
  plugins: [],
};
