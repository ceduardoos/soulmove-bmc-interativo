/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f4ef',
          100: '#e2e9de',
          500: '#4d705c',
          700: '#315142',
          900: '#19342d',
        },
        earth: {
          50: '#faf7ef',
          100: '#eee8da',
          300: '#d5c6a7',
          500: '#8a7149',
        },
        slateblue: '#566b70',
      },
      boxShadow: {
        card: '0 7px 20px rgba(47, 62, 47, 0.06)',
        focus: '0 13px 30px rgba(39, 66, 51, 0.14)',
      },
    },
  },
  plugins: [],
}
