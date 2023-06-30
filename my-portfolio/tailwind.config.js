/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{jsx,js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      darkGradiantBg: '#221E21',
      lightGradiantBg: '#231E21',
      white: '#fff',
      black: '#000',
      pastelTeal: '#D2FBD0',
      'pastelBlue': '#8EC5FC',


    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
    plugins: [],
  }
}

