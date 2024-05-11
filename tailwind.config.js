/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          dark: '#C47F17',
          normal: '#DBAC2C',
          light: '#F1E9C9',
        },
        purple: {
          dark: '#4B2995',
          normal: '#8047F8',
          light: '#EBE5F9',
        },
      },
    },
  },
  plugins: [],
};
