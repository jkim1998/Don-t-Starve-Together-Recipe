/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: { DST: "DST" },
    // colors: {
    //   cookbook: "#ffae68",
    // },
    extend: {
      backgroundImage: {
        frame: "url('/src/data/image/frame.png')",
      },
    },
  },
  plugins: [],
};
