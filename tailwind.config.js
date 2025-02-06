/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' if you prefer automatic detection based on user's system preference
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        contentBgColor: '#f2f5fa',
      },
    },
  },
  plugins: [],
}

