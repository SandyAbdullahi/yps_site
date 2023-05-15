/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {

        'about': 'url(./Roof_top_noise.png)',
      },
      colors: {
        'primary': '#c22f30',
        'secondary': '#c22f30',
        'accent': '#3f3e40',
        'vampire-black': '#040707'
      }
    },
  },
  plugins: [],
}

