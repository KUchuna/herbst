/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-light": "#DD5502",
        "secondary-light": "#EDEDED",
      },
      padding: {
        "large-x": "0 80px"
      },
      maxWidth: {
        "large-width": "1440px"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
