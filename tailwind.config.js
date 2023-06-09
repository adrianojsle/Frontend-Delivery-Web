/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#FAFAFA',
        primary: '#FF2351',
        secondary: '#FFDA6D',
        tertiary: '#FDF3DA'
      }
    },
  },
  plugins: [],
}

