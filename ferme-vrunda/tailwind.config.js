/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'about-img':"url('/assets1/asset 31.jpg')",
      },
      fontSize:{
        xxs:['10px', '14px']
      }
    },
  },
  plugins: [],
}

