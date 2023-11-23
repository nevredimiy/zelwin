/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '0px 0px 6px 0px rgba(0,28,135,0.20)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'ambassador-pattern': "url('./src/assets/images/woman/business-woman-phone-xl.jpg')"
      },
       container: {
        center: true,
      },
      screens: {
      'ssm': '520px',
    },
      colors: {
        'regal-blue': '#3861FB',
        'light-blue': '#F2F5FB',
        'accent-blue': '#D7DFFE',
        'regal-green': '#1BCB96',
        'regal-gray': '#919191',
        'active-gray': '#F2F5FB',
        'light-gray': '#828A97',
        'regal-black': '#242424',
        'regal-orange': '#FF862F',
        'regal-sky': '#3AD0FF',
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

