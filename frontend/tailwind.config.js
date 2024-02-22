/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#ACB0BA", 
        footer: "#D4D7DC",
        container: "#F3DFDA",
      },
    },
  },
  plugins: [],
}

