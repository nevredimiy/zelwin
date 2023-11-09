/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
        center: true,
      },
    extend: {
      colors: {
        'regal-blue': '#3861FB',
        'light-blue': '#F2F5FB',
        'regal-green': '#1BCB96',
        'regal-gray': '#919191',
        'active-gray': '#F2F5FB',
        'regal-black': '#242424',
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
}

