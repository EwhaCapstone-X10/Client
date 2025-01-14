/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        heading2: ['4.25rem'],
        heading3: ['3rem'],
        heading4: ['2.25rem'],
        heading5: ['1.875rem'],
        heading6: ['1.5rem'],
        body1: ['1.25rem'],
        body2: ['1.125rem'],
        body3: ['1rem'],
        body4: ['.875rem'],
        caption1: ['.75rem'],
      },
      colors: {
        // gray
        gray_50: '#F4F4F4',
        gray_100: '#EDEDEC',
        gray_200: '#DFDEDA',
        gray_300: '#C6C4C1',
        gray_400: '#AAA9A6',
        gray_500: '#8D8D8A',
        gray_600: '#6A6967',
        gray_700: '#4E4C49',
        gray_800: '#333331',
        gray_900: '#242421',
        gray_950: '#171715',

        // primary
        primary_50: '#E5EDFF',
        primary_100: '#CCDBFF',
        primary_200: '#99B8FF',
        primary_300: '#6694FF',
        primary_400: '#3182F6',
        primary_500: '#3370FF',
        primary_600: '#003DCC',
        primary_700: '#002E99',
        primary_800: '#001F66',
        primary_900: '#000F33',
        primary_950: '#00081A',
      },
    },
  },
  plugins: [],
};
