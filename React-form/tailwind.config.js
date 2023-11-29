/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backGroundImg' : "url(/src/assets/bg.jpg)",
        'formImg' : "url(/src/assets/formBG.jpg)",
      }
      
    },
  },
  plugins: [],
}

