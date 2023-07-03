/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{jsx,js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      darkGradiantBg: '#151F2A',
      lightGradiantBg: '#4E342F',
      white: '#fff',
      black: '#000',
      pastelTeal: '#D2FBD0',
      'pastelBlue': '#8EC5FC',
      'teal': '#008080'


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

