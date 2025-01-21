/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        Regular: ['Pretendard-Regular'],
        Medium: ['Pretendard-Medium'],
        SemiBold: ['Pretendard-SemiBold'],
        Bold: ['Pretendard-Bold'],
        Logo: ['Jalnan2TTF'],
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
        primary_300: '#5299FF',
        primary_400: '#3182F6',
        primary_500: '#386BF6',
        primary_600: '#9DB2CE',

        kakao: '#FFF06A',
      },
    },
  },
  plugins: [],
};
