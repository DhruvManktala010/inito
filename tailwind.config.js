/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue50: '#F2F8FA',
        blue100: '#C3F2FF',
        blue200: '#0096AD',
        blue300: '#112D35'
      },
      fontFamily: {
        /* Set Lato as the default font-family*/
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
