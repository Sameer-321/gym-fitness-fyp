/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        con: "calc(100vh-24px)",
      },
    },
  },
  plugins: [],
};
