/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{jsx,js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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