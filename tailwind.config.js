/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
<<<<<<< HEAD
    screens:{
=======
    fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Lato', 'sans-serif'],
        mono: ['Lato', 'sans-serif'],
        display: ['Lato', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
    },
    // Responsive Sizes
    screens: {
        xsm: '20px',
>>>>>>> 86a926eb18ff1a1e17222fd06432be79e515feb8
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
<<<<<<< HEAD
=======
      },

    colors: {
        'aiesec-blue':'#037Ef3',
        'white':'#FFFFFF',
        'black':'#000000',
>>>>>>> 86a926eb18ff1a1e17222fd06432be79e515feb8
    },
    extend: {
      colors: {
        'general-blue':'#037Ef3',
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
<<<<<<< HEAD
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes:{
        marquee:{
          '0%': {transform: 'translateX(50%)'},
          '100%': {transform: 'translateX(-50%)'},
        }
      }
=======
      padding: {
        '17px': '500px',
      },
>>>>>>> 86a926eb18ff1a1e17222fd06432be79e515feb8
    },
  },
  plugins: [],
}
