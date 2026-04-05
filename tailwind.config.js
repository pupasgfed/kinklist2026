/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#323347',
          mid: '#4a4b65',
          accent: '#aaa8f8',
        },
      },
    },
  },
  plugins: [],
};
