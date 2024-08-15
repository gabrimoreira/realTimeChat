/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], darkMode: 'media', theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        '1.5': '1.5',
      },
      fontWeight: {
        normal: 400,
      },
      colors: {
        'text-color': 'rgba(255, 255, 255, 0.87)',
        'background-color': '#242424',
      },
    },
  },
  corePlugins: {
    fontSmoothing: true,
  },
  plugins: [],
}

