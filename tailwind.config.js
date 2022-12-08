/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0D1017',
          960: '#2e333a',
          970: '#0e1016',
        },
        blue: {
          950: '#206FEB',
          960: '#a2cffb',
        },
        white: {
          950: '#F0F6FC',
          960: '#C9D1D9',
        },
        red: {
          950: '#DA3633',
        },
        green: {
          950: '#2EA043',
        },
        grey: {
          950: '#C9D1D9',
          960: '#b1bac4',
        },
        orange: {
          950: '#b05b2d',
        },
        yellow: {
          950: '#966c23',
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};
